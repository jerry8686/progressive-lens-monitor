// Cloudflare Worker - 万里灵镜 PAL Mate 代理（渐进镜舆情平台 AI 助手）
// 接收前端聊天请求，注入数据上下文，转发到腾讯混元 OpenAI 兼容接口

import { SYSTEM_PROMPT } from "./data_context.js";

// ==================== CORS ====================
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function handleOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

// ==================== 聊天处理 ====================
async function handleChat(request, env) {
  if (!env.HUNYUAN_API_KEY) {
    return new Response(JSON.stringify({ error: "Server misconfigured: missing API key" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  const userMessages = Array.isArray(body.messages) ? body.messages : [];
  const messages = [{ role: "system", content: SYSTEM_PROMPT }, ...userMessages];

  // 调用混元 OpenAI 兼容接口（流式）
  const hunyuanResp = await fetch("https://api.hunyuan.cloud.tencent.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.HUNYUAN_API_KEY}`,
    },
    body: JSON.stringify({
      model: "hunyuan-turbos-latest",
      messages: messages,
      stream: true,
      temperature: 0.7,
      enable_enhancement: true,
    }),
  });

  if (!hunyuanResp.ok) {
    const errText = await hunyuanResp.text();
    return new Response(JSON.stringify({ error: `Hunyuan API error: ${hunyuanResp.status} ${errText}` }), {
      status: 502,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  // 流式转发（SSE）到前端
  const stream = new ReadableStream({
    async start(controller) {
      const reader = hunyuanResp.body.getReader();
      const decoder = new TextDecoder();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          // 直接转发混元的 SSE 格式（data: {...}\n\n）
          controller.enqueue(new TextEncoder().encode(chunk));
        }
      } catch (e) {
        controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ error: e.message })}\n\n`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      ...CORS_HEADERS,
    },
  });
}

// ==================== 路由 ====================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return handleOptions();
    }

    if (url.pathname === "/api/chat" && request.method === "POST") {
      return handleChat(request, env);
    }

    return new Response("万里灵镜 PAL Mate (Progressive Lens AI Assistant) Worker. POST to /api/chat", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
};

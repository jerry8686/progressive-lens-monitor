// ==================== i18n ====================
// Shared translations for all 3 pages
// Language: zh / en
var __LANG__ = 'zh';

(function initI18n() {
  var urlParams = new URLSearchParams(window.location.search);
  var urlLang = urlParams.get('lang');
  if (urlLang && (urlLang === 'zh' || urlLang === 'en')) {
    __LANG__ = urlLang;
    localStorage.setItem('progressiveLensLang', urlLang);
  } else {
    var saved = localStorage.getItem('progressiveLensLang');
    if (saved && (saved === 'zh' || saved === 'en')) {
      __LANG__ = saved;
    }
  }
})();

var I18N = {
  zh: {
    // -- Common --
    'lang_label': 'EN',
    'lang_tip': 'Switch to English',
    'back_to_main': '← 返回主报告',
    'back_to_main_cancel': '← 返回主报告（放弃更改）',
    'confirm_save': '✓ 完成（保存更改）',

    // -- Main Report --
    'main_title': '渐进镜/老花镜 — 四平台评论舆情分析',
    'main_subtitle': '数据范围: 小红书/抖音/公众号 | 近30天 | 103条光学相关帖子 | 生成时间: 2026-08-09 22:38',
    'kw_config': '关键词配置',
    'kw_settings_btn': '⚙️ 设置关键词',
    'kw_summary_fmt': '内容词 {content} · 评论词 {pos} {neg}',

    'sec1_title': '一、四平台评论情感总览',
    'card_total_posts': '总分析帖子数',
    'card_platform_dist': '各平台评论分布',
    'card_view_detail': '点击查看详情',
    'card_positive_rate': '正面评论占比',
    'card_negative_rate': '负面评论占比',
    'card_pos_bar': '条正面',
    'card_neg_bar': '条负面',
    'sentiment_dist': '各平台正负中性分布',
    'platform': '平台',
    'total': '总数',
    'positive': '正面',
    'negative': '负面',
    'neutral': '中性',
    'distribution': '分布',

    'sec2_title': '二、各平台正负面评论关键词 Top 10',
    'pos_keywords': '正面关键词',
    'neg_keywords': '负面关键词',
    'category': '类别',

    'sec3_title': '三、品牌 × 评论情感关联图谱',
    'sec3_desc': '展示各品牌在评论中关联的正负面关键词网络，点击品牌卡片可查看按平台下钻的详细数据',
    'comment_search_btn': '🔍 评论关键词搜索',
    'brand_pos_kw': '正面关联词',
    'brand_neg_kw': '负面关联词',
    'brand_total_mentions': '共 {count} 条提及',
    'brand_no_data': '暂无品牌数据',

    'sec4_title': '四、品牌评论按平台下钻明细',
    'sec4_hint': '⬆ 点击品牌行查看详细正负面关键词分布',
    'brand': '品牌',
    'total_mentions': '总提及',
    'platform_dist': '平台分布',

    'sec5_title': '五、评论存量 vs 增量（周维度更新框架）',
    'stock_label': '存量数据 (8/3前)',
    'incr_label': '本周增量 (8/3-8/9)',
    'stock_count': '条',
    'brand_distribution': '品牌分布',

    'sec6_title': '六、各平台正负面关键词对比',

    'sec7_title': '七、百度指数关键词热度对比',
    'sec7_desc': '以下数据基于 Chinaz/5118 等第三方工具的估算月均搜索量（2026年7月），反映用户在百度的主动搜索行为，与社媒被动曝光形成互补视角。',
    'baidu_est_monthly': '百度估算月搜索量',

    'sec8_title': '八、百度指数关键词详细对比',
    'core_keyword': '核心关键词',
    'est_monthly_vol': '估算月搜索量',
    'search_intent': '搜索意图',
    'ranking_trend': '排名趋势',

    'sec9_title': '九、渐进镜选配主要场景对比',
    'sec9_desc': '从平台社媒内容和百度搜索指数两个维度，对比渐进镜/老花镜的五大核心选配场景（驾驶、办公、户外运动、摄影、电子产品），揭示不同场景的用户关注度和品牌布局差异。',
    'card1_title': '平台内容场景分布',
    'card1_desc': '基于小红书/抖音/公众号三平台103条帖子的场景关键词匹配统计',
    'card2_title': '百度指数场景热度对比',
    'card2_desc': '基于百度估算月搜索量（2026年7月），反映用户主动搜索各场景相关关键词的频次',
    'scenario_driving': '驾驶',
    'scenario_office': '办公',
    'scenario_outdoor': '户外运动',
    'scenario_photo': '摄影',
    'scenario_digital': '电子产品',
    'scenario_monthly_total': '月搜索总量',
    'scenario_brand_assoc': '各场景品牌关联',
    'scenario_brand_mentions': '关联品牌（提及次数）',
    'scenario_sample': '典型内容',
    'scenario_no_brand': '无品牌提及',
    'insight_platform': '洞察：电子产品（手机/数码/屏幕）是渐进镜内容提及最多的场景，其次是办公场景。驾驶场景虽然专业需求明确（蔡司驾驶渐进镜），但社媒讨论量较低。摄影场景提及最少，属于小众需求。户外运动场景有一定讨论但品牌关联较弱。',
    'insight_baidu': '洞察：百度搜索维度上，电子产品（防蓝光眼镜8K+手机/数码眼镜）搜索量最高，反映大众对电子屏幕护目的刚性需求。户外运动（运动眼镜4.5K+变色镜片3.6K）搜索热度第二，但社媒内容关联较弱，存在内容供给缺口。办公场景搜索量可观（电脑眼镜3.2K），与社媒内容基本匹配。驾驶场景搜索量中等但增长趋势明显（开车眼镜↑），蔡司驾驶渐进镜有先发优势。摄影场景搜索量最低，属长尾需求。',
    'cross_comparison': '双维度交叉对比',
    'cross_social': '社媒内容量',
    'cross_baidu': '百度搜索量',
    'cross_match': '供需匹配度',
    'cross_strategy': '策略建议',
    'match_shortage': '⚠️ 供不应求',
    'match_good': '✓ 匹配良好',
    'match_oversupply': '→ 供过于求',
    'match_longtail': '○ 长尾场景',
    'match_improve': '→ 待提升',
    'strategy_shortage': '搜索需求高但社媒内容少，应加大内容种草投入',
    'strategy_good': '供需均衡，维持现有内容策略',
    'strategy_oversupply': '搜索需求有限，内容可转向长尾SEO',
    'strategy_longtail': '小众需求，适合精准投放而非规模化',
    'strategy_improve': '搜索和内容均有增长空间',

    'sec10_title': '十、品牌关键词策略洞察',
    'dim_brand_mind': '品牌心智词',
    'dim_social_kw': '最高频社媒词',
    'dim_baidu_search': '百度月搜索',
    'dim_price_tag': '价签关联',
    'dim_audience': '人群标签',
    'dim_competitor': '竞品对标',
    'dim_strategy': '声量策略建议',

    'sec11_title': '十一、分析方法与局限',
    'method_sentiment': '情感分类方法: 基于关键词匹配 + 正面/负面类别进行情感判定',
    'method_brand': '品牌识别: 精确匹配 + 别名识别',
    'method_source': '数据来源: cn-last30days 红狐引擎 × 4轮关键词搜索 × 3平台',
    'method_config': '关键词配置: 点击顶部「⚙️ 设置关键词」按钮打开独立配置页面。评论关键词搜索请点击第三部分旁「🔍 评论关键词搜索」按钮。',
    'method_limit': '⚠️ 局限: 情感分析基于标题/描述的关键词匹配，非人工标注；豪雅样本量过少',

    // Drilldown
    'drilldown_all_items': '全部帖子列表',
    'drilldown_platform_data': '各平台评论数据分布',
    'drilldown_pos_summary': '正面评论关键词汇总',
    'drilldown_neg_summary': '负面评论关键词汇总',
    'drilldown_detail': '下钻详情',
    'drilldown_no_data': '暂无下钻数据',
    'close_panel': '✕ 收起',
    'col_title': '标题',
    'col_abstract': '内容摘要',
    'col_sentiment': '情感',
    'col_match_kw': '匹配词',
    'col_link': '链接',
    'col_no_kw': '无关键词',

    // Brand drilldown
    'brand_comment_detail': '评论情感关键词下钻',
    'tab_all_kw': '全部关键词',
    'tab_by_platform': '按平台分布',
    'tab_association': '品牌-关键词关联',
    'brand_pos_no_data': '无正面关键词数据',
    'brand_neg_no_data': '无负面关键词数据',

    // Refresh
    'refresh_done': '✅ 分析完成！已更新全部结果',
    'kw_updated': '✅ 关键词设置已更新，已刷新全部结果',

    // Update notice
    'update_notice': '📅 更新机制: 本周增量数据将在下周更新时自动并入存量。当前分界时间: 2026年8月3日。',

    // Baidu detail
    'brand_zeiss': '蔡司 ZEISS',
    'brand_essilor': '依视路 Essilor',
    'brand_hoya': '豪雅 HOYA',
    'brand_nikon': '尼康 Nikon',
    'brand_generic': '通用品类',

    // Baidu 30-day
    'baidu_30day_title': '过去30天百度搜索量趋势',
    'baidu_heatmap_title': '场景×关键词相关性热力图',

    // Scenarios for chart
    'scene_driving': '驾驶',
    'scene_office': '办公',
    'scene_outdoor': '户外运动',
    'scene_photo': '摄影',
    'scene_digital': '电子产品',

    // -- Keyword Settings Page --
    'ks_title': '关键词设置 — 渐进镜舆情分析',
    'ks_heading': '⚙️ 关键词设置',
    'ks_subtitle': '分为「内容关键词」和「评论关键词」两部分。内容关键词用于内容检索与筛选，评论关键词用于情感分析。修改后点击底部「完成」保存并返回主报告。',
    'ks_tab_content': '📋 内容关键词',
    'ks_tab_comment': '💬 评论关键词',
    'ks_cat_product': '📋 品类关键词',
    'ks_cat_brand': '🏷️ 品牌关键词',
    'ks_cat_series': '🔧 产品系列关键词',
    'ks_cat_scene': '🏪 场景关键词',
    'ks_cat_audience': '👥 人群关键词',
    'ks_select_all': '全选',
    'ks_deselect_all': '取消全选',
    'ks_add_custom_content': '➕ 添加自定义内容关键词',
    'ks_reset_default': '恢复默认',
    'ks_input_placeholder': '输入新关键词，例如: 离焦镜、离焦...',
    'ks_add_btn': '添加',
    'ks_no_custom_content': '暂无自定义内容关键词，在上方输入框中添加',
    'ks_pos_comment': '😊 正面评论关键词',
    'ks_neg_comment': '😟 负面评论关键词',
    'ks_select_all_pos': '全选正面',
    'ks_deselect_all_pos': '取消全选',
    'ks_select_all_neg': '全选负面',
    'ks_deselect_all_neg': '取消全选',
    'ks_add_custom_comment': '➕ 添加自定义评论关键词',
    'ks_input_comment_placeholder': '输入新关键词，例如: 膜层、阿贝数、偏色...',
    'ks_no_custom_comment': '暂无自定义评论关键词，在上方输入框中添加',
    'ks_loading': '加载中...',
    'ks_header_summary': '内容词 {content} · 评论词 😊{pos} 😟{neg}',
    'ks_confirm_reset_content': '确定恢复内容关键词为默认设置？这将清除所有自定义内容关键词。',
    'ks_confirm_reset_comment': '确定恢复评论关键词为默认设置？这将清除所有自定义评论关键词。',
    'ks_saved_redirect': '✅ 关键词设置已保存，正在返回...',
    'ks_reset_done': '关键词已恢复默认',

    // -- Comment Search Page --
    'cs_title': '评论关键词搜索 — 渐进镜舆情分析',
    'cs_heading': '🔎 评论关键词搜索',
    'cs_subtitle': '搜索正负面关键词来源内容，查看原帖详情。支持按品牌、平台、情感倾向筛选。关键词可在主报告的「⚙️ 设置关键词」中配置。',
    'cs_kw_config': '当前关键词配置',
    'cs_search_placeholder': '搜索内容或评论关键词... 例如: 渐进镜、头晕、性价比、蔡司',
    'cs_search_btn': '🔍 搜索',
    'cs_clear_btn': '✕ 清除',
    'cs_content_chip': '内容关键词',
    'cs_pos_chip': '正面高频词',
    'cs_neg_chip': '负面高频词',
    'cs_brand_chip': '品牌',
    'cs_filter_all_platform': '全部平台',
    'cs_filter_all_brand': '全部品牌',
    'cs_filter_no_brand': '无品牌关联',
    'cs_filter_all_sentiment': '全部情感',
    'cs_filter_positive': '😊 正面',
    'cs_filter_negative': '😟 负面',
    'cs_filter_neutral': '😐 中性',
    'cs_filter_label': '筛选',
    'cs_results_none': '未找到与此相关的结果',
    'cs_results_try': '尝试更换关键词或清除筛选条件',
    'cs_results_found': '搜索与此相关的关键词找到 {count} 条结果',
    'cs_results_filtered': ' (已筛选: {filters})',
    'cs_col_platform': '平台',
    'cs_col_title': '标题',
    'cs_col_sentiment': '情感',
    'cs_col_match': '匹配关键词',
    'cs_col_brand': '品牌',
    'cs_col_date': '发布时间',
    'cs_col_likes': '赞',
    'cs_col_link': '链接',
    'cs_view_link': '🔗 查看',
    'cs_all_items': '📋 全部帖子数据',
    'cs_all_items_desc': '以下为全部帖子数据，可直接浏览或使用上方搜索功能筛选',
    'cs_empty_prompt': '输入关键词或点击上方标签开始检索',
    'cs_kw_updated': '关键词设置已更新，已刷新数据',

    // -- Extended Report Sections (sec12-19) --
    'sec12_title': '十二、数据总览（四平台全量数据）',
    'sec12_desc': '基于红狐API + WebSearch + 百度指数的四平台全量数据概览，包含部分未被纳入前面标注分析的帖子内容',
    'sec12_total_content': '有效内容总条数（4平台）',
    'sec12_brand_mentions': '三大品牌总提及数',
    'sec12_total_engagement': '总互动量',
    'sec12_baidu_total': '三品牌百度月搜索合计',
    'sec12_xhs_content': '配镜攻略/价格分享/品牌种草',
    'sec12_dy_content': '科普/情感/直播带货/AI黑科技',
    'sec12_gzh_content': '行业深度/医学科普/临床试验',
    'sec12_bili_content': '测评对比/教程/避坑',
    'sec12_brand_ratio': '品牌声量比: 蔡司:依视路:豪雅 ≈ 87:17:2',

    'sec13_title': '十三、厂商声量分析（可点击下钻）',
    'sec13_desc': '三大品牌社媒声量、情感倾向及平台分布详细数据',
    'sec13_zeiss': '蔡司 (ZEISS) 提及数',
    'sec13_essilor': '依视路 (Essilor) 提及数',
    'sec13_hoya': '豪雅 (HOYA) 提及数',
    'sec13_zeiss_sentiment': '正面 51% | 中性 43% | 负面 7%',
    'sec13_essilor_sentiment': '正面 53% | 中性 29% | 负面 18%',
    'sec13_hoya_sentiment': '仅"五大品牌对比"帖中被顺带提及',
    'sec13_drill_platform': '按平台',
    'sec13_drill_keyword': '按关键词',
    'sec13_drill_content': 'TOP 内容',
    'sec13_insight': '品牌策略洞察',
    'sec13_insight_zeiss': '蔡司在小红书形成强大的"配镜省钱攻略"内容矩阵，渠道驱动型：授权门店+精准验光是核心话术。但"2.5折"内容长期可能稀释品牌溢价。',
    'sec13_insight_essilor': '依视路内容量为蔡司的1/5，价格驱动型：折扣对比+性价比是核心话术。与"星趣控"（青少年防控）关联更多，渐进镜/老花领域声量不足。',
    'sec13_insight_hoya': '豪雅社交媒体近乎"失声"，品类驱动型：渐进镜片专家。技术实力与消费者认知严重脱节。',

    'sec14_title': '十四、热门关键词分析',
    'sec14_desc': '跨平台热门话题关键词的提及量、平台分布及内容特征分析',
    'sec14_laohua': '老花眼',
    'sec14_jinshi': '近视/散光',
    'sec14_duojiaodian': '渐进多焦点',
    'sec14_ai_glasses': 'AI/智能眼镜',
    'sec14_fangpilao': '防疲劳',
    'sec14_col_mentions': '提及量',
    'sec14_col_platforms': '平台分布',
    'sec14_col_features': '内容特征',
    'sec14_col_action': '操作',

    'sec15_title': '十五、品牌关键词关联图谱（含百度指数）',
    'sec15_desc': '品牌×关键词关联网络、百度指数对比、产品系列与功能卖点图谱',
    'sec15_baidu_vs_social': '百度指数 vs 社媒声量 对比',
    'sec15_zeiss_brand_words': '品牌心智词：清晰度 + 德国精工 + 自由环面 + 青少年防控',
    'sec15_essilor_brand_words': '品牌心智词：耐磨 + 性价比 + 渐进多焦点 + 青少年防控',
    'sec15_hoya_brand_words': '品牌心智词：渐进镜片 + 日本光学 + 亚洲人脸型 + 个性化定制',
    'sec15_product_series': '产品系列',
    'sec15_features': '功能卖点',
    'sec15_purchase_scene': '购买场景 (最高频关联)',
    'sec15_baidu_detail': '百度指数关键词详细对比',
    'sec15_zeiss_driven': '渠道驱动型',
    'sec15_essilor_driven': '价格驱动型',
    'sec15_hoya_driven': '品类驱动型',
    'sec15_inversion_insight': '百度指数与社媒声量的"倒挂"现象',

    'sec16_title': '十六、消费价格及变化趋势',
    'sec16_desc': '各品牌渐进镜片价格区间、线上线下的渠道价格对比与市场趋势',
    'sec16_col_brand_series': '品牌/系列',
    'sec16_col_low': '低端价',
    'sec16_col_avg': '均价',
    'sec16_col_high': '高端价',
    'sec16_col_trend': '趋势',
    'sec16_col_channel': '渠道',
    'sec16_online_prices': '线上价格趋势',
    'sec16_price_drivers': '价格变化驱动力',

    'sec17_title': '十七、消费者态度与评论分析',
    'sec17_desc': '基于内容情感分析的多人群态度分布及典型表达',
    'sec17_sentiment_dist': '态度分布（基于内容情感分析）',
    'sec17_col_persona': '人群',
    'sec17_col_attitude': '核心态度',
    'sec17_col_expression': '典型表达',
    'sec17_col_emotion': '情绪倾向',

    'sec18_title': '十八、四平台对比',
    'sec18_desc': '小红书/抖音/公众号/B站四个平台的全面矩阵对比分析',
    'sec18_col_dim': '维度',
    'sec18_content_type': '内容类型',
    'sec18_core_audience': '核心受众',
    'sec18_progressive_volume': '渐进镜内容量',
    'sec18_brand_volume': '品牌内容量',
    'sec18_interaction': '互动特征',
    'sec18_price_content': '价格内容',
    'sec18_hot_keywords': '热门关键词',

    'sec19_title': '十九、结论与建议',
    'sec19_desc': '基于全量数据得出的品牌策略建议与内容策略指南',
    'sec19_brand_strategy': '品牌方策略',
    'sec19_content_strategy': '内容策略',
    'sec19_full_comparison': '品牌全维度对比总结',
    'sec19_methodology': '研究方法说明',
    'sec19_method_note': '数据来源：1) 红狐数据API（小红书/抖音/公众号，近30天）；2) WebSearch补充（B站+行业报告+价格数据）；3) 百度指数第三方估算；4) 内容情感分析为关键词匹配法，未经人工标注。由于"老花"关键词歧义以及红狐API对B站/公众号覆盖有限，部分维度数据可能存在偏差。',
  },

  en: {
    // -- Common --
    'lang_label': '中',
    'lang_tip': '切换到中文',
    'back_to_main': '← Back to Report',
    'back_to_main_cancel': '← Back to Report (Discard)',
    'confirm_save': '✓ Done (Save)',

    // -- Main Report --
    'main_title': 'Progressive / Reading Glasses — Cross-Platform Sentiment Analysis',
    'main_subtitle': 'Data Range: XHS/Douyin/WeChat OA | Past 30 Days | 103 Optical Posts | Generated: 2026-08-09 22:38',
    'kw_config': 'Keyword Configuration',
    'kw_settings_btn': '⚙️ Keyword Settings',
    'kw_summary_fmt': 'Content {content} · Sentiment {pos} {neg}',

    'sec1_title': 'I. Platform Sentiment Overview',
    'card_total_posts': 'Total Posts Analyzed',
    'card_platform_dist': 'Platform Distribution',
    'card_view_detail': 'Click for details',
    'card_positive_rate': 'Positive Rate',
    'card_negative_rate': 'Negative Rate',
    'card_pos_bar': 'positive',
    'card_neg_bar': 'negative',
    'sentiment_dist': 'Sentiment Distribution by Platform',
    'platform': 'Platform',
    'total': 'Total',
    'positive': 'Positive',
    'negative': 'Negative',
    'neutral': 'Neutral',
    'distribution': 'Distribution',

    'sec2_title': 'II. Top 10 Positive/Negative Keywords by Platform',
    'pos_keywords': 'Positive Keywords',
    'neg_keywords': 'Negative Keywords',
    'category': 'Category',

    'sec3_title': 'III. Brand × Sentiment Association Graph',
    'sec3_desc': 'Visualize positive and negative keyword networks associated with each brand. Click brand cards to drill down by platform.',
    'comment_search_btn': '🔍 Comment Keyword Search',
    'brand_pos_kw': 'Positive Associations',
    'brand_neg_kw': 'Negative Associations',
    'brand_total_mentions': '{count} mentions',
    'brand_no_data': 'No brand data',

    'sec4_title': 'IV. Brand Comments by Platform Detail',
    'sec4_hint': '⬆ Click brand row to view detailed positive/negative keyword breakdown',
    'brand': 'Brand',
    'total_mentions': 'Mentions',
    'platform_dist': 'Platform',

    'sec5_title': 'V. Stock vs. Incremental (Weekly Update Framework)',
    'stock_label': 'Stock Data (Before Aug 3)',
    'incr_label': 'Weekly Incremental (Aug 3-9)',
    'stock_count': 'posts',
    'brand_distribution': 'Brand Distribution',

    'sec6_title': 'VI. Positive vs. Negative Comparison by Platform',

    'sec7_title': 'VII. Baidu Index Keyword Heat Comparison',
    'sec7_desc': 'Data based on estimated monthly search volume (Jul 2026) from tools like Chinaz/5118. Reflects proactive user search behavior on Baidu, complementary to social media passive exposure.',
    'baidu_est_monthly': 'Est. Baidu Monthly Searches',

    'sec8_title': 'VIII. Baidu Index Keyword Detail Comparison',
    'core_keyword': 'Core Keyword',
    'est_monthly_vol': 'Est. Monthly Vol.',
    'search_intent': 'Search Intent',
    'ranking_trend': 'Trend',

    'sec9_title': 'IX. Progressive Lens Scenario Comparison',
    'sec9_desc': 'Compare five core progressive/reading glasses scenarios (Driving, Office, Outdoor Sports, Photography, Digital Devices) from both social media content and Baidu search index dimensions.',
    'card1_title': 'Social Media Scenario Distribution',
    'card1_desc': 'Based on keyword matching from 103 posts across XHS/Douyin/WeChat OA',
    'card2_title': 'Baidu Index Scenario Heat',
    'card2_desc': 'Based on estimated Baidu monthly search volume (Jul 2026), reflecting user proactive search frequency for each scenario',
    'scenario_driving': 'Driving',
    'scenario_office': 'Office',
    'scenario_outdoor': 'Outdoor Sports',
    'scenario_photo': 'Photography',
    'scenario_digital': 'Digital Devices',
    'scenario_monthly_total': 'Monthly Total',
    'scenario_brand_assoc': 'Brand Association by Scenario',
    'scenario_brand_mentions': 'Associated Brands (mentions)',
    'scenario_sample': 'Sample Content',
    'scenario_no_brand': 'No brand mentions',
    'insight_platform': 'Insight: Digital devices (phone/digital/screen) dominate progressive lens content, followed by office use. Driving has clear professional demand but low social media discussion. Photography has the least mentions (niche). Outdoor sports show moderate discussion but weak brand association.',
    'insight_baidu': 'Insight: On Baidu search, digital devices (blue-light glasses 8K+ + phone/digital glasses) generate the highest volume, reflecting mass demand for screen eye protection. Outdoor sports ranks second (sports glasses 4.5K + photochromic lens 3.6K) but social media content is insufficient — an unmet supply gap. Office search demand is healthy (computer glasses 3.2K) and matches social content. Driving shows moderate but growing search volume (driving glasses ↑), with Zeiss having first-mover advantage. Photography is the lowest-volume long-tail scenario.',
    'cross_comparison': 'Dual-Dimension Cross Comparison',
    'cross_social': 'Social Content Volume',
    'cross_baidu': 'Baidu Search Volume',
    'cross_match': 'Supply-Demand Match',
    'cross_strategy': 'Strategy',
    'match_shortage': '⚠️ Unmet Demand',
    'match_good': '✓ Well-Matched',
    'match_oversupply': '→ Oversupplied',
    'match_longtail': '○ Long-Tail',
    'match_improve': '→ Needs Growth',
    'strategy_shortage': 'High search demand but low social content; ramp up content seeding',
    'strategy_good': 'Supply-demand balanced; maintain current content strategy',
    'strategy_oversupply': 'Limited search demand; redirect content to long-tail SEO',
    'strategy_longtail': 'Niche demand; focus on precision targeting rather than scale',
    'strategy_improve': 'Both search and content have room to grow',

    'sec10_title': 'X. Brand Keyword Strategy Insights',
    'dim_brand_mind': 'Brand Mindshare Words',
    'dim_social_kw': 'Top Social Keywords',
    'dim_baidu_search': 'Baidu Monthly Volume',
    'dim_price_tag': 'Price Tag',
    'dim_audience': 'Audience',
    'dim_competitor': 'Competitors',
    'dim_strategy': 'Content Strategy',

    'sec11_title': 'XI. Methodology & Limitations',
    'method_sentiment': 'Sentiment Classification: Keyword matching + positive/negative category scoring',
    'method_brand': 'Brand Detection: Exact match + alias recognition',
    'method_source': 'Data Source: cn-last30days Redfox Engine × 4 keyword rounds × 3 platforms',
    'method_config': 'Keyword Config: Click top button to open settings. Comment keyword search via button beside Section III.',
    'method_limit': '⚠️ Limitation: Sentiment analysis based on keyword matching in titles/descriptions, not human-labeled; HOYA sample size is very small',

    // Drilldown
    'drilldown_all_items': 'All Posts',
    'drilldown_platform_data': 'Platform Data Distribution',
    'drilldown_pos_summary': 'Positive Keyword Summary',
    'drilldown_neg_summary': 'Negative Keyword Summary',
    'drilldown_detail': 'Drilldown Detail',
    'drilldown_no_data': 'No drilldown data',
    'close_panel': '✕ Close',
    'col_title': 'Title',
    'col_abstract': 'Excerpt',
    'col_sentiment': 'Sentiment',
    'col_match_kw': 'Matched Keywords',
    'col_link': 'Link',
    'col_no_kw': 'No keywords',

    // Brand drilldown
    'brand_comment_detail': 'Comment Sentiment Keyword Drilldown',
    'tab_all_kw': 'All Keywords',
    'tab_by_platform': 'By Platform',
    'tab_association': 'Brand-Keyword Association',
    'brand_pos_no_data': 'No positive keyword data',
    'brand_neg_no_data': 'No negative keyword data',

    // Refresh
    'refresh_done': '✅ Analysis complete! All results updated',
    'kw_updated': '✅ Keywords updated, refreshed all results',

    // Update notice
    'update_notice': '📅 Update Mechanism: This week\'s incremental data will auto-merge into stock next week. Current cutoff: August 3, 2026.',

    // Baidu detail
    'brand_zeiss': 'ZEISS',
    'brand_essilor': 'Essilor',
    'brand_hoya': 'HOYA',
    'brand_nikon': 'Nikon',
    'brand_generic': 'General Category',

    // Baidu 30-day
    'baidu_30day_title': 'Baidu Search Volume Trend (Past 30 Days)',
    'baidu_heatmap_title': 'Scenario × Keyword Relevance Heatmap',

    // Scenarios for chart labels
    'scene_driving': 'Driving',
    'scene_office': 'Office',
    'scene_outdoor': 'Outdoor',
    'scene_photo': 'Photo',
    'scene_digital': 'Digital',

    // -- Keyword Settings Page --
    'ks_title': 'Keyword Settings — Progressive Lens Sentiment Analysis',
    'ks_heading': '⚙️ Keyword Settings',
    'ks_subtitle': 'Divided into "Content Keywords" and "Comment Keywords". Content keywords are used for content retrieval and filtering; comment keywords are used for sentiment analysis. Click "Done" at bottom to save and return.',
    'ks_tab_content': '📋 Content Keywords',
    'ks_tab_comment': '💬 Comment Keywords',
    'ks_cat_product': '📋 Category Keywords',
    'ks_cat_brand': '🏷️ Brand Keywords',
    'ks_cat_series': '🔧 Product Series Keywords',
    'ks_cat_scene': '🏪 Scenario Keywords',
    'ks_cat_audience': '👥 Audience Keywords',
    'ks_select_all': 'Select All',
    'ks_deselect_all': 'Deselect All',
    'ks_add_custom_content': '➕ Add Custom Content Keywords',
    'ks_reset_default': 'Reset to Default',
    'ks_input_placeholder': 'Enter new keyword, e.g. progressive lens...',
    'ks_add_btn': 'Add',
    'ks_no_custom_content': 'No custom content keywords yet. Enter keywords above and click Add.',
    'ks_pos_comment': '😊 Positive Comment Keywords',
    'ks_neg_comment': '😟 Negative Comment Keywords',
    'ks_select_all_pos': 'Select All Positive',
    'ks_deselect_all_pos': 'Deselect All',
    'ks_select_all_neg': 'Select All Negative',
    'ks_deselect_all_neg': 'Deselect All',
    'ks_add_custom_comment': '➕ Add Custom Comment Keywords',
    'ks_input_comment_placeholder': 'Enter new keyword, e.g. coating, abbe value...',
    'ks_no_custom_comment': 'No custom comment keywords yet. Enter keywords above and click Add.',
    'ks_loading': 'Loading...',
    'ks_header_summary': 'Content {content} · Comment 😊{pos} 😟{neg}',
    'ks_confirm_reset_content': 'Reset content keywords to defaults? This will clear all custom content keywords.',
    'ks_confirm_reset_comment': 'Reset comment keywords to defaults? This will clear all custom comment keywords.',
    'ks_saved_redirect': '✅ Keywords saved, returning...',
    'ks_reset_done': 'Keywords restored to defaults',

    // -- Comment Search Page --
    'cs_title': 'Comment Keyword Search — Progressive Lens Sentiment Analysis',
    'cs_heading': '🔎 Comment Keyword Search',
    'cs_subtitle': 'Search positive/negative keyword source content and view original posts. Filter by brand, platform, and sentiment. Configure keywords via ⚙️ Settings on the main report.',
    'cs_kw_config': 'Current Keywords',
    'cs_search_placeholder': 'Search content or comment keywords... e.g. progressive, dizzy, value, Zeiss',
    'cs_search_btn': '🔍 Search',
    'cs_clear_btn': '✕ Clear',
    'cs_content_chip': 'Content Keywords',
    'cs_pos_chip': 'Top Positive',
    'cs_neg_chip': 'Top Negative',
    'cs_brand_chip': 'Brands',
    'cs_filter_all_platform': 'All Platforms',
    'cs_filter_all_brand': 'All Brands',
    'cs_filter_no_brand': 'No Brand',
    'cs_filter_all_sentiment': 'All Sentiment',
    'cs_filter_positive': '😊 Positive',
    'cs_filter_negative': '😟 Negative',
    'cs_filter_neutral': '😐 Neutral',
    'cs_filter_label': 'Filter',
    'cs_results_none': 'No results found',
    'cs_results_try': 'Try different keywords or clear filters',
    'cs_results_found': 'Search for related keywords found {count} results',
    'cs_results_filtered': ' (Filtered: {filters})',
    'cs_col_platform': 'Platform',
    'cs_col_title': 'Title',
    'cs_col_sentiment': 'Sentiment',
    'cs_col_match': 'Matched Keywords',
    'cs_col_brand': 'Brand',
    'cs_col_date': 'Published',
    'cs_col_likes': 'Likes',
    'cs_col_link': 'Link',
    'cs_view_link': '🔗 View',
    'cs_all_items': '📋 All Posts',
    'cs_all_items_desc': 'All collected posts. Browse directly or use the search function above to filter.',
    'cs_empty_prompt': 'Enter a keyword or click a quick chip above to begin searching',
    'cs_kw_updated': 'Keyword settings updated, data refreshed',

    // -- Extended Report Sections (sec12-19) --
    'sec12_title': '12. Data Overview (4-Platform Full Dataset)',
    'sec12_desc': 'Full 4-platform data overview via RedFox API + WebSearch + Baidu Index, including content not covered in previous sections',
    'sec12_total_content': 'Total Valid Content (4 Platforms)',
    'sec12_brand_mentions': 'Top 3 Brand Mentions',
    'sec12_total_engagement': 'Total Engagement',
    'sec12_baidu_total': '3-Brand Baidu Monthly Searches',
    'sec12_xhs_content': 'Glasses guides / price sharing / brand seeding',
    'sec12_dy_content': 'Science popularization / emotional / livestream / AI tech',
    'sec12_gzh_content': 'Industry deep-dives / medical science / clinical trials',
    'sec12_bili_content': 'Reviews / tutorials / pitfalls',
    'sec12_brand_ratio': 'Brand Share Ratio: ZEISS:Essilor:HOYA ≈ 87:17:2',

    'sec13_title': '13. Brand Voice Analysis (Click to Drill Down)',
    'sec13_desc': 'Social media voice share, sentiment, and platform distribution for the top 3 brands',
    'sec13_zeiss': 'ZEISS Mentions',
    'sec13_essilor': 'Essilor Mentions',
    'sec13_hoya': 'HOYA Mentions',
    'sec13_zeiss_sentiment': 'Positive 51% | Neutral 43% | Negative 7%',
    'sec13_essilor_sentiment': 'Positive 53% | Neutral 29% | Negative 18%',
    'sec13_hoya_sentiment': 'Only mentioned in "Top 5 Brand Comparison" posts',
    'sec13_drill_platform': 'By Platform',
    'sec13_drill_keyword': 'By Keyword',
    'sec13_drill_content': 'Top Content',
    'sec13_insight': 'Brand Strategy Insights',
    'sec13_insight_zeiss': 'ZEISS has built a powerful "budget glasses" content matrix on Xiaohongshu — channel-driven: authorized stores + precision optometry as core messaging. However, "75% off" content may dilute brand premium long-term.',
    'sec13_insight_essilor': 'Essilor content volume is 1/5 of ZEISS — price-driven: discount comparison + value-for-money as core messaging. More associated with Stellest (teen myopia control); progressive/lens reading area lacks voice.',
    'sec13_insight_hoya': 'HOYA is nearly invisible on social media — category-driven: progressive lens specialist. Technical strength (dual-surface progressive) severely disconnected from consumer awareness.',

    'sec14_title': '14. Hot Keyword Analysis',
    'sec14_desc': 'Cross-platform trending keyword mentions, platform distribution, and content characteristics',
    'sec14_laohua': 'Presbyopia',
    'sec14_jinshi': 'Myopia / Astigmatism',
    'sec14_duojiaodian': 'Progressive Multifocal',
    'sec14_ai_glasses': 'AI / Smart Glasses',
    'sec14_fangpilao': 'Anti-fatigue',
    'sec14_col_mentions': 'Mentions',
    'sec14_col_platforms': 'Platform Distribution',
    'sec14_col_features': 'Content Features',
    'sec14_col_action': 'Action',

    'sec15_title': '15. Brand Keyword Association Map (with Baidu Index)',
    'sec15_desc': 'Brand × keyword association network, Baidu Index comparison, product lineup and feature map',
    'sec15_baidu_vs_social': 'Baidu Index vs Social Media Voice Comparison',
    'sec15_zeiss_brand_words': 'Brand Mind Words: Clarity + German Precision + Freeform + Teen Myopia Control',
    'sec15_essilor_brand_words': 'Brand Mind Words: Durability + Value + Progressive + Teen Myopia Control',
    'sec15_hoya_brand_words': 'Brand Mind Words: Progressive Lenses + Japanese Optics + Asian Fit + Customization',
    'sec15_product_series': 'Product Series',
    'sec15_features': 'Key Features',
    'sec15_purchase_scene': 'Purchase Scenarios (Top Associations)',
    'sec15_baidu_detail': 'Baidu Index Keyword Detail Comparison',
    'sec15_zeiss_driven': 'Channel-Driven',
    'sec15_essilor_driven': 'Price-Driven',
    'sec15_hoya_driven': 'Category-Driven',
    'sec15_inversion_insight': 'Baidu Index vs Social Media "Inversion" Phenomenon',

    'sec16_title': '16. Consumer Pricing & Trends',
    'sec16_desc': 'Price range by brand, online vs offline channel comparison, and market trends',
    'sec16_col_brand_series': 'Brand / Series',
    'sec16_col_low': 'Low',
    'sec16_col_avg': 'Average',
    'sec16_col_high': 'High',
    'sec16_col_trend': 'Trend',
    'sec16_col_channel': 'Channel',
    'sec16_online_prices': 'Online Price Trends',
    'sec16_price_drivers': 'Price Change Drivers',

    'sec17_title': '17. Consumer Sentiment & Review Analysis',
    'sec17_desc': 'Multi-persona attitude distribution and typical expressions based on content sentiment analysis',
    'sec17_sentiment_dist': 'Sentiment Distribution (Content-based Sentiment Analysis)',
    'sec17_col_persona': 'Persona',
    'sec17_col_attitude': 'Core Attitude',
    'sec17_col_expression': 'Typical Expression',
    'sec17_col_emotion': 'Emotional Tendency',

    'sec18_title': '18. Cross-Platform Comparison',
    'sec18_desc': 'Comprehensive matrix comparison across Xiaohongshu / Douyin / WeChat Official Accounts / Bilibili',
    'sec18_col_dim': 'Dimension',
    'sec18_content_type': 'Content Type',
    'sec18_core_audience': 'Core Audience',
    'sec18_progressive_volume': 'Progressive Lens Content',
    'sec18_brand_volume': 'Brand Content Volume',
    'sec18_interaction': 'Interaction Pattern',
    'sec18_price_content': 'Price Content',
    'sec18_hot_keywords': 'Hot Keywords',

    'sec19_title': '19. Conclusions & Recommendations',
    'sec19_desc': 'Brand strategy and content strategy recommendations based on full dataset analysis',
    'sec19_brand_strategy': 'Brand Strategy',
    'sec19_content_strategy': 'Content Strategy',
    'sec19_full_comparison': 'Full-Dimension Brand Comparison',
    'sec19_methodology': 'Research Methodology',
    'sec19_method_note': 'Data sources: 1) RedFox Data API (Xiaohongshu/Douyin/WeChat Official Accounts, last 30 days); 2) WebSearch supplement (Bilibili + industry reports + pricing data); 3) Baidu Index third-party estimates; 4) Content sentiment analysis uses keyword matching, not manually annotated. Some dimensions may have bias due to "laohua" keyword ambiguity and limited RedFox API coverage on Bilibili/WeChat Official Accounts.',
  }
};

function t(key, params) {
  var dict = I18N[__LANG__] || I18N['zh'];
  var str = dict[key];
  if (typeof str === 'undefined' || str === null) {
    dict = I18N['zh'];
    str = dict[key] || key;
  }
  if (str && params) {
    for (var k in params) {
      str = str.replace('{' + k + '}', params[k]);
    }
  }
  return str;
}

function toggleLang() {
  var newLang = __LANG__ === 'zh' ? 'en' : 'zh';
  localStorage.setItem('progressiveLensLang', newLang);
  var url = new URL(window.location.href);
  url.searchParams.set('lang', newLang);
  window.location.href = url.toString();
}

function createLangToggle() {
  var btn = document.createElement('button');
  btn.className = 'lang-toggle-btn';
  btn.textContent = t('lang_label');
  btn.title = t('lang_tip');
  btn.onclick = toggleLang;
  return btn;
}

// Add lang param to navigation URLs
function langUrl(filename) {
  var base = window.location.href.replace(/[^\/]*$/, '');
  var separator = filename.indexOf('?') >= 0 ? '&' : '?';
  return base + filename + separator + 'lang=' + __LANG__;
}

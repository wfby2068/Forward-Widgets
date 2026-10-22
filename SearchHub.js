var WidgetMetadata = {
  id: "global_search_hub",
  title: "全网直通搜索",
  description: "全网直通搜索源：精准响应 Forward 全局放大镜搜索，支持番号/女优/片名秒搜直出",
  author: "婉儿",
  site: "https://antigravity.6106730.xyz",
  version: "1.0.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 3600,
  modules: [
    {
      id: "search_home",
      title: "🔍 全网直通搜索",
      description: "在右下角全局放大镜输入关键词即可搜索全网片单",
      requiresWebView: false,
      functionName: "loadHome",
      cacheDuration: 3600,
      params: [
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "直通播放源",
      description: "按番号精准匹配直出正片 HLS 播放流",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: []
    }
  ],
  search: {
    title: "🔍 全局搜索",
    functionName: "searchGlobal",
    params: [
      { name: "keyword", title: "关键词", type: "input", description: "输入番号、女优名或片名关键词", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  }
};

const SEARCH_API = "https://antigravity.6106730.xyz/api/getav_search";
const META_API = "https://antigravity.6106730.xyz/api/getav_meta";
const STREAM_API = "https://antigravity.6106730.xyz/api/getav_streams";

async function loadHome(params = {}) {
  // 首页展示最新热门资源
  const page = Math.max(parseInt(params.page, 10) || 1, 1);
  return await executeSearch("SSIS", page);
}

async function searchGlobal(params = {}) {
  // 核心入口：Forward 右下角放大镜触发
  const keyword = String(params.keyword || params.wd || params.code || params.q || "").trim();
  const page = Math.max(parseInt(params.page || params.pg || params.from, 10) || 1, 1);

  if (!keyword) {
    return [
      {
        id: "tip_input",
        type: "text",
        title: "💡 请在上方搜索框输入番号、女优名或片名",
        description: "支持 SSIS-448、河北彩花、中文字幕 等"
      }
    ];
  }

  return await executeSearch(keyword, page);
}

async function executeSearch(keyword, page = 1) {
  try {
    const url = `${SEARCH_API}?q=${encodeURIComponent(keyword)}&page=${page}`;
    const res = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) ForwardApp/1.0",
        "Accept": "application/json"
      }
    });

    let data = res ? res.data : null;
    if (typeof data === "string") {
      try { data = JSON.parse(data); } catch (e) {}
    }

    if (!data || !data.items || !Array.isArray(data.items) || data.items.length === 0) {
      return [
        {
          id: "empty_result",
          type: "text",
          title: `未找到关于 "${keyword}" 的相关影片`,
          description: "请尝试简化番号或更换女优关键词重试"
        }
      ];
    }

    return data.items.map(item => {
      const codeUpper = (item.code || "").toUpperCase();
      return {
        id: item.code,
        type: "url",
        title: item.title || codeUpper,
        link: `https://missav.fans/cn/${item.code}`,
        backdropPath: item.cover || "",
        posterPath: item.cover || "",
        imgSrc: item.cover || "",
        previewUrl: item.preview || "",
        mediaType: "movie",
        durationText: item.duration || "",
        description: `番号: ${codeUpper}`
      };
    });
  } catch (err) {
    return [
      {
        id: "error_item",
        type: "text",
        title: "搜索服务暂不可用",
        description: err.message || "网络请求异常"
      }
    ];
  }
}

async function loadDetail(link) {
  // 详情页解析
  try {
    const codeMatch = String(link).match(/\/cn\/([a-z0-9_\-]+)/i) || String(link).match(/([a-z0-9]+[-_]\d+)/i);
    const code = codeMatch ? codeMatch[1].toLowerCase() : link;

    const res = await Widget.http.get(`${META_API}?code=${encodeURIComponent(code)}`);
    let meta = res ? res.data : null;
    if (typeof meta === "string") {
      try { meta = JSON.parse(meta); } catch (e) {}
    }

    if (!meta || !meta.title) {
      return {
        id: link,
        type: "link",
        title: "查看影片详情",
        link: link,
        mediaType: "movie"
      };
    }

    // 演员列表
    const peoples = (meta.actresses || []).map(a => ({
      name: a.name,
      avatar: a.avatar || "",
      link: `https://missav.fans/cn/actresses/${encodeURIComponent(a.slug || a.name)}`
    }));

    // 标签分类
    const genres = (meta.genres || []).map(g => ({
      title: g.name,
      link: `https://missav.fans/cn/genres/${encodeURIComponent(g.slug || g.name)}`
    }));

    return {
      id: link,
      type: "detail",
      title: meta.title,
      videoUrl: meta.stream || "",
      mediaType: "movie",
      playerType: meta.stream ? "app" : "system",
      backdropPath: meta.cover || "",
      posterPath: meta.cover || "",
      imgSrc: meta.cover || "",
      description: `【番号】${(meta.code || code).toUpperCase()}\n【女优】${peoples.map(p => p.name).join(" / ") || "未知"}`,
      peoples: peoples,
      genres: genres
    };
  } catch (e) {
    return {
      id: link,
      type: "link",
      title: "进入源站播放",
      link: link,
      mediaType: "movie"
    };
  }
}

async function loadResource(params = {}) {
  // 精准播放源输出
  try {
    const code = String(params.code || params.id || params.keyword || "").trim();
    if (!code) return [];

    const res = await Widget.http.get(`${STREAM_API}?codes=${encodeURIComponent(code)}`);
    let data = res ? res.data : null;
    if (typeof data === "string") {
      try { data = JSON.parse(data); } catch (e) {}
    }

    if (data && data.streams && data.streams[code.toLowerCase()]) {
      const streamInfo = data.streams[code.toLowerCase()];
      return [
        {
          id: code,
          title: `正片高清直连 (${code.toUpperCase()})`,
          videoUrl: streamInfo.url,
          mediaType: "movie",
          playerType: "app"
        }
      ];
    }
  } catch (e) {}
  return [];
}

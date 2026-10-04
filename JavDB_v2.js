var WidgetMetadata = {
  id: "ti.bemarkt.javdb.v2",
  title: "JavDB",
  description: "获取 JavDB 最新/热门影片推荐与番号检索 (v2 标准规范版)",
  author: "婉儿 (Waner)",
  site: "https://javdb.com",
  version: "2.0.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 300,
  modules: [
    {
      title: "今日新种",
      description: "浏览今日最新发布的影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/?v=new"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "有码热门",
      description: "浏览最新有码影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/censored"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "无码专区",
      description: "浏览最新无码影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/uncensored"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "欧美精品",
      description: "浏览欧美/西方精品影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/western"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "排行榜单",
      description: "查看 JavDB 每日与每月排行榜",
      requiresWebView: false,
      functionName: "loadRankings",
      cacheDuration: 3600,
      params: [
        {
          name: "period",
          title: "周期",
          type: "enumeration",
          value: "daily",
          enumOptions: [
            { title: "日榜", value: "daily" },
            { title: "周榜", value: "weekly" },
            { title: "月榜", value: "monthly" }
          ]
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "JavDB 播放源",
      description: "番号与预览视频流解析",
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
      { name: "keyword", title: "关键词", type: "input", description: "番号或演员关键词", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  }
};

const JAVDB_BASE_URL = "https://javdb.com";
const JAVDB_LOG_PREFIX = "ForwardWidget: JavDB -";
const JAVDB_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Cookie": "over18=1; locale=zh; theme=auto",
  "Referer": "https://javdb.com/"
};

async function loadPage(params = {}) {
  const baseUrl = params.url || "https://javdb.com/";
  const page = parseInt(params.page, 10) || 1;
  let url = baseUrl;
  if (page > 1) {
    url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  }

  try {
    const response = await Widget.http.get(url, {
      headers: JAVDB_HEADERS,
      allow_redirects: true
    });

    if (!response || !response.data) {
      return [];
    }

    return parseJavDBList(response.data);
  } catch (error) {
    console.error(`${JAVDB_LOG_PREFIX} 获取列表失败: ${error.message}`);
    return [];
  }
}

async function loadRankings(params = {}) {
  const period = (params && params.period) || "daily";
  const page = parseInt(params && params.page, 10) || 1;
  let path = "/rankings/movies";
  if (period === "weekly") path = "/rankings/movies?p=weekly";
  else if (period === "monthly") path = "/rankings/movies?p=monthly";

  let url = `${JAVDB_BASE_URL}${path}`;
  if (page > 1) {
    url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  }

  try {
    const response = await Widget.http.get(url, {
      headers: JAVDB_HEADERS,
      allow_redirects: true
    });
    if (!response || !response.data) return [];
    return parseJavDBList(response.data);
  } catch (e) {
    return [];
  }
}

async function searchGlobal(params = {}) {
  const keyword = (params && params.keyword) ? String(params.keyword).trim() : "";
  const page = parseInt(params && params.page, 10) || 1;
  if (!keyword) return [];

  const url = `${JAVDB_BASE_URL}/search?q=${encodeURIComponent(keyword)}&f=all&page=${page}`;
  try {
    const response = await Widget.http.get(url, {
      headers: JAVDB_HEADERS,
      allow_redirects: true
    });
    if (!response || !response.data) return [];
    return parseJavDBList(response.data);
  } catch (e) {
    return [];
  }
}

function parseJavDBList(html) {
  const $ = Widget.html.load(html);
  const videoItems = [];

  $(".movie-list .item, .grid .item").each((index, el) => {
    const $el = $(el);
    const $link = $el.find("a.box").first();
    let link = $link.attr("href") || "";
    if (!link) return;

    if (!link.startsWith("http")) {
      link = `${JAVDB_BASE_URL}${link.startsWith("/") ? "" : "/"}${link}`;
    }

    const $img = $el.find(".cover img").first();
    let imgSrc = $img.attr("data-src") || $img.attr("src") || "";
    if (imgSrc.startsWith("//")) {
      imgSrc = `https:${imgSrc}`;
    }

    const title = $el.find(".video-title").first().text().trim() || $link.attr("title") || "";
    const code = $el.find(".video-title strong").first().text().trim();

    const dateText = $el.find(".meta").first().text().trim();
    const tagText = $el.find(".tags").text().replace(/\s+/g, ' ').trim();

    videoItems.push({
      id: `${index}|${link}`,
      type: "url",
      title: title || code || "未知影片",
      imgSrc: imgSrc,
      coverUrl: imgSrc,
      posterPath: imgSrc,
      backdropPath: imgSrc,
      mediaType: "movie",
      link: link,
      releaseDate: dateText,
      durationText: dateText,
      description: [code ? `番号: ${code}` : "", dateText ? `日期: ${dateText}` : "", tagText ? `标签: ${tagText}` : ""].filter(Boolean).join(" | "),
      extra: { code: code || extractCode(title) }
    });
  });

  return videoItems;
}

function extractCode(text) {
  if (!text) return "";
  const match = String(text).match(/[A-Z]{2,10}-?\d{2,8}/i);
  return match ? match[0].toUpperCase() : "";
}

async function loadDetail(link) {
  const url = typeof link === "object" && link ? (link.link || link.id || link.url) : String(link || "");
  try {
    const response = await Widget.http.get(url, {
      headers: JAVDB_HEADERS,
      allow_redirects: true
    });

    if (!response || !response.data) {
      return { id: url, type: "detail", title: "查看详情", link: url, playerType: "app" };
    }

    const $ = Widget.html.load(response.data);
    const title = $("h2.title strong").first().text().trim() || $('meta[property="og:title"]').attr("content") || "JavDB 影片";
    let poster = $('meta[property="og:image"]').attr("content") || $(".video-cover").attr("src") || "";
    if (poster.startsWith("//")) poster = `https:${poster}`;

    let previewVideo = $("video source").attr("src") || $("video").attr("src") || "";
    if (previewVideo.startsWith("//")) previewVideo = `https:${previewVideo}`;

    let durationFormatted = "";
    let code = "";
    $(".movie-panel-info .panel-block").each((_, block) => {
      const text = $(block).text();
      if (text.includes("時長:") || text.includes("时长:")) {
        durationFormatted = text.replace(/^[^:]+:/, "").trim();
      }
      if (text.includes("番號:") || text.includes("番号:")) {
        code = $(block).find(".value").text().trim();
      }
    });

    if (!code) code = extractCode(title);

    return {
      id: url,
      type: "detail",
      title: title,
      imgSrc: poster,
      coverUrl: poster,
      posterPath: poster,
      backdropPath: poster,
      mediaType: "movie",
      link: url,
      videoUrl: previewVideo || "",
      releaseDate: durationFormatted,
      durationText: durationFormatted,
      playerType: "app",
      description: code ? `番号: ${code}` : title,
      customHeaders: {
        "Referer": "https://javdb.com/",
        "User-Agent": JAVDB_HEADERS["User-Agent"]
      },
      extra: { code: code }
    };
  } catch (error) {
    return { id: url, type: "detail", title: "JavDB 详情", link: url, playerType: "app" };
  }
}

async function loadResource(params = {}) {
  try {
    let code = "";
    if (params && params.code) code = String(params.code).trim();
    else if (params && params.extra && params.extra.code) code = String(params.extra.code).trim();
    else if (params && params.title) code = extractCode(params.title);

    let videoUrl = (params && params.videoUrl) || "";

    if (!videoUrl && params && (params.link || params.url)) {
      const detail = await loadDetail(params.link || params.url);
      if (detail && detail.videoUrl) videoUrl = detail.videoUrl;
    }

    if (videoUrl) {
      return [{
        name: code ? `${code} 官方预览流` : "JavDB 预览",
        description: "官方预告短片 | 建议使用应用播放器",
        url: videoUrl,
        playerType: "app",
        customHeaders: {
          "Referer": "https://javdb.com/",
          "User-Agent": JAVDB_HEADERS["User-Agent"]
        }
      }];
    }

    return [];
  } catch (e) {
    return [];
  }
}

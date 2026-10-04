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


// ============================================================================
// 🎬 Forward Universal JAV Metadata Engine (剧照/预告片/团队/标签增强引擎)
// ============================================================================

const JAV_MGSTAGE_PREFIXES = new Set(["ABF", "ABW", "JUFE", "MAAN", "PPT", "SIRO", "LUXU", "GANA", "ABP", "CHN", "SQTE", "FSDSS"]);

function parseJavCode(rawText) {
  if (!rawText) return null;
  const raw = String(rawText).toUpperCase();
  const match = raw.match(/\b([A-Z0-9]{2,10})-?(\d{2,5})\b/);
  if (!match) return null;
  const prefix = match[1];
  const prefixLower = prefix.toLowerCase();
  const number = match[2];
  const number3 = number.padStart(3, "0");
  const number5 = number.padStart(5, "0");

  const numericMap = {
    WSA: "2",
    FSDSS: "1", FCDSS: "1", FNS: "1", FTHTD: "1", FALENO: "1", FGAN: "1", FSNF: "1", FLAV: "1",
    ABP: "118", CHN: "118",
    STARS: "1", STAR: "1", START: "1", SODS: "1",
    REBD: "h_346", REBDB: "h_346", GSHRB: "h_346"
  };
  const numPrefix = numericMap[prefix] || "";

  return {
    dvdId: `${prefix}-${number}`,
    prefix,
    prefixLower,
    number,
    number3,
    number5,
    code: `${numPrefix}${prefixLower}${number5}`,
    plainCode: `${prefixLower}${number5}`
  };
}

function buildJavBackdrops(titleOrCode) {
  const parts = parseJavCode(titleOrCode);
  if (!parts) return [];
  const urls = [];

  if (JAV_MGSTAGE_PREFIXES.has(parts.prefix)) {
    for (let i = 1; i <= 8; i++) {
      urls.push(`https://image.mgstage.com/images/prestige/${parts.prefixLower}/${parts.number3}/cap_e_${i}_${parts.prefixLower}-${parts.number3}.jpg`);
    }
    return urls;
  }

  for (let i = 1; i <= 10; i++) {
    urls.push(`https://pics.dmm.co.jp/digital/video/${parts.code}/${parts.code}jp-${i}.jpg`);
  }
  return urls;
}

function buildJavTrailers(titleOrCode) {
  const parts = parseJavCode(titleOrCode);
  if (!parts) return [];
  const first = parts.code[0];
  const folder = parts.code.slice(0, 3);
  const videoUrl = `https://media.javtrailers.com/hlsvideo/freepv/${first}/${folder}/${parts.code}/playlist.m3u8`;

  let coverUrl = `https://pics.dmm.co.jp/digital/video/${parts.code}/${parts.code}pl.jpg`;
  if (JAV_MGSTAGE_PREFIXES.has(parts.prefix)) {
    coverUrl = `https://image.mgstage.com/images/prestige/${parts.prefixLower}/${parts.number3}/pb_e_${parts.prefixLower}-${parts.number3}.jpg`;
  }

  return [{
    id: `trailer-${parts.dvdId}`,
    title: `预告片 (${parts.dvdId})`,
    url: videoUrl,
    videoUrl: videoUrl,
    coverUrl: coverUrl,
    posterPath: coverUrl,
    mediaType: "movie",
    playerType: "app"
  }];
}

async function resolveActressAvatar(name) {
  if (!name) return "";
  try {
    const searchUrl = `https://missav.fans/cn/actresses/${encodeURIComponent(name)}`;
    const res = await Widget.http.get(searchUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15" }
    });
    if (res && res.data) {
      const $ = Widget.html.load(res.data);
      const img = $('meta[property="og:image"]').attr("content") || $(".avatar img, .rounded-full img").first().attr("src");
      if (img && !img.includes("logo") && !img.includes("square")) {
        return img.startsWith("//") ? `https:${img}` : img;
      }
    }
  } catch (_) {}
  return "";
}

async function buildPeoplesWithAvatars(actorsList) {
  if (!Array.isArray(actorsList) || actorsList.length === 0) return [];
  const results = [];
  for (const a of actorsList) {
    const name = typeof a === "string" ? a.trim() : (a.name || a.title || "").trim();
    if (!name) continue;
    let avatar = typeof a === "object" ? (a.avatar || a.image || "") : "";
    const id = typeof a === "object" && a.link ? a.link : `actress:${encodeURIComponent(name)}`;
    
    // 如果没有自带头像，尝试异步解析头像
    if (!avatar) {
      try {
        avatar = await resolveActressAvatar(name);
      } catch (_) {}
    }

    results.push({
      id: id,
      title: name,
      avatar: avatar || "",
      role: "主演"
    });
  }
  return results;
}

function buildGenreItems(tagsList) {
  if (!Array.isArray(tagsList) || tagsList.length === 0) return [];
  const seen = new Set();
  const items = [];
  for (const t of tagsList) {
    const title = typeof t === "string" ? t.trim() : (t.title || t.name || "").trim();
    if (!title || seen.has(title)) continue;
    seen.add(title);
    const id = typeof t === "object" && t.link ? t.link : `genre:${encodeURIComponent(title)}`;
    items.push({ id, title });
  }
  return items;
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
    const actors = [];
    const tags = [];

    $(".movie-panel-info .panel-block").each((_, block) => {
      const text = $(block).text();
      if (text.includes("時長:") || text.includes("时长:")) {
        durationFormatted = text.replace(/^[^:]+:/, "").trim();
      }
      if (text.includes("番號:") || text.includes("番号:")) {
        code = $(block).find(".value").text().trim();
      }
      if (text.includes("演員:") || text.includes("演员:")) {
        $(block).find("a[href*='/actors/']").each((_, a) => {
          const name = $(a).text().trim();
          const href = $(a).attr("href") || "";
          if (name && !actors.find(ac => ac.name === name)) {
            actors.push({ name, link: href.startsWith("http") ? href : `https://javdb.com${href}` });
          }
        });
      }
      if (text.includes("類別:") || text.includes("类别:") || text.includes("標籤:") || text.includes("标签:")) {
        $(block).find("a").each((_, a) => {
          const name = $(a).text().trim();
          const href = $(a).attr("href") || "";
          if (name && !tags.find(t => t.title === name)) {
            tags.push({ title: name, link: href.startsWith("http") ? href : `https://javdb.com${href}` });
          }
        });
      }
    });

    if (!code) code = extractCode(title);

    // 提取网页原生剧照
    const siteBackdrops = [];
    $(".preview-images a, .tile-images a, a.preview-image").each((_, a) => {
      let href = $(a).attr("href") || $(a).find("img").attr("data-src") || $(a).find("img").attr("src") || "";
      if (href) {
        if (href.startsWith("//")) href = `https:${href}`;
        if (!siteBackdrops.includes(href)) siteBackdrops.push(href);
      }
    });

    // 结合 Universal JAV Metadata Engine
    const dvdId = parseJavCode(code || title);
    const apiBackdrops = dvdId ? buildJavBackdrops(dvdId.dvdId) : [];
    const backdropPaths = [...siteBackdrops, ...apiBackdrops];
    const trailers = dvdId ? buildJavTrailers(dvdId.dvdId) : undefined;
    const peoples = await buildPeoplesWithAvatars(actors);
    const genreItems = buildGenreItems(tags);

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
      videoUrl: previewVideo || (trailers && trailers[0] ? trailers[0].videoUrl : ""),
      releaseDate: durationFormatted,
      durationText: durationFormatted,
      playerType: "app",
      description: code ? `番号: ${code}` : title,
      actors: actors.length > 0 ? actors : undefined,
      peoples: peoples.length > 0 ? peoples : undefined,
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      backdropPaths: backdropPaths.length > 0 ? backdropPaths : undefined,
      trailers: trailers,
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




var WidgetMetadata = {
  id: "javday_v2",
  title: "JAVDay",
  description: "JAVDay 原生秒播 · TV选集修复版 · 维护页识别",
  author: "Ti | 婉儿升级",
  site: "https://javday.app",
  version: "2.0.1",
  requiredVersion: "0.0.2",
  detailCacheDuration: 0,
  modules: [
    // 最新模块
    {
      title: "最新更新",
      description: "浏览最新更新视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/label/new/"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 人气模块
    {
      title: "人气系列",
      description: "浏览人气系列视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/label/hot/"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 新作模块
    {
      title: "新作上市",
      description: "浏览新作上市视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/new-release/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "new"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 有码模块
    {
      title: "有码视频",
      description: "浏览有码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/censored/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 无码模块
    {
      title: "无码视频",
      description: "浏览无码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/uncensored/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "new"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 流出模块
    {
      title: "无码流出",
      description: "浏览无码流出视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/uncensored-leaked/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "new"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 杏吧模块
    {
      title: "杏吧视频",
      description: "浏览杏吧分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/sex8/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 玩偶模块
    {
      title: "玩偶姐姐",
      description: "浏览玩偶姐姐视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/hongkongdoll/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 国产模块
    {
      title: "国产 AV",
      description: "浏览国产 AV视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value: "https://javday.app/category/chinese-av/"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          description: "选择视频排序方式",
          value: "popular"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // 厂商模块
    {
      title: "国产厂商",
      description: "按厂商标签浏览国产厂商视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "厂商选择",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: ["new","popular"],
            },
          enumOptions: [ 
            { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" }, 
            { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" }, 
            { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" }, 
            { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" }, 
            { title: "皇家华人", value: "https://javday.app/index.php/category/royalasianstudio/" }, 
            { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" }, 
            { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" }, 
            { title: "台湾 AV", value: "https://javday.app/index.php/category/twav/" }, 
            { title: "JVID", value: "https://javday.app/index.php/category/jvid/" }, 
            { title: "萝莉社", value: "https://javday.app/index.php/category/luolisheus/" }, 
            { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" }, 
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" } 
          ],
          value: "https://javday.app/index.php/category/madou/",
          description: "选择要浏览的厂商"
        },
        {
          name: "sort_by",
          title: "🔢 排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new",
          description: "选择视频排序方式"
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        }
      ]
    },
    // loadResource 播放源模块
    {
      id: "loadResource",
      title: "JAVDay 播放源",
      description: "按番号搜索并提取 JAVDay HLS 播放链接",
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
      { name: "keyword", title: "关键词", type: "input", description: "搜索关键词", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  }
};

const JAVDAY_LOG_PREFIX = "ForwardWidget: JAVDay -";
const JAVDAY_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

function extractCategoryId(url) {
  const match = url.match(/\/([^/]+)\/?$/);
  if (match && match[1]) {
    return match[1].replace(/\/+$/, '');
  }
  
  const parts = url.split('/').filter(part => part.length > 0);
  return parts[parts.length - 1] || url.split('/').slice(-2, -1)[0] || 'unknown';
}

function buildPageUrl(baseUrl, sortBy, page) {
  const categoryId = extractCategoryId(baseUrl);
  
  const cleanBaseUrl = baseUrl.replace(/index\.php\//g, '');
  
  let path;
  if (sortBy === "popular") {
    path = `/fiter/by/hits/id/${categoryId}`;
  } else {
    path = cleanBaseUrl.includes('label/') 
      ? cleanBaseUrl.replace(/\/page\/\d+\/?$/, '')
      : `/category/${categoryId}`;
  }
  
  if (page > 1) {
    return `${path}/page/${page}/`;
  }
  
  return `${path}/`;
}

function getFullUrl(path) {
  if (path.startsWith("http")) return path;
  
  return `https://javday.app${path}`;
}

function toAbsoluteUrl(url) {
  if (!url) return "";
  let clean = String(url).trim().replace(/&amp;/g, "&").replace(/^['"]|['"]$/g, "");
  if (!clean) return "";
  if (clean.startsWith("//")) return `https:${clean}`;
  if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
  return `https://javday.app${clean.startsWith("/") ? "" : "/"}${clean}`;
}

function getCoverImgSrc($item) {
  const coverElement = $item.find(".videoBox-cover").first();
  const styleAttr = coverElement.attr("style") || "";
  const dataBg = coverElement.attr("data-bg") || coverElement.attr("data-src") || "";

  const fromStyle = styleAttr.match(/url\(\s*(?:&quot;|['"]?)([^)'"]+)(?:&quot;|['"]?)\s*\)/i);
  if (fromStyle && fromStyle[1]) {
    return toAbsoluteUrl(fromStyle[1]);
  }
  if (dataBg) {
    return toAbsoluteUrl(dataBg);
  }

  const img = $item.find("img").first();
  const imgSrc = img.attr("data-src") || img.attr("src") || img.attr("data-original") || "";
  if (imgSrc && !imgSrc.startsWith("data:")) {
    return toAbsoluteUrl(imgSrc);
  }
  return "";
}

function buildListItem(index, link, title, imgSrc, description) {
  const cover = imgSrc || "";
  const isSeries = (description && description.includes("人气系列")) || (link && link.includes("/label/hot/"));
  return {
    id: link,
    type: "url",
    title: title,
    imgSrc: cover,
    posterPath: cover,
    backdropPath: cover,
    coverUrl: cover,
    link: link,
    description: description,
    mediaType: isSeries ? "tv" : "movie",
    playerType: "app"
  };
}

function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;
  
  const regexes = [
    /url\s*:\s*['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/i,
    /src\s*=\s*['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/i,
    /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/
  ];
  
  for (const regex of regexes) {
    const match = scriptContent.match(regex);
    if (match && match[1]) return match[1];
  }
  
  return null;
}

function isMaintenanceHtml(html) {
  if (!html) return false;
  const text = String(html);
  return (
    text.includes("服務暫時中斷") ||
    text.includes("服务暂时中断") ||
    text.includes("暫時中斷") ||
    text.includes("站点维护") ||
    text.includes("維護中") ||
    text.includes("维护中") ||
    text.includes("Service Temporarily Unavailable")
  );
}

function isBlockedHtml(html) {
  if (!html) return true;
  const text = String(html);
  if (isMaintenanceHtml(text)) return true;
  return text.includes("Just a moment") || text.includes("cf-mitigated") || text.includes("Performing security verification") || text.length < 2000;
}

function parseVideoBoxes(html, description) {
  const $ = Widget.html.load(html);
  const videoItems = [];
  const seen = {};

  $(".videoBox, a.videoBox").each((index, element) => {
    const $item = $(element);
    let link = $item.attr("href");
    const title = ($item.find(".videoBox-info .title").text() || $item.find(".title").text() || $item.attr("title") || "").trim();
    const imgSrc = getCoverImgSrc($item);
    if (!link || !title) return;

    link = toAbsoluteUrl(link).replace(/([^:]\/)\/+/g, "$1");
    if (seen[link]) return;
    seen[link] = true;
    videoItems.push(buildListItem(index, link, title, imgSrc, description));
  });

  return videoItems;
}

function normalizeVideoCode(keyword) {
  const raw = (keyword || "").trim();
  const match = raw.match(/^([A-Za-z]{2,10})[\s\-]?(\d{2,5})$/);
  if (!match) return null;
  return {
    dashed: `${match[1].toUpperCase()}-${match[2]}`,
    compact: `${match[1].toUpperCase()}${match[2]}`
  };
}

function decodeIdValue(value) {
  if (!value) return "";
  const raw = String(value);
  const cut = raw.indexOf(":");
  const body = cut >= 0 ? raw.slice(cut + 1) : raw;
  try { return decodeURIComponent(body); } catch (_) { return body; }
}

function buildActorListUrl(name, page) {
  const enc = encodeURIComponent(String(name || "").trim());
  return page > 1
    ? `https://javday.app/search/actor/${enc}/page/${page}/`
    : `https://javday.app/search/actor/${enc}/`;
}

function buildTagListUrl(name, page) {
  const enc = encodeURIComponent(String(name || "").trim());
  return page > 1
    ? `https://javday.app/search/tag/${enc}/page/${page}/`
    : `https://javday.app/search/tag/${enc}/`;
}

// 详情页点击女优 / 标签时，Forward 会把 id 通过 params.peopleId / params.genreId 回传给列表模块。
// 这里按 id 精确拉取作品列表，绝不回退到模块默认列表（否则会串出首页最新片）。
async function loadIdList(idValue, kind, page) {
  const value = String(idValue || "").trim();
  if (!value) return null;

  const candidates = [];
  if (/^https?:\/\//i.test(value)) {
    if (!/javday\.app/i.test(value)) return null;
    candidates.push(page > 1 ? `${value.replace(/\/+$/, "")}/page/${page}/` : value);
  } else {
    const name = decodeIdValue(value);
    if (name) {
      candidates.push(kind === "actor" ? buildActorListUrl(name, page) : buildTagListUrl(name, page));
      if (kind === "actor") candidates.push(buildTagListUrl(name, page));
    }
  }

  const desc = kind === "actor" ? "来自JAVDay | 女优作品" : "来自JAVDay | 标签作品";
  for (const url of candidates) {
    try {
      const html = await fetchHtml(url);
      if (!html || isMaintenanceHtml(html)) continue;
      if (isBlockedHtml(html)) continue;
      const items = parseVideoBoxes(html, desc);
      if (items.length > 0) return items;
    } catch (_) {}
  }
  return null;
}

async function loadPage(params = {}) {
  const page = parseInt(params.page, 10) || 1;

  // 女优 / 演员 chip
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  if (peopleId) {
    const items = await loadIdList(peopleId, "actor", page);
    if (items && items.length) return items;
    return [buildListItem(0, "https://javday.app/", "JAVDay 暂未收录该女优的作品", "", `未找到 ${decodeIdValue(peopleId) || peopleId} 的片单`)];
  }

  // 标签 / 分类 chip
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (genreId) {
    const items = await loadIdList(genreId, "tag", page);
    if (items && items.length) return items;
    return [buildListItem(0, "https://javday.app/", "JAVDay 暂未收录该标签的作品", "", `未找到 ${decodeIdValue(genreId) || genreId} 的片单`)];
  }

  const baseUrl = params.url;
  const sortBy = params.sort_by || "new";
  const pagePath = buildPageUrl(baseUrl, sortBy, page);
  const targetUrl = getFullUrl(pagePath);
  const isSeries = (baseUrl && baseUrl.includes("label/hot")) || (pagePath && pagePath.includes("label/hot"));
  const desc = isSeries ? "来自JAVDay | 人气系列" : ("来自JAVDay | 排序:" + (sortBy === "new" ? "最新上架" : "人气最高"));

  try {
    const html = await fetchHtml(targetUrl);
    if (isMaintenanceHtml(html)) {
      return [buildListItem(0, "https://javday.app/", "JAVDay 站点维护中，稍后再试", "", desc)];
    }
    if (isBlockedHtml(html)) {
      return [buildListItem(0, "https://javday.app/", "页面被拦截，请稍后重试", "", desc)];
    }
    const items = parseVideoBoxes(html, desc);
    if (items.length > 0) return items;
    return [buildListItem(0, targetUrl, "没有解析到影片", "", desc)];
  } catch (error) {
    console.error(JAVDAY_LOG_PREFIX + " 获取视频失败");
    return [buildListItem(0, "https://javday.app/", "载入失败，请稍后重试", "", desc)];
  }
}

async function fetchHtml(url) {
  const response = await Widget.http.get(url, {
    headers: {
      "User-Agent": JAVDAY_USER_AGENT,
      Referer: "https://javday.app/",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
    },
  });
  if (response && response.data) return response.data;
  return "";
}

async function search(params = {}) {
  const keyword = (params.keyword || "").trim();
  const page = parseInt(params.page, 10) || 1;

  if (!keyword) {
    return [buildListItem(0, "https://javday.app/", "请输入搜索关键词", "", "搜索")];
  }

  const encoded = encodeURIComponent(keyword);
  const code = normalizeVideoCode(keyword);
  const desc = `搜索: ${keyword}`;

  const urls = [];

  // 1. 如果搜索词包含中文/日文（非纯番号），优先尝试女优/演员专页与标签专页（这些专页完全无 Cloudflare 阻拦且影片精准）
  const isActorOrText = !code && !/^[A-Za-z0-9\s\-]+$/.test(keyword);
  if (isActorOrText) {
    urls.push(
      page === 1
        ? `https://javday.app/search/actor/${encoded}/`
        : `https://javday.app/search/actor/${encoded}/page/${page}/`
    );
    urls.push(
      page === 1
        ? `https://javday.app/search/tag/${encoded}/`
        : `https://javday.app/search/tag/${encoded}/page/${page}/`
    );
  }

  if (page === 1 && code) {
    urls.push(`https://javday.app/videos/${code.compact}/`);
    urls.push(`https://javday.app/videos/${code.dashed}/`);
    urls.push(`https://javday.app/videos/${code.compact.toLowerCase()}/`);
  }
  urls.push(
    page === 1
      ? `https://javday.app/search/?wd=${encoded}`
      : `https://javday.app/search/page/${page}/wd/${encoded}/`
  );
  urls.push(`https://javday.app/index.php/vod/search.html?wd=${encoded}`);
  urls.push(`https://javday.app/vodsearch/${encoded}----------${page}---.html`);

  let lastError = null;
  for (const url of urls) {
    try {
      const html = await fetchHtml(url);
      if (isMaintenanceHtml(html)) {
        lastError = "search-maintenance";
        continue;
      }
      if (isBlockedHtml(html)) {
        lastError = "search-blocked";
        continue;
      }

      if (url.includes("/videos/")) {
        const $ = Widget.html.load(html);
        const title = ($("h1.video-title").first().text() || $("title").text() || keyword).replace(/\s*-\s*JAVDAY.*$/i, "").trim();
        const ogImage = $('meta[property="og:image"]').attr("content") || "";
        const cover = toAbsoluteUrl(ogImage);
        if (title && title.length > 1) {
          return [buildListItem(0, url, title, cover, desc)];
        }
      }

      const items = parseVideoBoxes(html, desc);
      if (items.length > 0) {
        return items;
      }
    } catch (error) {
      lastError = error;
    }
  }

  if (page === 1) {
    try {
      const fallbackPages = [
        "https://javday.app/label/new/",
        "https://javday.app/category/new-release/",
        "https://javday.app/",
      ];
      const needle = keyword.toLowerCase().replace(/[\s\-]/g, "");
      const merged = [];
      const seen = {};
      for (const pageUrl of fallbackPages) {
        const html = await fetchHtml(pageUrl);
        if (isBlockedHtml(html)) continue;
        const items = parseVideoBoxes(html, desc);
        for (const item of items) {
          const hay = `${item.title}${item.link}`.toLowerCase().replace(/[\s\-]/g, "");
          if (hay.includes(needle) && !seen[item.link]) {
            seen[item.link] = true;
            merged.push(item);
          }
        }
      }
      if (merged.length > 0) return merged;
    } catch (error) {
      lastError = error;
    }
  }

  console.error(`${JAVDAY_LOG_PREFIX} 搜索失败: ${lastError && lastError.message ? lastError.message : lastError}`);
  const siteDown = lastError === "search-maintenance";
  return [
    buildListItem(
      0,
      "https://javday.app/",
      siteDown ? "JAVDay 站点维护中，稍后再试" : "搜索被拦截，请改用番号直达或稍后再试",
      "",
      siteDown ? "上游站点当前返回维护页，恢复后即可正常搜索" : "JAVDay 搜索页有 Cloudflare 验证，番号可试 ABF-370 这种格式"
    ),
  ];
}

function buildProxyM3u8Url(originalM3u8Url) {
  if (!originalM3u8Url) return "";
  return "https://antigravity.6106730.xyz/api/javday_m3u8?url=" + encodeURIComponent(originalM3u8Url);
}

function parseJavdayPlaylist(rawUrl, link) {
  if (!rawUrl) return { playUrl: "", episodes: [] };
  
  let clean = String(rawUrl).trim().replace(/^['"]|['"]$/g, "");
  
  if (!clean.includes("#") && !clean.includes("$")) {
    return {
      playUrl: toAbsoluteUrl(clean),
      episodes: []
    };
  }
  
  const parts = clean.split("#").map(p => p.trim()).filter(Boolean);
  const episodes = [];
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    let epTitle = `第 ${i + 1} 集`;
    let epUrl = part;
    
    if (part.includes("$")) {
      const segs = part.split("$");
      epTitle = segs[0].trim() || `第 ${i + 1} 集`;
      epUrl = segs[1].trim();
    }
    
    epUrl = toAbsoluteUrl(epUrl);
    
    if (epUrl) {
      episodes.push({
        id: `${link}?ep=${i + 1}`,
        title: epTitle,
        videoUrl: epUrl,
        episode: i + 1
      });
    }
  }
  
  const playUrl = episodes.length > 0 ? episodes[0].videoUrl : toAbsoluteUrl(clean);
  return { playUrl, episodes };
}

function extractRawPlaylistFromHtml(html, $) {
  // 1. Artplayer
  const artMatch = html.match(/new\s+Artplayer\(\s*\{[\s\S]*?url\s*:\s*['"]([^'"]+)['"]/);
  if (artMatch && artMatch[1]) return artMatch[1];

  // 2. DPlayer
  const dpMatch = html.match(/new\s+DPlayer\(\s*\{[\s\S]*?url\s*:\s*['"]([^'"]+)['"]/);
  if (dpMatch && dpMatch[1]) return dpMatch[1];

  // 3. player_aaaa (MacCMS)
  const paMatch = html.match(/var\s+player_aaaa\s*=\s*\{[\s\S]*?"url"\s*:\s*"([^"]+)"/);
  if (paMatch && paMatch[1]) return paMatch[1].replace(/\\/g, "/");

  // 4. Any script containing .m3u8
  const sMatch = html.match(/<script[^>]*>[\s\S]*?(?:url|src)\s*[:=]\s*['"]([^'"]*\.m3u8[^'"]*)['"][\s\S]*?<\/script>/i);
  if (sMatch && sMatch[1]) return sMatch[1];

  // 5. Video or source elements
  if ($) {
    const videoSrc = $("video#J_prismPlayer").attr("src") || 
                     $("source[src*='.m3u8']").attr("src") ||
                     $("video source").attr("src") ||
                     $("video[src]").attr("src") || 
                     $("iframe[src*='player']").attr("src");
    if (videoSrc) return videoSrc;
  }

  return null;
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

function isValidActressName(name) {
  if (!name || typeof name !== "string") return false;
  const trimmed = name.trim();
  // 长度必须大于等于 2 个字（没有任何正规女优名字只有单个字符或单字假名）
  if (trimmed.length < 2) return false;
  
  // 排除单纯的单个或两个五十音平假名/片假名索引（如 "あ", "か", "さ", "aa"）
  if (/^[ぁ-んァ-ヶa-zA-Z0-9]{1,2}$/.test(trimmed)) return false;
  
  // 排除常见导航分类词和系统词
  const invalidKeywords = new Set([
    "女优", "女優", "全部", "其他", "其它", "演员", "演員", "素人", 
    "企划", "企劃", "动画", "動畫", "VR", "精选", "推荐", "排行", 
    "标签", "標籤", "类别", "類別", "单体", "單體", "HD", "FHD", "4K",
    "首页", "首頁", "最新", "热门", "熱門", "排行榜", "搜索", "登入", "注册"
  ]);
  if (invalidKeywords.has(trimmed)) return false;
  
  return true;
}

function isActressNavOrFilterLink(href) {
  if (!href || typeof href !== "string") return false;
  if (/\/actress(?:es)?\/[a-z]{1,2}(?:\?|\/|$)/i.test(href)) return true;
  if (/\/actress(?:es)?\/?$/i.test(href)) return true;
  return false;
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
  if (!isValidActressName(name)) return "";
  
  // 1. 优先尝试从 JavDB 获取真实女优头像（无防盗链且覆盖度极高）
  try {
    const javDbUrl = `https://javdb.com/search?q=${encodeURIComponent(name)}&f=actor`;
    const res = await Widget.http.get(javDbUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)" }
    });
    if (res && res.data) {
      const match = String(res.data).match(/src="(https:\/\/c0\.jdbstatic\.com\/avatars\/[^"]+)"/);
      if (match && match[1]) {
        return match[1];
      }
    }
  } catch (_) {}

  // 2. 备选尝试从 MissAV 获取
  try {
    const searchUrl = `https://missav.fans/cn/actresses/${encodeURIComponent(name)}`;
    const res = await Widget.http.get(searchUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)" }
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

async function fetchFallbackActorsFromJavDb(dvdId) {
  if (!dvdId) return [];
  try {
    const searchUrl = `https://javdb.com/search?q=${encodeURIComponent(dvdId)}&f=all`;
    const res = await Widget.http.get(searchUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)" }
    });
    if (!res || !res.data) return [];
    const html = String(res.data);
    const m = html.match(/<a[^>]+href="(\/v\/[a-zA-Z0-9]+)"/);
    if (!m) return [];
    
    const detailUrl = `https://javdb.com${m[1]}`;
    const detailRes = await Widget.http.get(detailUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)" }
    });
    if (!detailRes || !detailRes.data) return [];
    const $ = Widget.html.load(detailRes.data);
    
    const actors = [];
    $(".movie-panel-info .panel-block").each((_, block) => {
      const text = $(block).text();
      if (text.includes("演員:") || text.includes("演员:")) {
        $(block).find("a[href*='/actors/']").each((_, a) => {
          const name = $(a).text().trim();
          const href = $(a).attr("href") || "";
          if (isValidActressName(name)) {
            actors.push({
              name,
              link: href.startsWith("http") ? href : `https://javdb.com${href}`
            });
          }
        });
      }
    });
    return actors;
  } catch (_) {
    return [];
  }
}

async function buildPeoplesWithAvatars(actorsList, dvdId) {
  // 先清洗传入的演员列表，剔除单字及无效词
  let validActors = (Array.isArray(actorsList) ? actorsList : []).filter(a => {
    const name = typeof a === "string" ? a.trim() : (a.name || a.title || "").trim();
    const link = typeof a === "object" ? (a.link || "") : "";
    return isValidActressName(name) && !isActressNavOrFilterLink(link);
  });

  // 如果页面完全没抓到有效女优，且有番号，尝试从 JavDB 补全真实主演
  if (validActors.length === 0 && dvdId) {
    try {
      const fallbackActors = await fetchFallbackActorsFromJavDb(dvdId);
      if (fallbackActors && fallbackActors.length > 0) {
        validActors = fallbackActors;
      }
    } catch (_) {}
  }

  if (validActors.length === 0) return [];

  const results = [];
  const seen = new Set();

  for (const a of validActors) {
    const name = typeof a === "string" ? a.trim() : (a.name || a.title || "").trim();
    if (!isValidActressName(name) || seen.has(name)) continue;
    seen.add(name);

    let avatar = typeof a === "object" ? (a.avatar || a.image || "") : "";
    // id 必须是 JAVDay 自己的链接或可解析的女优标记，绝不要把 JavDB 等外链当 id 回传
    const rawLink = typeof a === "object" ? (a.link || "") : "";
    let id = `actress:${encodeURIComponent(name)}`;
    if (/javday\.app/i.test(rawLink) && /\/search\/(actor|tag)\//i.test(rawLink)) {
      id = rawLink.startsWith("http") ? rawLink : toAbsoluteUrl(rawLink);
    }
    
    // 如果没有自带头像，尝试异步解析头像
    if (!avatar) {
      try {
        avatar = await resolveActressAvatar(name);
      } catch (_) {}
    }

    const personItem = {
      id: id,
      title: name,
      role: "主演"
    };
    if (avatar) {
      personItem.avatar = avatar;
      personItem.image = avatar;
      personItem.imgSrc = avatar;
    }
    results.push(personItem);
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
    const rawLink = typeof t === "object" ? (t.link || "") : "";
    const id = /\/tag\//i.test(rawLink)
      ? (rawLink.startsWith("http") ? rawLink : toAbsoluteUrl(rawLink))
      : `tag:${encodeURIComponent(title)}`;
    items.push({ id, title });
  }
  return items;
}



async function loadDetail(link) {
  const requestedLink = String(link || "");
  const episodeMatch = requestedLink.match(/[?&]ep=(\d+)(?:&|#|$)/);
  const episodeNumber = episodeMatch ? parseInt(episodeMatch[1], 10) : null;
  const pageLink = requestedLink.replace(/([?&])ep=\d+(&?)/, (_, sep, rest) => rest ? sep : "").replace(/[?&]$/, "");
  try {
    const response = await Widget.http.get(pageLink, {
      headers: {
        "User-Agent": JAVDAY_USER_AGENT,
        Referer: pageLink,
      },
    });

    if (!response || !response.data) {
      return {
        id: link,
        type: "detail",
        description: "详情未返回播放数据",
        playerType: "app",
        link: link
      };
    }

    const html = String(response.data);
    if (isMaintenanceHtml(html)) {
      return {
        id: link,
        type: "detail",
        description: "JAVDay 站点维护中，稍后再试",
        playerType: "app",
        link: link
      };
    }
    const $ = Widget.html.load(html);
    
    const title = ($("h1.video-title").text() || $("h1").first().text() || $("title").text() || "").trim();
    const desc = ($("meta[name='description']").attr("content") || "").trim();
    const poster = $("meta[property='og:image']").attr("content") || $("video#J_prismPlayer").attr("poster") || "";

    // 提取女优与标签（严格过滤导航噪音）
    const actors = [];
    $("a[href*='/search/actor/'], a[href*='/actor/'], a[href*='/actress/'], .vod_actor a, .actor a, .models a").each((_, el) => {
      const name = $(el).text().trim();
      const href = $(el).attr("href") || "";
      if (isValidActressName(name) && !isActressNavOrFilterLink(href) && !actors.find(a => a.name === name)) {
        actors.push({ name, link: href });
      }
    });

    const tags = [];
    $("a[href*='/tag/'], a[href*='/category/'], .tag-list a, .tag-cloud a, .tags a").each((_, el) => {
      const name = $(el).text().trim();
      const href = $(el).attr("href") || "";
      if (name && !tags.find(t => t.title === name)) {
        tags.push({ title: name, link: href });
      }
    });

    // 增强元数据 (剧照 / 预告片 / 团队 / 分类)
    const dvdId = parseJavCode(title || pageLink);
    const backdropPaths = dvdId ? buildJavBackdrops(dvdId.dvdId) : [];
    const trailers = dvdId ? buildJavTrailers(dvdId.dvdId) : undefined;
    const peoples = await buildPeoplesWithAvatars(actors, dvdId ? dvdId.dvdId : "");
    const genreItems = buildGenreItems(tags);

    const playHeaders = {
      Referer: pageLink,
      Origin: "https://javday.app",
      "User-Agent": JAVDAY_USER_AGENT,
    };

    const rawPlaylist = extractRawPlaylistFromHtml(html, $);
    if (rawPlaylist) {
      const parsed = parseJavdayPlaylist(rawPlaylist, pageLink);
      const episodes = parsed.episodes.filter(ep => /^https?:\/\/[^\s]+\.(?:m3u8|mp4)(?:[?#][^\s]*)?$/i.test(ep.videoUrl));
      const selectedEpisode = episodeMatch ? episodes.find(ep => ep.episode === episodeNumber) : episodes[0];
      if (episodeMatch && !selectedEpisode) {
        throw new Error("Requested episode does not exist");
      }
      const playUrl = selectedEpisode ? selectedEpisode.videoUrl : parsed.playUrl;
      if (/^https?:\/\/[^\s]+\.(?:m3u8|mp4)(?:[?#][^\s]*)?$/i.test(playUrl)) {
        const proxiedPlayUrl = buildProxyM3u8Url(playUrl);
        const isTv = episodes.length > 1;
        const episodesList = isTv ? episodes.map(ep => ({
          id: ep.id,
          type: "url",
          title: ep.title,
          link: ep.id,
          videoUrl: buildProxyM3u8Url(ep.videoUrl),
          episode: ep.episode,
          mediaType: "tv",
          playerType: "app",
          customHeaders: playHeaders,
          headers: playHeaders,
        })) : undefined;

        return {
          id: link,
          type: "detail",
          videoUrl: proxiedPlayUrl,
          title: title || undefined,
          description: desc || undefined,
          posterPath: poster ? toAbsoluteUrl(poster) : undefined,
          backdropPath: poster ? toAbsoluteUrl(poster) : undefined,
          playerType: "app",
          muted: false,
          volume: 1,
          link: link,
          customHeaders: playHeaders,
          headers: playHeaders,
          durationText: isTv ? `全 ${episodes.length} 集` : undefined,
          mediaType: isTv ? "tv" : "movie",
          episode: isTv ? episodes.length : undefined,
          episodes: episodesList,
          episodeItems: episodesList,
          childItems: episodesList,
          actors: actors.length > 0 ? actors : undefined,
          peoples: peoples.length > 0 ? peoples : undefined,
          genreItems: genreItems.length > 0 ? genreItems : undefined,
          backdropPaths: backdropPaths.length > 0 ? backdropPaths : undefined,
          trailers: trailers,
        };
      }
    }

    return {
      id: link,
      type: "detail",
      description: "未解析到有效视频源，请检查模块日志",
      playerType: "app",
      link: link
    };
  } catch (error) {
    console.error(JAVDAY_LOG_PREFIX + " 加载详情失败: " + error);
    return {
      id: link,
      type: "detail",
      description: "未解析到有效视频源，请检查模块日志",
      playerType: "app",
      link: link
    };
  }
}


// ==================== searchGlobal ====================

async function searchGlobal(params = {}) {
  const { keyword, page } = params;
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id;
  if (peopleId) return await loadPage({ peopleId, page });
  const genreId = params.genreId || params.genre_id || params.tagId;
  if (genreId) return await loadPage({ genreId, page });
  if (!String(keyword || "").trim()) {
    return await loadPage({ url: "https://javday.app/label/new/", sort_by: "new", page: 1 });
  }
  return await search({ keyword, page });
}

// ==================== loadResource 播放源 ====================

async function loadResource(params = {}) {
  try {
    const code = extractCodeForResource(params);
    if (!code) return [];

    // 搜索番号
    const results = await search({ keyword: code, page: 1 });
    if (!results || results.length === 0) return [];

    // 找到第一个有效链接
    const firstValid = results.find(item => item.link && item.link.includes("javday.app"));
    if (!firstValid) return [];

    // 加载详情获取播放地址
    const detail = await loadDetail(firstValid.link);
    if (!detail || !detail.videoUrl) return [];

    return [{
      name: code.toUpperCase(),
      description: "JAVDay 播放源 | 请用应用播放器",
      url: detail.videoUrl,
      playerType: "app",
      customHeaders: detail.customHeaders || detail.headers || {}
    }];
  } catch (e) {
    return [];
  }
}

function extractCodeForResource(params) {
  if (!params) return "";
  if (params.code) return String(params.code).trim();
  if (params.title) {
    const match = String(params.title).match(/[A-Z]{2,10}-?\d{2,8}/i);
    return match ? match[0] : String(params.title).trim();
  }
  if (params.id) return String(params.id).trim();
  return "";
}
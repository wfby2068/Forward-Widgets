var WidgetMetadata = {
  id: "ti.bemarkt.javday.v131",
  title: "JAVDay · 1.3.1",
  description: "JAVDay 列表与详情 · 分集协议修复版",
  author: "Ti",
  site: "https://widgets-xd.vercel.app",
  version: "1.3.1",
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
    }
  ]
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
  return {
    id: `${index}|${link}`,
    type: "url",
    title: title,
    imgSrc: cover,
    posterPath: cover,
    backdropPath: cover,
    coverUrl: cover,
    link: link,
    description: description,
    mediaType: "movie",
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

function isBlockedHtml(html) {
  if (!html) return true;
  const text = String(html);
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

async function loadPage(params = {}) {
  const baseUrl = params.url;
  const sortBy = params.sort_by || "new";
  const page = parseInt(params.page, 10) || 1;
  const pagePath = buildPageUrl(baseUrl, sortBy, page);
  const targetUrl = getFullUrl(pagePath);
  const desc = "来自JAVDay | 排序:" + (sortBy === "new" ? "最新上架" : "人气最高");

  try {
    const html = await fetchHtml(targetUrl);
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
  return [
    buildListItem(
      0,
      "https://javday.app/",
      "搜索被拦截，请改用番号直达或稍后再试",
      "",
      "JAVDay 搜索页有 Cloudflare 验证，番号可试 ABF-370 这种格式"
    ),
  ];
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
    const $ = Widget.html.load(html);
    
    const title = ($("h1.video-title").text() || $("h1").first().text() || $("title").text() || "").trim();
    const desc = ($("meta[name='description']").attr("content") || "").trim();
    const poster = $("meta[property='og:image']").attr("content") || $("video#J_prismPlayer").attr("poster") || "";

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
        return {
          id: link,
          type: "detail",
          videoUrl: playUrl,
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
          durationText: episodes.length > 0 ? `${episodes.length} 个分集` : undefined,
          mediaType: episodes.length > 0 ? "tv" : "movie",
          episodeItems: episodes.length > 0 ? episodes.map(ep => ({
            id: ep.id,
            type: "detail",
            title: ep.title,
            link: ep.id,
            videoUrl: ep.videoUrl,
            episode: ep.episode,
            mediaType: "tv",
            playerType: "app",
            customHeaders: playHeaders,
            headers: playHeaders,
          })) : undefined,
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

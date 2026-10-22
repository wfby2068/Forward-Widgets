var WidgetMetadata = {
  id: "jable_search",
  title: "Jable 搜索版",
  description: "Jable 专属搜索版：关键词搜索 + 热门番号 + 热门女优 + 热门题材分类",
  author: "婉儿",
  site: "https://jable.tv",
  version: "1.1.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 3600,
  modules: [
    {
      id: "search_keyword",
      title: "🔍 关键词搜索",
      description: "输入番号或女优名搜索（点击右上角筛选图标输入）",
      requiresWebView: false,
      functionName: "searchKeyword",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "关键词 / 番号",
          type: "input",
          description: "输入番号、演员或关键词（留空显示热门推荐）",
          value: ""
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序方式",
          value: "video_viewed",
          enumOptions: [
            { title: "最多观看", value: "video_viewed" },
            { title: "最新更新", value: "post_date" },
            { title: "最多收藏", value: "most_favourited" },
            { title: "近期最佳", value: "post_date_and_popularity" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      id: "search_prefix",
      title: "🔤 热门番号检索",
      description: "精选热门番号前缀（无需打字，下拉即选）",
      requiresWebView: false,
      functionName: "searchByPrefix",
      cacheDuration: 3600,
      params: [
        {
          name: "prefix",
          title: "选择番号前缀",
          type: "enumeration",
          description: "热门厂牌/系列番号",
          value: "SSIS",
          enumOptions: [
            { title: "SSIS (S1 顶级大作)", value: "SSIS" },
            { title: "MIDV (MOODYZ 旗舰)", value: "MIDV" },
            { title: "IPX (IDEA POCKET 核心)", value: "IPX" },
            { title: "SNIS (S1 历史经典)", value: "SNIS" },
            { title: "ABP (PRESTIGE 经典)", value: "ABP" },
            { title: "STARS (SOD STARS)", value: "STARS" },
            { title: "MIDE (MOODYZ 经典)", value: "MIDE" },
            { title: "JUL (Madonna 熟女人妻)", value: "JUL" },
            { title: "FSDSS (FALENO 专属)", value: "FSDSS" },
            { title: "CAWD (KAWAII 青春萝莉)", value: "CAWD" },
            { title: "DASD (DAS! 强力企划)", value: "DASD" },
            { title: "WANZ (WANZ 经典系列)", value: "WANZ" },
            { title: "PRED (PREMIUM 极致)", value: "PRED" },
            { title: "MIAA (MOODYZ 新系)", value: "MIAA" },
            { title: "DLDSS (DAHLIA 贵妇名媛)", value: "DLDSS" },
            { title: "FC2 (个人自拍无码流出)", value: "FC2" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      id: "search_actress",
      title: "💃 热门女优专区",
      description: "精选女神演员直达片单",
      requiresWebView: false,
      functionName: "searchByActress",
      cacheDuration: 3600,
      params: [
        {
          name: "actress",
          title: "选择女优",
          type: "enumeration",
          description: "女神演员",
          value: "河北彩花",
          enumOptions: [
            { title: "河北彩花 (神颜天花板)", value: "河北彩花" },
            { title: "三上悠亜 (国民女神)", value: "三上悠亜" },
            { title: "相沢みなみ (灰姑娘)", value: "相沢みなみ" },
            { title: "桃乃木かな (吃货女神)", value: "桃乃木かな" },
            { title: "涼森れむ (透明感少女)", value: "涼森れむ" },
            { title: "伊藤舞雪 (完美肉体)", value: "伊藤舞雪" },
            { title: "安齋らら (神乳巨峰)", value: "安齋らら" },
            { title: "小野六花 (可爱萌神)", value: "小野六花" },
            { title: "山岸逢花 (知性女神)", value: "山岸逢花" },
            { title: "楓カレン (神颜枫哥)", value: "楓カレン" },
            { title: "石川澪 (清纯治愈)", value: "石川澪" },
            { title: "明里つむぎ (纯情初恋)", value: "明里つむぎ" },
            { title: "葵つかさ (暗黑林志玲)", value: "葵つかさ" },
            { title: "波多野結衣 (暗黑志玲)", value: "波多野結衣" },
            { title: "七ツ森りり (混血模特)", value: "七ツ森りり" },
            { title: "神木麗 (美神降临)", value: "神木麗" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      id: "search_tag",
      title: "🏷️ 热门题材标签",
      description: "精选分类标签直达片单",
      requiresWebView: false,
      functionName: "searchByTag",
      cacheDuration: 3600,
      params: [
        {
          name: "tag",
          title: "精选标签",
          type: "enumeration",
          description: "核心分类",
          value: "chinese-subtitle",
          enumOptions: [
            { title: "🀄 中文字幕", value: "chinese-subtitle" },
            { title: "🔓 无码破解 / 流出", value: "uncensored-leak" },
            { title: "🍈 巨乳丰满", value: "massive-tits" },
            { title: "👗 制服诱惑", value: "uniform" },
            { title: "👠 美腿丝袜", value: "beautiful-legs" },
            { title: "👩‍💼 熟女人妻", value: "mature" },
            { title: "👧 青春少女", value: "schoolgirl" },
            { title: "💦 潮吹内射", value: "creampie" },
            { title: "💍 出轨不伦", value: "infidelity" },
            { title: "👅 痴女痴汉", value: "nympho" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "Jable 播放源",
      description: "按番号搜索并提取 Jable HLS 播放链接",
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
      { name: "keyword", title: "关键词", type: "input", description: "输入番号或女优名", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  }
};


// ==================== 搜索版专属处理函数 ====================

function normalizeUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

async function searchKeyword(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const keyword = String(params.keyword || "").trim();
  const page = Math.max(parseInt(params.page || params.from || 1, 10), 1);
  const sortBy = params.sort_by || "video_viewed";

  if (!keyword) {
    const hotUrl = `${BASE_URL}/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list&sort_by=video_viewed_today`;
    const hotItems = await loadPage({ url: hotUrl, page: page });
    const tipItem = {
      id: "search_tip",
      type: "url",
      title: "💡 提示：点击右上角【筛选】图标输入搜索词",
      description: "支持输入番号 (如 SSIS-123)、女优名、题材。下方为您精选今日热门影片：",
      link: BASE_URL,
      backdropPath: "https://jable.tv/favicon.ico",
      posterPath: "https://jable.tv/favicon.ico",
      imgSrc: "https://jable.tv/favicon.ico",
      mediaType: "movie"
    };
    return [tipItem, ...(Array.isArray(hotItems) ? hotItems : [])];
  }

  const encodedKw = encodeURIComponent(keyword);
  let url = `${BASE_URL}/search/${encodedKw}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${encodedKw}`;
  if (sortBy) url += `&sort_by=${sortBy}`;
  if (page > 1) url += `&from=${(page - 1) * 24}`;

  const items = await loadPage({ ...params, url });
  if (!items || items.length === 0 || (items.length === 1 && items[0].id === "empty")) {
    return [{
      id: "search_empty",
      type: "url",
      title: `🔍 未找到关于「${keyword}」的影片`,
      description: "建议检查番号拼写，或尝试搜索女优名、大厂牌前缀 (如 SSIS、MIDV)",
      link: `${BASE_URL}/search/${encodedKw}/`,
      backdropPath: "",
      posterPath: "",
      imgSrc: "",
      mediaType: "movie"
    }];
  }
  return items;
}

async function searchByPrefix(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const prefix = String(params.prefix || "SSIS").trim();
  const page = Math.max(parseInt(params.page || params.from || 1, 10), 1);
  const sortBy = params.sort_by || "video_viewed";

  const encodedKw = encodeURIComponent(prefix);
  let url = `${BASE_URL}/search/${encodedKw}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${encodedKw}`;
  if (sortBy) url += `&sort_by=${sortBy}`;
  if (page > 1) url += `&from=${(page - 1) * 24}`;

  return await loadPage({ ...params, url });
}

async function searchByActress(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const actress = String(params.actress || "河北彩花").trim();
  const page = Math.max(parseInt(params.page || params.from || 1, 10), 1);
  return await loadIdList(actress, "actor", { ...params, page });
}

async function searchByTag(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const tag = String(params.tag || "chinese-subtitle").trim();
  const page = Math.max(parseInt(params.page || params.from || 1, 10), 1);
  const sortBy = params.sort_by || "post_date";

  let url = `${BASE_URL}/categories/${tag}/?mode=async&function=get_block&block_id=list_videos_common_videos_list`;
  if (sortBy) url += `&sort_by=${sortBy}`;
  if (page > 1) url += `&from=${(page - 1) * 24}`;

  return await loadPage({ ...params, url });
}

async function searchGlobal(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const keyword = String(params.keyword || "").trim();
  const page = Math.max(parseInt(params.page || params.from || 1, 10), 1);

  if (!keyword) {
    const hotUrl = `${BASE_URL}/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list&sort_by=video_viewed_today`;
    return await loadPage({ url: hotUrl, page: page });
  }

  return await searchKeyword({ ...params, keyword, page });
}

// 兼容旧函数调用名
async function search(params = {}) {
  return await searchKeyword(params);
}

const BASE_URL = "https://jable.tv";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "zh-TW,zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://jable.tv/",
  "Connection": "keep-alive"
};

function isCloudflareChallengeHtml(html) {
  const raw = String(html || "");
  return (
    raw.includes("cf-challenge") ||
    raw.includes("cf_chl_opt") ||
    raw.includes("Checking your browser") ||
    raw.includes("Just a moment")
  );
}

function buildStatusItem(id, title, description) {
  return {
    id: id || "status",
    type: "url",
    title: title || "提示",
    description: description || "",
    link: BASE_URL,
    backdropPath: "",
    posterPath: "",
    mediaType: "movie"
  };
}

function extractVideoId(url) {
  if (!url) return "";
  const match = String(url).match(/\/videos\/([^\/?#]+)/);
  return match ? match[1] : "";
}

async function fetchWithRetry(url, options = {}) {
  const retries = options.retries || 2;
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await Widget.http.get(url, { headers: HEADERS });
      const html = res && res.data ? String(res.data) : "";
      if (isCloudflareChallengeHtml(html)) {
        if (i < retries) continue;
        return { html: "", blocked: true };
      }
      return { html, blocked: false };
    } catch (e) {
      if (i >= retries) return { html: "", blocked: false, error: e };
    }
  }
  return { html: "", blocked: false };
}

// ==================== 列表解析 ====================

function parseVideoList(htmlContent) {
  const $ = Widget.html.load(htmlContent);
  const items = [];

  $(".video-img-box").each((i, el) => {
    const $el = $(el);
    const $titleLink = $el.find(".title a").first();
    const rawUrl = $titleLink.attr("href") || "";
    const url = normalizeUrl(rawUrl);
    if (url && (url.includes("/videos/") || url.includes("jable.tv"))) {
      const $img = $el.find("img").first();
      const cover = $img.attr("data-src") || $img.attr("src") || "";
      const preview = $img.attr("data-preview") || "";
      const title = $titleLink.text().trim();
      const duration = $el.find(".absolute-bottom-right .label").first().text().trim();
      const videoId = extractVideoId(url);

      items.push({
        id: url,
        type: "url",
        title: title,
        link: url,
        backdropPath: cover,
        posterPath: cover,
        imgSrc: cover,
        previewUrl: preview,
        mediaType: "movie",
        durationText: duration,
        description: videoId ? `番号: ${videoId}` : ""
      });
    }
  });

  return items;
}

// ==================== 模块函数 ====================

// ==================== 详情页 chip（女优 / 标签）id 解析 ====================
// Forward 在详情页点击女优 / 标签 chip 时，会把 chip 的 id 通过 params.peopleId / params.genreId 回传给列表模块。
// 这里必须按 id 精确拉片单，且优先于模块自带的 url 常量参数；绝不回退模块默认列表（否则会串出首页最新片）。
const JABLE_LIST_BLOCK = "mode=async&function=get_block&block_id=list_videos_common_videos_list";

function decodeIdValue(value) {
  if (!value) return "";
  const raw = String(value);
  const cut = raw.indexOf(":");
  const body = cut >= 0 ? raw.slice(cut + 1) : raw;
  try { return decodeURIComponent(body); } catch (_) { return body; }
}

function normalizeJablePath(path) {
  let p = String(path || "").trim();
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) {
    if (!/jable\.tv/i.test(p)) return "";
    p = p.replace(/^https?:\/\/[^/]+/i, "");
  }
  p = p.replace(/[?#].*$/, "");
  if (!p.startsWith("/")) p = `/${p}`;
  if (!p.endsWith("/")) p += "/";
  return p;
}

function buildJableSearchUrl(name, offset) {
  const enc = encodeURIComponent(String(name || "").trim());
  const url = `${BASE_URL}/search/${enc}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${enc}`;
  return offset ? `${url}&from=${offset}` : url;
}

// 返回按优先级排列的候选地址：先用 chip 自带的真实路径，再退站内搜索
function buildIdListCandidates(idValue, kind, params = {}) {
  const raw = String(idValue || "").trim();
  const out = [];
  const push = (u) => { const v = String(u || "").trim(); if (v && !out.includes(v)) out.push(v); };
  if (!raw) return out;

  const page = Number(params.page || 0) || 0;
  const from = Number(params.from || 0) || 0;
  // Forward 的 from 字段是页码；偏移量按每页 24 条换算
  const offset = from > 1 ? (from - 1) * 24 : 0;
  const pageNum = page > 1 ? page : 0;

  const addPath = (path) => {
    const clean = normalizeJablePath(path);
    if (!clean) return;
    const plain = `${BASE_URL}${clean}`;
    const block = `${plain}?${JABLE_LIST_BLOCK}`;
    // 实测：女优 / 标签页的面包路径直连稳定（200/24 卡片），async block 形式对女优页会 403；
    // 因此直连优先，block 形式兜底；翻页用路径式 /N/（实测 200）优先，from= 偏移兜底
    if (pageNum) {
      push(`${plain}${pageNum}/`);
      push(`${block}&from=${(pageNum - 1) * 24}`);
    } else if (offset) {
      push(`${plain}${Math.floor(offset / 24) + 1}/`);
      push(`${block}&from=${offset}`);
    } else {
      push(plain);
      push(block);
    }
  };

  const addSearch = (name) => {
    if (!name) return;
    const enc = encodeURIComponent(String(name).trim());
    if (pageNum) {
      push(`${buildJableSearchUrl(name, "")}&from=${(pageNum - 1) * 24}`);
    } else if (offset) {
      push(buildJableSearchUrl(name, offset));
    } else {
      push(buildJableSearchUrl(name, ""));
      push(`${BASE_URL}/search/${enc}/`);
    }
  };

  if (/^https?:\/\//i.test(raw) || raw.startsWith("/")) {
    addPath(raw);
  } else {
    const name = decodeIdValue(raw);
    if (kind === "actor") {
      addPath(`${BASE_URL}/models/${encodeURIComponent(name)}/`);
    } else {
      addPath(`${BASE_URL}/tags/${encodeURIComponent(name)}/`);
    }
    addSearch(name);
  }
  return out;
}

async function loadIdList(idValue, kind, params = {}) {
  const candidates = buildIdListCandidates(idValue, kind, params);
  if (candidates.length === 0) {
    return [buildStatusItem("err", "地址无法识别", "该女优 / 标签链接不可用")];
  }

  let blocked = false;
  for (const candidate of candidates) {
    const fetched = await fetchWithRetry(candidate);
    if (fetched.blocked) { blocked = true; continue; }
    if (fetched.error || !fetched.html) continue;
    const items = parseVideoList(fetched.html);
    if (items.length > 0) return items;
  }

  if (blocked) {
    return [buildStatusItem("err_cf", "被 Cloudflare 拦截", "片单未通过验证，请稍后重试")];
  }
  const name = decodeIdValue(idValue) || idValue;
  return kind === "actor"
    ? [buildStatusItem("empty", `暂未收录「${name}」`, "Jable 没有这位女优的作品")]
    : [buildStatusItem("empty", `暂无「${name}」的影片`, "Jable 没有这个标签的影片")];
}

async function search(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const keyword = encodeURIComponent(params.keyword || "");
  let url = `${BASE_URL}/search/${keyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${keyword}`;
  if (params.sort_by) url += `&sort_by=${params.sort_by}`;
  const pageNum = Math.max(parseInt(params.page || params.from || 1, 10), 1);
    if (pageNum > 1 && !url.includes("&from=")) url += `&from=${(pageNum - 1) * 24}`;
  return await loadPage({ ...params, url });
}

async function searchGlobal(params = {}) {
  const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
  const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
  if (peopleId || genreId) {
    return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
  }

  const { keyword, from: page } = params;
  if (!String(keyword || "").trim()) {
    return await loadPage({
      url: `${BASE_URL}/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list&sort_by=video_viewed_today`,
      from: page
    });
  }
  return await search({ keyword, from: page });
}

async function loadPage(params = {}) {
  try {
    // 详情页 chip 点击优先：peopleId / genreId 必须压过模块自带的 url 常量
    const peopleId = params.peopleId || params.people_id || params.actorId || params.actor_id || params.actor;
    const genreId = params.genreId || params.genre_id || params.tagId || params.tag;
    if (peopleId || genreId) {
      return await loadIdList(peopleId || genreId, peopleId ? "actor" : "tag", params);
    }

    let url = params.url;
    if (!url) return [buildStatusItem("err", "错误", "地址不能为空")];

    if (params.sort_by) url += `&sort_by=${params.sort_by}`;
    const pageNum = Math.max(parseInt(params.page || params.from || 1, 10), 1);
    if (pageNum > 1 && !url.includes("&from=")) url += `&from=${(pageNum - 1) * 24}`;

    const fetched = await fetchWithRetry(url);
    if (fetched.blocked) {
      return [buildStatusItem("err_cf", "被 Cloudflare 拦截", "请稍后重试")];
    }
    if (fetched.error || !fetched.html) {
      return [buildStatusItem("err", "请求失败", fetched.error ? fetched.error.message : "无法获取内容")];
    }

    const items = parseVideoList(fetched.html);
    if (items.length === 0) {
      return [buildStatusItem("empty", "没有内容", "当前页面没有找到视频")];
    }
    return items;
  } catch (e) {
    return [buildStatusItem("err", "加载失败", e.message)];
  }
}

// ==================== 详情页 ====================



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
    // chip id 必须是 Jable 自己的地址；JavDB 兜底来的外链统一改写成 actress:名字，交给列表模块解析
    const rawLink = typeof a === "object" ? (a.link || "") : "";
    const linkIsJable = /^https?:\/\//i.test(rawLink) ? /jable\.tv/i.test(rawLink) : /^\/models\//i.test(rawLink);
    const id = linkIsJable && rawLink ? rawLink : `actress:${encodeURIComponent(name)}`;
    
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
    const rawLink = typeof t === "object" ? (t.link || "") : "";
    const linkIsJable = /^https?:\/\//i.test(rawLink) ? /jable\.tv/i.test(rawLink) : /^\/(tags|categories)\//i.test(rawLink);
    const id = linkIsJable && rawLink ? rawLink : `genre:${encodeURIComponent(title)}`;
    items.push({ id, title });
  }
  return items;
}



async function loadDetail(link) {
  try {
    const fetched = await fetchWithRetry(link);
    if (fetched.blocked) {
      return [buildStatusItem("err_cf", "被 Cloudflare 拦截", "详情页未通过验证")];
    }
    if (!fetched.html) {
      return [buildStatusItem("err", "请求失败", "无法获取详情页")];
    }

    const html = fetched.html;
    const $ = Widget.html.load(html);

    // 提取 HLS URL
    const hlsMatch = html.match(/var\s+hlsUrl\s*=\s*'([^']+)'/);
    const hlsUrl = hlsMatch ? hlsMatch[1] : "";

    if (!hlsUrl) {
      return [buildStatusItem("err", "解析失败", "未找到播放地址")];
    }

    // 提取元数据
    const title = $('meta[property="og:title"]').attr("content") || $("h1").text().trim() || "";
    const cover = $('meta[property="og:image"]').attr("content") || "";
    const duration = $(".absolute-bottom-right .label, .duration, [class*='duration']").first().text().trim();
    const description = $('meta[property="og:description"]').attr("content") || "";

    // 提取女优（含头像与链接）
    const actors = [];
    $(".models a, .info-header a[href*='/models/']").each((_, el) => {
      const $el = $(el);
      // jable 详情页的女优名只在锚点里显示首字占位符，完整名字放在 title 属性上
      const attrTitle = ($el.attr("title") || $el.find("[title]").first().attr("title") || "").trim();
      const name = attrTitle || $el.text().trim();
      const href = $el.attr("href") || "";
      const avatar = $el.find("img").attr("data-src") || $el.find("img").attr("src") || "";
      if (isValidActressName(name) && !isActressNavOrFilterLink(href) && !actors.find(a => a.name === name)) {
        actors.push({ name, link: href, avatar });
      }
    });

    // 提取标签 (分类胶囊)
    const tags = [];
    $(".tags a, a[href*='/tags/']").each((_, el) => {
      const name = $(el).text().trim();
      const href = $(el).attr("href") || "";
      if (name && !tags.find(t => t.title === name)) {
        tags.push({ title: name, link: href });
      }
    });

    // 提取推荐视频
    const relatedItems = parseVideoList(html);

    // 番号与高级元数据引擎 (剧照 / 预告片 / 团队 / 分类)
    const dvdId = parseJavCode(title || link);
    const backdropPaths = dvdId ? buildJavBackdrops(dvdId.dvdId) : [];
    const trailers = dvdId ? buildJavTrailers(dvdId.dvdId) : undefined;
    const peoples = await buildPeoplesWithAvatars(actors, dvdId ? dvdId.dvdId : "");
    const genreItems = buildGenreItems(tags);

    const item = {
      id: link,
      type: "detail",
      title,
      videoUrl: hlsUrl,
      mediaType: "movie",
      playerType: "app",
      durationText: duration,
      description,
      coverUrl: cover,
      posterPath: cover,
      backdropPath: cover,
      image: cover,
      actors: actors.length > 0 ? actors : undefined,
      peoples: peoples.length > 0 ? peoples : undefined,
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      backdropPaths: backdropPaths.length > 0 ? backdropPaths : undefined,
      trailers: trailers,
      relatedItems: relatedItems.length > 0 ? relatedItems : undefined,
      customHeaders: {
        "Referer": link,
        "User-Agent": HEADERS["User-Agent"],
        "Origin": BASE_URL
      }
    };

    return [item];
  } catch (e) {
    return [buildStatusItem("err", "详情页错误", e.message)];
  }
}


// ==================== loadResource 播放源 ====================

async function loadResource(params = {}) {
  try {
    const code = extractCodeFromParams(params);
    if (!code) return [];

    // 搜索番号
    const searchUrl = `${BASE_URL}/search/${encodeURIComponent(code)}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${encodeURIComponent(code)}`;
    const fetched = await fetchWithRetry(searchUrl);
    if (fetched.blocked || !fetched.html) return [];

    const $ = Widget.html.load(fetched.html);
    let detailLink = "";

    // 精确匹配番号
    const codeUpper = code.toUpperCase().replace(/[\s_\-]+/g, "");
    $(".video-img-box").each((i, el) => {
      const href = $(el).find(".title a").attr("href") || "";
      const vid = extractVideoId(href).toUpperCase().replace(/[\s_\-]+/g, "");
      if (vid === codeUpper) {
        detailLink = href;
        return false;
      }
    });

    // 模糊匹配
    if (!detailLink) {
      $(".video-img-box").each((i, el) => {
        const href = $(el).find(".title a").attr("href") || "";
        const text = $(el).find(".title a").text().toUpperCase().replace(/[\s_\-]+/g, "");
        if (href && text.includes(codeUpper)) {
          detailLink = href;
          return false;
        }
      });
    }

    // 取第一个结果
    if (!detailLink) {
      detailLink = $(".video-img-box .title a").first().attr("href") || "";
    }

    if (!detailLink) return [];

    // 获取详情页提取 HLS
    const detailFetched = await fetchWithRetry(detailLink, { retries: 1 });
    if (detailFetched.blocked || !detailFetched.html) return [];

    const hlsMatch = detailFetched.html.match(/var\s+hlsUrl\s*=\s*'([^']+)'/);
    if (!hlsMatch) return [];

    return [{
      name: code.toUpperCase(),
      description: "Jable 播放源（已匹配）| 请用应用播放器",
      url: hlsMatch[1],
      playerType: "app",
      customHeaders: {
        "Referer": detailLink,
        "User-Agent": HEADERS["User-Agent"],
        "Origin": BASE_URL
      }
    }];
  } catch (e) {
    return [];
  }
}

function extractCodeFromParams(params) {
  if (!params) return "";
  if (params.code) return String(params.code).trim();
  if (params.title) {
    const match = String(params.title).match(/[A-Z]{2,10}-?\d{2,8}/i);
    return match ? match[0] : String(params.title).trim();
  }
  if (params.id) {
    const videoId = extractVideoId(String(params.id));
    return videoId || String(params.id).trim();
  }
  return "";
}

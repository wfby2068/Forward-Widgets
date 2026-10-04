var WidgetMetadata = {
  id: "ti.bemarkt.javdb.v2",
  title: "JavDB",
  description: "获取 JavDB 最新/热门影片推荐、片商榜与番号检索；分类/演员/片商 chip 直达真实片单；详情页自动解析正片流（站内仅有预告）",
  author: "婉儿 (Waner)",
  site: "https://javdb.com",
  version: "2.2.0",
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
      description: "無碼标签检索（原 /uncensored 专页已改为需登入，此处走公开标签检索）",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/search?q=%E7%84%A1%E7%A2%BC&f=tag"
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
      title: "中文字幕",
      description: "中文字幕标签检索",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://javdb.com/search?q=%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95&f=tag"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "片商专区",
      description: "JavDB 有码片商榜（含作品数，可滑动选择）",
      requiresWebView: false,
      functionName: "loadMaker",
      cacheDuration: 3600,
      params: [
        {
          name: "path",
          title: "片商",
          type: "enumeration",
          value: "/makers/7R",
          enumOptions: [
            { title: "S1 NO.1 STYLE (8326)", value: "/makers/7R" },
            { title: "MOODYZ (11558)", value: "/makers/zKW" },
            { title: "FALENO (1340)", value: "/makers/Y46" },
            { title: "蚊香社, PRESTIGE,プレステージ (13301)", value: "/makers/6M" },
            { title: "IDEA POCKET (5711)", value: "/makers/ZXX" },
            { title: "kawaii (2875)", value: "/makers/rmZ" },
            { title: "E-BODY (2094)", value: "/makers/bgA" },
            { title: "マドンナ(Madonna) (9553)", value: "/makers/35e" },
            { title: "Attackers (5080)", value: "/makers/Ywz" },
            { title: "ワンズファクトリー (4428)", value: "/makers/333" },
            { title: "溜池ゴロー (2573)", value: "/makers/Ww7" },
            { title: "OPPAI (1862)", value: "/makers/p3k" },
            { title: "プレミアム (2553)", value: "/makers/8Xd" },
            { title: "Fitch (2738)", value: "/makers/Aby" },
            { title: "SOD Create (13434)", value: "/makers/q6" },
            { title: "KMP, ケイ・エム・プロデュース (14279)", value: "/makers/8V9" },
            { title: "Centervillage, センタービレッジ (7090)", value: "/makers/nw" },
            { title: "水晶映像, クリスタル映像 (6370)", value: "/makers/KQ" },
            { title: "ルビー (6074)", value: "/makers/my" },
            { title: "桃太郎映像出版 (5807)", value: "/makers/pk" },
            { title: "パラダイステレビ (5497)", value: "/makers/Yp8" },
            { title: "Glory Quest (5142)", value: "/makers/W17" },
            { title: "アリスJAPAN (5116)", value: "/makers/J2x" },
            { title: "ビッグモーカル (5068)", value: "/makers/mey" },
            { title: "タカラ映像 (4912)", value: "/makers/ZNX" },
            { title: "シロウトTV (4768)", value: "/makers/9Mw" },
            { title: "h.m.p (4592)", value: "/makers/xZg" },
            { title: "STAR PARADISE (4400)", value: "/makers/BO" },
            { title: "Hunter (4172)", value: "/makers/2Vm" },
            { title: "GIGA (4078)", value: "/makers/r3k" },
            { title: "ナチュラルハイ (3982)", value: "/makers/gZ" },
            { title: "ディープス (3807)", value: "/makers/D8" },
            { title: "なでしこ (3694)", value: "/makers/rZ" },
            { title: "VENUS (3687)", value: "/makers/OXz" },
            { title: "セレブの友 (3676)", value: "/makers/deB" },
            { title: "アイエナジー (3468)", value: "/makers/W7" },
            { title: "ワープエンタテインメント (3346)", value: "/makers/e1" },
            { title: "プレステージプレミアム(PRESTIGE PREMIUM) (3114)", value: "/makers/Qap" },
            { title: "オルスタックピクチャーズ (3103)", value: "/makers/89" },
            { title: "マキシング (2904)", value: "/makers/eBr" },
            { title: "マックスエー (2867)", value: "/makers/96p" },
            { title: "TMA (2865)", value: "/makers/7yV" },
            { title: "映天 (2761)", value: "/makers/bd" },
            { title: "S級素人 (2757)", value: "/makers/pN5" },
            { title: "プラネットプラス (2690)", value: "/makers/JVq" },
            { title: "ナンパTV (2670)", value: "/makers/WqZ" },
            { title: "Dogma (2661)", value: "/makers/zkz" },
            { title: "AVS (2595)", value: "/makers/363" },
            { title: "グローバルメディアエンタテインメント (2542)", value: "/makers/65M" },
            { title: "NEXT GROUP (2527)", value: "/makers/Nb" }
          ]
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
      title: "正片直连解析",
      description: "输入番号（如 MIUM-1485），返回可直连播放的正片流",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: [
        { name: "code", title: "番号", type: "input", value: "" }
      ]
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

// 站内只有预告流，正片流由后台按番号解析（MissAV 源）；未命中时明确标注为预告。
const RESOLVE_API = "https://antigravity.6106730.xyz/api/getav_meta";
const MISSAV_REFERER = "https://missav.fans/";

function normalizeCodeCandidates(code) {
  const raw = String(code || "").trim().toLowerCase().replace(/\s+/g, "");
  const out = [];
  if (!raw) return out;
  out.push(raw);
  const fc2 = raw.match(/^fc2[-_]?(?:ppv[-_]?)?(\d{3,})$/);
  if (fc2) { out.push(`fc2-ppv-${fc2[1]}`); out.push(`fc2-${fc2[1]}`); }
  const hey = raw.match(/^heydouga[-_]?(\d+)[-_](\d+)$/);
  if (hey) out.push(`heydouga-${hey[1]}-${hey[2]}`);
  return out.filter((v, i) => out.indexOf(v) === i);
}

async function resolveFullStream(code) {
  const candidates = normalizeCodeCandidates(code);
  for (let i = 0; i < candidates.length; i++) {
    for (let t = 0; t < 2; t++) {
      try {
        const resp = await Widget.http.get(`${RESOLVE_API}?code=${encodeURIComponent(candidates[i])}`, {
          headers: { "User-Agent": JAVDB_HEADERS["User-Agent"], "Accept": "application/json" }
        });
        const d = resp && resp.data
          ? (typeof resp.data === "string" ? JSON.parse(resp.data) : resp.data)
          : null;
        if (d && d.videoUrl) return { url: d.videoUrl, code: candidates[i], title: d.title || "" };
      } catch (e) {
        // 换候选择码/重试
      }
      await new Promise(r => setTimeout(r, 400));
    }
  }
  return null;
}

// JavDB 站点对未登录访客收紧：/uncensored、/tags、/actors/<id> 只回少量或登入页。
// 因此 chip 一律改写成「公开且内容完整」的路由：
//   标签/类别 -> /search?q=<名称>&f=tag     演员 -> /search?q=<名称>&f=all
//   片商      -> /makers/<id>               系列 -> /series/<id>   监督 -> /directors/<id>
function resolveChipTarget(params) {
  const p = params || {};
  const raw = p.genreId || p.tagId || p.peopleId || p.actressId || p.makerId || p.seriesId || p.directorId || "";
  if (!raw) return null;
  let v = String(raw).trim();
  if (!v) return null;
  try { v = decodeURIComponent(v); } catch (e) {}

  if (/^https?:\/\//i.test(v)) {
    const m = v.match(/javdb\.com(\/[^\s]*)/i);
    if (!m) return null;
    v = m[1];
  }

  const pref = v.match(/^([A-Za-z]+):(.+)$/);
  if (pref) {
    const kind = pref[1].toLowerCase();
    const val = pref[2].trim();
    if (!val) return null;
    const name = val.split("|")[0].trim();
    if (kind === "genre" || kind === "tag" || kind === "category") {
      return { url: `${JAVDB_BASE_URL}/search?q=${encodeURIComponent(name)}&f=tag`, label: name };
    }
    if (kind === "actress" || kind === "actor" || kind === "people") {
      return { url: `${JAVDB_BASE_URL}/search?q=${encodeURIComponent(name)}&f=all`, label: name };
    }
    if (kind === "maker" || kind === "studio" || kind === "series" || kind === "director") {
      const seg = kind === "studio" ? "makers" : (kind + "s");
      const id = name;
      const label = (val.split("|")[1] || id).trim();
      return { url: `${JAVDB_BASE_URL}/${seg}/${id}`, label: label };
    }
    return null;
  }

  if (/^\/(search\?|makers\/|series\/|directors\/|censored|western|rankings\/|\?v=new)/.test(v) || v === "/") {
    return { url: `${JAVDB_BASE_URL}${v}`, label: "" };
  }
  return null;
}

async function fetchJavList(url) {
  try {
    const response = await Widget.http.get(url, {
      headers: JAVDB_HEADERS,
      allow_redirects: true
    });
    if (!response || !response.data) {
      console.warn(`${JAVDB_LOG_PREFIX} 空响应 ${url}`);
      return [];
    }
    return parseJavDBList(response.data);
  } catch (error) {
    console.error(`${JAVDB_LOG_PREFIX} 获取列表失败: ${error.message}`);
    return [];
  }
}

async function loadPage(params = {}) {
  const chip = resolveChipTarget(params);
  if (chip) return fetchJavList(chip.url);

  const baseUrl = params.url || "https://javdb.com/";
  const page = parseInt(params.page, 10) || 1;
  let url = baseUrl;
  if (page > 1) {
    url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  }
  return fetchJavList(url);
}

async function loadMaker(params = {}) {
  const p = params || {};
  const path = String(p.path || "/makers/7R");
  const page = parseInt(p.page, 10) || 1;
  if (!/^\/makers\/[\w\-]+$/.test(path)) return [];
  let url = `${JAVDB_BASE_URL}${path}`;
  if (page > 1) url += `?page=${page}`;
  return fetchJavList(url);
}

async function loadRankings(params = {}) {
  const chip = resolveChipTarget(params);
  if (chip) return fetchJavList(chip.url);
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
  const chip = resolveChipTarget(params);
  if (chip) return fetchJavList(chip.url);
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
    const id = `actress:${encodeURIComponent(name)}`;
    
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
    const id = `genre:${encodeURIComponent(title)}`;
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
    const staff = [];

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
          if (isValidActressName(name) && !isActressNavOrFilterLink(href) && !actors.find(ac => ac.name === name)) {
            actors.push({ name, link: href.startsWith("http") ? href : `https://javdb.com${href}` });
          }
        });
      }
      const staffHit = [
        ["片商:", "maker", "/makers/"],
        ["系列:", "series", "/series/"],
        ["監督:", "director", "/directors/"],
        ["导演:", "director", "/directors/"]
      ].find(pair => text.includes(pair[0]));
      if (staffHit) {
        const $a = $(block).find(`a[href*='${staffHit[2]}']`).first();
        const nm = $a.text().trim();
        const hr = $a.attr("href") || "";
        const idm = hr.match(/\/(?:makers|series|directors)\/([\w\-]+)/);
        if (nm && idm && !staff.find(x => x.id === `${staffHit[1]}:${idm[1]}`)) {
          staff.push({ id: `${staffHit[1]}:${idm[1]}`, title: nm });
        }
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
    // JavDB 站内播放的是「预告」；这里按番号去后台解析真实正片流，命中才作为播放地址
    const resolvedFull = code ? await resolveFullStream(code) : null;
    const previewSource = previewVideo || (trailers && trailers[0] ? trailers[0].videoUrl : "");
    const playUrl = resolvedFull ? resolvedFull.url : previewSource;
    const trailerList = [];
    if (previewVideo) {
      trailerList.push({ id: "site-preview", title: "站内预告", url: previewVideo, videoUrl: previewVideo, mediaType: "trailer", playerType: "app" });
    }
    (trailers || []).forEach(t => trailerList.push(t));
    const peoples = await buildPeoplesWithAvatars(actors, dvdId ? dvdId.dvdId : "");
    const genreItems = buildGenreItems(tags);
    staff.forEach(x => { if (!genreItems.find(g => g.id === x.id)) genreItems.push(x); });

    if (!playUrl && code) {
      // 正片流与站内预告都拿不到：直接转源站打开，避免把死链当播放地址
      return {
        id: url,
        type: "url",
        title: title,
        link: `${MISSAV_REFERER}cn/${String(code).toLowerCase()}`,
        videoUrl: "",
        mediaType: "movie",
        playerType: "app",
        posterPath: poster,
        description: `番号: ${code} · 正片流未命中，已转源站打开`
      };
    }

    return {
      id: url,
      type: "detail",
      title: title,
      imgSrc: poster,
      coverUrl: poster,
      posterPath: poster,
      backdropPath: poster,
      mediaType: resolvedFull ? "movie" : "trailer",
      link: url,
      videoUrl: playUrl,
      releaseDate: durationFormatted,
      durationText: durationFormatted,
      playerType: "app",
      description: code
        ? `番号: ${code}${resolvedFull ? " · 正片已解析（后台）" : (previewSource ? " · 站内预告（正片流未命中）" : "")}`
        : title,
      actors: actors.length > 0 ? actors : undefined,
      peoples: peoples.length > 0 ? peoples : undefined,
      genreItems: genreItems.length > 0 ? genreItems : undefined,
      backdropPaths: backdropPaths.length > 0 ? backdropPaths : undefined,
      trailers: trailerList.length > 0 ? trailerList : undefined,
      customHeaders: {
        "Referer": resolvedFull ? MISSAV_REFERER : "https://javdb.com/",
        "User-Agent": JAVDB_HEADERS["User-Agent"]
      },
      extra: { code: code }
    };
  } catch (error) {
    return { id: url, type: "detail", title: "JavDB 详情", link: url, playerType: "app" };
  }
}

/* ---------------- 播放源模块：番号 -> 可直连正片流 ---------------- */

function codeFromInput(raw) {
  const s = String(raw || "").trim();
  if (!s) return "";
  const m = s.match(/([A-Za-z]{2,10}[-_]\d{2,6}(?:[-_]\d+)?)/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{3,}$/.test(s)) return s;
  return "";
}

async function loadResource(params) {
  const p = params || {};
  const code = codeFromInput(p.code || p.link || p.url || "");
  if (!code) return [];
  const resolved = await resolveFullStream(code);
  if (!resolved) return [];
  return [{
    id: resolved.code,
    type: "url",
    title: `正片直连（${String(resolved.code).toUpperCase()}）`,
    videoUrl: resolved.url,
    mediaType: "movie",
    playerType: "app",
    link: `${MISSAV_REFERER}cn/${resolved.code}`,
    customHeaders: { "Referer": MISSAV_REFERER, "User-Agent": JAVDB_HEADERS["User-Agent"] }
  }];
}

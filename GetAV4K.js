/**
 * GetAV 4K 终极版 v3.0.0
 * ------------------------------------------------------------------
 * 数据源：
 *   1) GetAV 官方视频站点地图（getav.net，本地化中文标题 + 时长 + 番号）
 *   2) MissAV 全量真实分类（最近更新 / 新作 / 无码流出 / 中文字幕 / 题材 / 片商 / 女优榜）
 * 播放：服务端解析出真实 m3u8（missav.fans 影片页 uuid → surrit CDN），App 播放器直连
 * 详情页：真实标题 / 封面 / 女优 chip / 题材 chip，点击直达该女优或题材的完整片单
 * 原则：只呈现源站真实数据，不做任何「取不到就回吐最新列表」的假数据兜底
 */

var API = "https://antigravity.6106730.xyz/api";
var MISSAV = "https://missav.fans";
var SITEMAP = "https://getav.net/zh-HK/video-sitemaps/v2/";
var COVER = "https://fourhoi.mrstcdn.store/";
var UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1";

var GENRES = [
  ["VR", "VR"], ["4K", "4K"], ["高清", "高清"], ["独家", "独家"], ["中出", "中出"],
  ["单体作品", "单体作品"], ["巨乳", "巨乳"], ["美乳", "美乳"], ["人妻", "人妻"], ["熟女", "熟女"],
  ["素人", "素人"], ["美少女", "美少女"], ["女高中生", "女高中生"], ["姐姐", "姐姐"], ["痴女", "痴女"],
  ["口交", "口交"], ["乳交", "乳交"], ["骑乘", "骑乘"], ["颜射", "颜射"], ["潮吹", "潮吹"],
  ["自慰", "自慰"], ["手淫", "手淫"], ["自拍", "自拍"], ["偷拍", "偷拍"], ["搭讪", "搭讪"],
  ["多人运动", "多人运动"], ["乱伦", "乱伦"], ["NTR", "NTR"], ["恋物癖", "恋物癖"], ["淫乱", "淫乱"],
  ["企划", "企划"], ["剧情", "剧情"], ["合集", "合集"], ["薄格", "薄格"], ["苗条", "苗条"],
  ["4小时以上", "4小时以上"], ["纪录片", "纪录片"]
];

var MAKERS = [
  "Prestige", "S1", "Madonna", "Moody's", "SOD", "IdeaPocket", "Attackers", "Fc2",
  "Das", "kawaii", "E-BODY", "OPPAI", "Premium", "Wanz Factory", "Takara Visual",
  "NATURAL HIGH", "VENUS", "Fitch", "DEEP'S", "Hunter", "本中", "TMA", "溜池ゴロー",
  "Glory Quest", "Alice Japan", "ドグマ", "桃太郎映像出版", "KM Produce", "Crystal-Eizou",
  "Waap Entertainment", "プラネットプラス", "ビッグモーカル", "センタービレッジ", "ゴーゴーズ",
  "セレブの友", "STAR PARADISE"
];

// 人气女优（源站实时榜单前 30，滑动显示名 → 源站检索名）
var ACTRESSES = [
  ["逢泽みゆ", "逢沢みゆ"], ["河北彩花", "河北彩花"], ["松本一香", "松本いちか"], ["濑户环奈", "瀬戸環奈"],
  ["美园和花", "美園和花"], ["波多野结衣", "波多野結衣"], ["北冈果林", "北岡果林"], ["天马ゆい", "天馬ゆい"],
  ["木下日葵", "木下ひまり"], ["沙月惠奈", "沙月恵奈"], ["弥生美月", "弥生みづき"], ["乙爱丽丝", "乙アリス"],
  ["柏木こなつ", "柏木こなつ"], ["彩月七绪", "彩月七緒"], ["森日向子", "森日向子"], ["花守夏步", "花守夏歩"],
  ["北野未奈", "北野未奈"], ["宍户里帆", "宍戸里帆"], ["椿莉香", "椿りか"], ["月野香澄", "月野かすみ"],
  ["うんぱい", "うんぱい"], ["新村晶", "新村あかり"], ["仓本すみれ", "倉本すみれ"], ["浅野こころ", "浅野こころ"],
  ["梦乃爱佳", "夢乃あいか"], ["石川澪", "石川澪"], ["神宫寺奈绪", "神宮寺ナオ"], ["皆月光", "皆月ひかる"],
  ["仓木华", "倉木華"], ["三上悠亚", "三上悠亜"]
];

var WidgetMetadata = {
  id: "ti.bemarkt.getav.ultimate.v3",
  title: "GetAV 4K 终极版",
  description: "GetAV 官方片库 + MissAV 真实分类/题材/片商/女优榜；详情页女优与题材直达片单；服务端解析直连播放",
  author: "婉儿",
  site: "https://getav.net",
  version: "3.0.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 1800,
  modules: [
    {
      title: "GetAV 最新收录",
      description: "GetAV 官方片库最新收录（中文标题 + 官方封面）",
      requiresWebView: false,
      functionName: "loadGetav",
      cacheDuration: 600,
      params: [
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "最近更新",
      description: "源站最近更新（实时）",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 300,
      params: [
        { name: "path", title: "列表", type: "constant", description: "列表", value: "/cn/new" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "新作上市",
      description: "最新上市作品",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 600,
      params: [
        { name: "path", title: "列表", type: "constant", description: "列表", value: "/cn/release" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "无码流出",
      description: "无码 / 流出专区",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        { name: "path", title: "列表", type: "constant", description: "列表", value: "/cn/uncensored-leak" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "中文字幕",
      description: "中文字幕版本专区",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        { name: "path", title: "列表", type: "constant", description: "列表", value: "/cn/search/chinese-subtitle" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "4K 超清",
      description: "4K 高清作品",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        { name: "path", title: "列表", type: "constant", description: "列表", value: "/cn/genres/4K" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "VR 专区",
      description: "VR 作品",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        { name: "path", title: "列表", type: "constant", description: "列表", value: "/cn/genres/VR" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "题材专区",
      description: "全量题材分类",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        {
          name: "path",
          title: "题材",
          type: "enumeration",
          description: "题材",
          enumOptions: GENRES.map(function (g) { return { title: g[0], value: "/cn/genres/" + g[1] }; }),
          value: "/cn/genres/巨乳"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "片商专区",
      description: "全量片商分类",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        {
          name: "path",
          title: "片商",
          type: "enumeration",
          description: "片商",
          enumOptions: MAKERS.map(function (m) { return { title: m, value: "/cn/makers/" + m }; }),
          value: "/cn/makers/Prestige"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "人气女优",
      description: "源站实时人气榜（可滑动选择）",
      requiresWebView: false,
      functionName: "loadList",
      cacheDuration: 900,
      params: [
        {
          name: "path",
          title: "女优",
          type: "enumeration",
          description: "女优",
          enumOptions: ACTRESSES.map(function (a) { return { title: a[0], value: "/cn/actresses/" + a[1] }; }),
          value: "/cn/actresses/河北彩花"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "搜索影片",
      description: "按番号 / 女优名 / 题材搜索",
      requiresWebView: false,
      functionName: "searchVideos",
      cacheDuration: 300,
      params: [
        { name: "keyword", title: "关键词", type: "input", description: "番号（如 ssis-997）或女优名 / 题材" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    }
  ]
};

/* ------------------------------ 基础工具 ------------------------------ */

function encPath(path) {
  return String(path || "").split("/").map(function (seg) {
    return seg ? encodeURIComponent(seg) : seg;
  }).join("/");
}

function buildStatusItem(id, title, description) {
  return {
    id: id || "status",
    type: "url",
    title: title || "提示",
    description: description || "",
    link: MISSAV,
    backdropPath: "",
    posterPath: "",
    mediaType: "movie"
  };
}

async function apiGet(url, tries) {
  const max = tries || 3;
  for (let i = 0; i < max; i++) {
    try {
      const resp = await Widget.http.get(url, { headers: { "User-Agent": UA, "Accept": "application/json" } });
      if (resp && resp.data) {
        const d = typeof resp.data === "string" ? JSON.parse(resp.data) : resp.data;
        if (d && !d.error) return d;
      }
    } catch (e) {
      // 网络抖动重试
    }
    await new Promise(function (r) { setTimeout(r, 600 + i * 900); });
  }
  return null;
}

function coverOf(code) {
  return COVER + String(code).toLowerCase() + "/cover-t.jpg";
}

function toItem(it) {
  const code = String(it.code || "").toLowerCase();
  if (!code) return null;
  const cover = it.cover || coverOf(code);
  return {
    id: code,
    type: "url",
    title: it.title || code.toUpperCase(),
    backdropPath: cover,
    posterPath: cover,
    previewUrl: it.preview || "",
    mediaType: "movie",
    durationText: it.duration || "",
    link: MISSAV + "/cn/" + code,
    playerType: "system",
    description: code.toUpperCase()
  };
}

function toItems(list) {
  return (list || []).map(toItem).filter(function (x) { return !!x; });
}

/* --------------------------- 1. GetAV 官方片库 --------------------------- */

async function loadGetav(params) {
  const chip = resolveChip(params);
  const page = Math.max(Number((params && (params.page || params.from)) || 1) || 1, 1);
  if (chip) return fetchList(chip, page, "sitemap");

  // 站点地图页码越大越新（源站每页 2000 条），第一页取最新
  const smPage = Math.max(26 - page, 1);
  const url = SITEMAP + smPage;
  let xml = "";
  for (let i = 0; i < 3 && !xml; i++) {
    try {
      const resp = await Widget.http.get(url, { headers: { "User-Agent": UA } });
      xml = String((resp && resp.data) || "");
    } catch (e) {
      xml = "";
    }
    if (!xml) await new Promise(function (r) { setTimeout(r, 800); });
  }
  if (!xml || xml.indexOf("<loc>") < 0) {
    return [buildStatusItem("err", "源站片库暂时不可用", "GetAV 站点地图未取到内容，请稍后重试")];
  }

  const locs = xml.match(/<loc>[^<]+<\/loc>/g) || [];
  const thumbs = xml.match(/<video:thumbnail_loc>[^<]+<\/video:thumbnail_loc>/g) || [];
  const durs = xml.match(/<video:duration>\d+<\/video:duration>/g) || [];
  const items = [];
  const seen = {};
  for (let i = 0; i < locs.length; i++) {
    const m = locs[i].match(/\/videos\/([^<]+)</);
    if (!m) continue;
    const code = m[1].toLowerCase();
    if (seen[code]) continue;
    seen[code] = 1;
    const thumb = thumbs[i] ? thumbs[i].replace(/<\/?video:thumbnail_loc>/g, "") : "";
    const secs = durs[i] ? parseInt(durs[i].replace(/[^\d]/g, ""), 10) : 0;
    items.push({
      id: code,
      type: "url",
      title: code.toUpperCase(),
      backdropPath: coverOf(code),
      posterPath: coverOf(code),
      secondaryBackdropPath: thumb,
      mediaType: "movie",
      durationText: secs ? (Math.floor(secs / 60) + " 分钟") : "",
      link: MISSAV + "/cn/" + code,
      playerType: "system",
      description: code.toUpperCase()
    });
    if (items.length >= 60) break;
  }
  if (!items.length) {
    return [buildStatusItem("empty", "本页暂无影片", "源站片库该页没有内容")];
  }
  return items;
}

/* ------------------ 2. 通用列表（含 chip 直达，绝无假兜底） ------------------ */

function safeDecode(v) {
  try { return decodeURIComponent(String(v)); } catch (e) { return String(v); }
}

function resolveChip(params) {
  const p = params || {};
  const raw = p.peopleId || p.genreId || p.actressId || p.tagId || p.makerId || "";
  if (!raw) return "";
  const orig = String(raw).trim();
  if (!orig) return "";
  if (/^\/(cn|en|ja)\//.test(orig) || /^\/(cn|en|ja)\//.test(safeDecode(orig))) {
    return safeDecode(orig);
  }
  const abs = orig.match(/missav\.fans\/(?:dm\d+\/)?(?:cn|en|ja)\/([^\s?#"']+)/i);
  if (abs) return "/cn/" + safeDecode(abs[1]);
  const pref = safeDecode(orig).match(/^([A-Za-z]+):(.+)$/);
  if (pref) {
    const MAP = {
      actress: "actresses", actor: "actresses", people: "actresses", actressname: "actresses",
      genre: "genres", genres: "genres", tag: "genres", tags: "genres", category: "genres", categories: "genres",
      maker: "makers", makers: "makers", studio: "makers"
    };
    const seg = MAP[pref[1].toLowerCase()];
    const val = pref[2].trim();
    // 只认自家前缀；外域地址一律不直取（防把 JavDB 链接当片单）
    if (seg && val && val.indexOf("//") !== 0 && val.indexOf("://") < 0) {
      return "/cn/" + seg + "/" + val;
    }
  }
  return "";
}

async function fetchList(path, page, from) {
  const clean = String(path || "").replace(/^https?:\/\/[^/]+/i, "");
  if (!/^\/(cn|en|ja)\//.test(clean)) {
    return [buildStatusItem("err", "地址无法识别", "该女优 / 题材链接不可用")];
  }
  const url = API + "/getav_list?path=" + encPath(clean) + "&page=" + page;
  const data = await apiGet(url);
  if (!data) {
    return [buildStatusItem("err_cf", "片单暂时取不到", "后台解析未返回内容，请稍后重试")];
  }
  const items = toItems(data.items);
  if (!items.length) {
    const label = decodeURIComponent(clean.split("/").filter(Boolean).pop() || "");
    return [buildStatusItem("empty", "暂无「" + label + "」的影片", "源站该分类第 " + page + " 页没有内容")];
  }
  return items;
}

async function loadList(params) {
  const p = params || {};
  const page = Math.max(Number(p.page || p.from || 1) || 1, 1);
  const chip = resolveChip(p);
  if (chip) return fetchList(chip, page, "chip");
  return fetchList(p.path || "/cn/new", page, "module");
}

/* ------------------------------ 3. 搜索 ------------------------------ */

async function searchVideos(params) {
  const p = params || {};
  const kw = String(p.keyword || "").trim();
  const page = Math.max(Number(p.page || p.from || 1) || 1, 1);
  if (!kw) {
    return [buildStatusItem("empty", "请输入关键词", "支持番号（ssis-997）、女优名、题材")];
  }
  const chip = resolveChip(p);
  if (chip) return fetchList(chip, page, "chip");

  const url = API + "/getav_search?q=" + encodeURIComponent(kw) + "&page=" + page;
  const data = await apiGet(url);
  if (!data) {
    return [buildStatusItem("err_cf", "搜索暂时不可用", "后台搜索未返回内容，请稍后重试")];
  }
  const items = toItems(data.items);
  if (!items.length) {
    return [buildStatusItem("empty", "没有找到「" + kw + "」", "换个番号或女优名试试")];
  }
  return items;
}

/* ------------------------------ 4. 详情 + 播放 ------------------------------ */

function extractCode(link) {
  const s = String(link || "");
  const m = s.match(/missav\.fans\/(?:dm\d+\/)?(?:cn|en|ja)\/([^/?#]+)/i) || s.match(/getav\.net\/[^/]+\/videos\/([^/?#]+)/i);
  return m ? decodeURIComponent(m[1]).toLowerCase() : "";
}

async function loadDetail(link) {
  const code = extractCode(link);
  if (!code) {
    return [buildStatusItem("err", "无法识别番号", "该链接不是有效影片地址")];
  }
  const data = await apiGet(API + "/getav_meta?code=" + encodeURIComponent(code));
  if (!data) {
    return [buildStatusItem("err_cf", "详情暂时取不到", "后台解析未返回内容，请稍后重试")];
  }

  const cover = data.cover || coverOf(code);
  const peoples = (data.actresses || []).map(function (a) {
    return { id: "/cn/actresses/" + String(a.slug || a.name || ""), title: a.name || a.slug };
  });
  const genreItems = (data.genres || []).map(function (g) {
    return { id: "/cn/genres/" + String(g.slug || g.name || ""), title: g.name || g.slug };
  });
  (data.makers || []).forEach(function (mk) {
    genreItems.push({ id: "/cn/makers/" + String(mk.slug || mk.name || ""), title: mk.name || mk.slug });
  });

  const item = {
    id: link,
    type: "detail",
    title: data.title || code.toUpperCase(),
    videoUrl: data.videoUrl || "",
    mediaType: "movie",
    playerType: "app",
    coverUrl: cover,
    posterPath: cover,
    backdropPath: cover,
    image: cover,
    description: code.toUpperCase(),
    customHeaders: { "Referer": MISSAV + "/", "User-Agent": UA },
    peoples: peoples.length ? peoples : undefined,
    genreItems: genreItems.length ? genreItems : undefined
  };
  if (!item.videoUrl) {
    item.type = "url";
    item.link = MISSAV + "/cn/" + code;
    item.description = code.toUpperCase() + "（源站未直接给出播放流，已转网页打开）";
  }
  return [item];
}

/* --------------------------- 5. 播放资源兜底 --------------------------- */

async function loadResource(params) {
  const p = params || {};
  const code = extractCode(p.link || p.url || "") || String(p.code || "").toLowerCase();
  if (!code) return [];
  const data = await apiGet(API + "/getav_meta?code=" + encodeURIComponent(code));
  if (!data || !data.videoUrl) return [];
  return [{
    id: code,
    type: "url",
    title: "直连播放（服务端解析）",
    videoUrl: data.videoUrl,
    mediaType: "movie",
    playerType: "app",
    customHeaders: { "Referer": MISSAV + "/", "User-Agent": UA },
    link: MISSAV + "/cn/" + code
  }];
}

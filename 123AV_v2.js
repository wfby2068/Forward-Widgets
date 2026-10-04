var WidgetMetadata = {
  id: "123av_v2",
  title: "123AV",
  author: "婉儿 (Waner)",
  description: "123AV / MissAV 镜像原画直连播放组件 v2 (标准规范版)",
  version: "2.0.0",
  requiredVersion: "0.0.2",
  site: "https://missav.ws",
  detailCacheDuration: 180,
  modules: [
    {
      title: "熱門",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        {
          name: "path",
          title: "週期",
          type: "enumeration",
          value: "today-hot",
          enumOptions: [
            { title: "今日熱門", value: "today-hot" },
            { title: "本週熱門", value: "weekly-hot" },
            { title: "本月熱門", value: "monthly-hot" }
          ]
        },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "最新",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        {
          name: "path",
          title: "列表",
          type: "enumeration",
          value: "new",
          enumOptions: [
            { title: "最近更新", value: "new" },
            { title: "新作上市", value: "release" }
          ]
        },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "中文字幕",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        { name: "path", title: "列表", type: "constant", value: "chinese-subtitle" },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "無碼",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        {
          name: "path",
          title: "類型",
          type: "enumeration",
          value: "uncensored-leak",
          enumOptions: [
            { title: "無碼流出", value: "uncensored-leak" },
            { title: "FC2", value: "fc2" }
          ]
        },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "絲襪",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        { name: "path", title: "列表", type: "constant", value: "genres/" + encodeURIComponent("絲襪") },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "空姐",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        { name: "path", title: "列表", type: "constant", value: "genres/" + encodeURIComponent("空姐") },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "秘書",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        { name: "path", title: "列表", type: "constant", value: "genres/" + encodeURIComponent("秘書") },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "老師",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        { name: "path", title: "列表", type: "constant", value: "genres/" + encodeURIComponent("女教師") },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      title: "題材",
      functionName: "loadList",
      cacheDuration: 180,
      params: [
        {
          name: "path",
          title: "題材",
          type: "enumeration",
          value: "genres/" + encodeURIComponent("中出"),
          enumOptions: [
            { title: "中出", value: "genres/" + encodeURIComponent("中出") },
            { title: "巨乳", value: "genres/" + encodeURIComponent("巨乳") },
            { title: "素人", value: "genres/" + encodeURIComponent("素人") },
            { title: "人妻", value: "genres/" + encodeURIComponent("人妻") },
            { title: "多P", value: "genres/" + encodeURIComponent("3P・4P") },
            { title: "調教", value: "genres/" + encodeURIComponent("調教奴隸") },
            { title: "NTR", value: "genres/NTR" }
          ]
        },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    },
    {
      id: "loadResource",
      title: "123AV 播放源",
      description: "按番号搜索并提取 HLS 流媒体播放链接",
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
      { name: "keyword", title: "关键词", type: "input", description: "搜索番号或关键词", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  }
};

const BASE_URL = "https://missav.ws";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
  "Referer": BASE_URL + "/"
};

function absUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href.split("#")[0].split("?")[0];
  return BASE_URL + (href.startsWith("/") ? href : "/" + href);
}

function videoTail(href) {
  const parts = absUrl(href).replace(/\/+$/, "").split("/");
  return (parts.pop() || "").toLowerCase();
}

function isVideoTail(tail) {
  if (!tail) return false;
  if (/^(new|release|fc2|search|genres|actresses|makers|vip|chinese-subtitle|uncensored-leak|today-hot|weekly-hot|monthly-hot)$/i.test(tail)) return false;
  return /(?:fc2[-_]?ppv[-_]?\d+|[a-z]{2,12}-\d{2,6}|heyzo[-_]?\d{3,5}|\d{6}[-_]\d{2,4})/i.test(tail);
}

function baseCode(tail) {
  return String(tail || "")
    .replace(/-uncensored-leak$/i, "")
    .replace(/-uncensored$/i, "")
    .replace(/-chinese-subtitle$/i, "")
    .toLowerCase();
}

function parseVideoList(html, mode) {
  if (!html || html.includes("Just a moment") || html.includes("cf-browser-verification")) {
    return [{ id: "err_cf", type: "url", title: "被 Cloudflare 攔截，請稍後重試" }];
  }
  if (html.includes("找不到頁面")) {
    return [{ id: "empty", type: "url", title: "分類不存在" }];
  }

  const $ = Widget.html.load(html);
  const map = new Map();

  $("a[href]").each((i, el) => {
    const $a = $(el);
    const href = $a.attr("href") || "";
    const tail = videoTail(href);
    if (!isVideoTail(tail)) return;

    const isLeak = /uncensored-leak/i.test(tail);
    const isSub = /chinese-subtitle/i.test(tail);
    if (mode !== "leak" && mode !== "all" && isLeak) return;
    if (mode !== "subtitle" && mode !== "all" && isSub) return;

    const full = absUrl(href);
    const code = baseCode(tail);
    const key = (mode === "leak" || mode === "subtitle") ? tail : code;
    let rec = map.get(key);
    if (!rec) {
      rec = { link: full, code: code, tail: tail, title: "", duration: "", img: "" };
      map.set(key, rec);
    }

    const text = ($a.attr("title") || $a.text() || "").replace(/\s+/g, " ").trim();
    const timeMatch = text.match(/^(\d{1,2}:\d{2}(?::\d{2})?)$/);
    if (timeMatch) rec.duration = timeMatch[1];
    else if (text.length > rec.title.length && text.length > 2) rec.title = text;

    const $img = $a.find("img").first();
    if ($img.length) {
      const src = $img.attr("data-src") || $img.attr("src") || "";
      if (src && !src.startsWith("data:")) rec.img = src.replace(/cover-t\.jpg/i, "cover.jpg");
    }
  });

  const results = [];
  for (const rec of map.values()) {
    const img = rec.img || ("https://fourhoi.com/" + rec.tail + "/cover.jpg");
    results.push({
      id: rec.link,
      type: "url",
      title: rec.title || rec.code.toUpperCase(),
      backdropPath: img,
      coverUrl: img,
      posterPath: img,
      link: rec.link,
      description: rec.code.toUpperCase(),
      releaseDate: rec.duration || "",
      durationText: rec.duration || "",
      mediaType: "movie",
      extra: { code: rec.code.toUpperCase() }
    });
  }
  return results.length ? results : [{ id: "empty", type: "url", title: "沒有找到相關影片" }];
}

async function loadList(params = {}) {
  const page = params.page || 1;
  const path = params.path || "new";
  let url = BASE_URL + "/" + path;
  if (Number(page) > 1) url += "?page=" + page;

  let mode = "normal";
  if (String(path).includes("chinese-subtitle")) mode = "subtitle";
  else if (/uncensored-leak|fc2/i.test(String(path))) mode = "leak";

  try {
    const res = await Widget.http.get(url, { headers: HEADERS });
    return parseVideoList(res.data, mode);
  } catch (e) {
    return [{ id: "err", type: "url", title: "載入失敗", description: String(e.message || e) }];
  }
}

function pickKeyword(params) {
  if (params == null) return "";
  if (typeof params === "string" || typeof params === "number") return String(params).trim();
  const keys = ["keyword", "q", "search", "text", "query", "wd", "key"];
  for (const k of keys) {
    if (params[k]) return String(params[k]).trim();
  }
  return "";
}

function cardFromCode(code, extra) {
  const tail = extra ? code + extra : code;
  const img = "https://fourhoi.com/" + tail + "/cover.jpg";
  return {
    id: BASE_URL + "/" + tail,
    type: "url",
    title: extra ? code.toUpperCase() + extra : code.toUpperCase(),
    coverUrl: img,
    posterPath: img,
    backdropPath: img,
    link: BASE_URL + "/" + tail,
    description: code.toUpperCase(),
    mediaType: "movie",
    extra: { code: code.toUpperCase() }
  };
}

async function searchByCode(params = {}) {
  const keyword = pickKeyword(params);
  if (!keyword) {
    return ["ipzz-927", "ssis-001", "dldss-534"].map(function (c) {
      return cardFromCode(c);
    });
  }
  const code = keyword.toLowerCase().replace(/\s+/g, "-");

  try {
    const urls = [
      BASE_URL + "/search/" + encodeURIComponent(keyword),
      BASE_URL + "/search/" + encodeURIComponent(code),
      BASE_URL + "/search?q=" + encodeURIComponent(keyword)
    ];
    for (const url of urls) {
      const res = await Widget.http.get(url, { headers: HEADERS });
      const list = parseVideoList(res.data, "all");
      if (list.length && list[0].id !== "empty" && list[0].id !== "err_cf") return list;
    }
  } catch (_) {}

  return [
    cardFromCode(code),
    cardFromCode(code, "-uncensored-leak"),
    cardFromCode(code, "-chinese-subtitle")
  ];
}

async function searchGlobal(params = {}) {
  return await searchByCode(params);
}

function extractM3u8(html) {
  if (!html) return "";
  const packed = html.match(/m3u8\|[^"'<\s]+\|video/i);
  if (packed) {
    const s = packed[0].split("|");
    if (s.length >= 8) {
      return "https://" + s[7] + "." + s[6] + "/" + s[5] + "-" + s[4] + "-" + s[3] + "-" + s[2] + "-" + s[1] + "/playlist.m3u8";
    }
  }
  const seek = html.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).{0,80}seek/i);
  if (seek) return "https://surrit.com/" + seek[1] + "/playlist.m3u8";
  const hostUuid = html.match(/(?:surrit|nineyu|fourhoi|sixyik)\.(?:com|store)\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
  if (hostUuid) return "https://surrit.com/" + hostUuid[1] + "/playlist.m3u8";
  const direct = html.match(/https?:\/\/[^"'\\\s]+\/playlist\.m3u8/i);
  return direct ? direct[0].replace(/\\+/g, "") : "";
}

async function loadDetail(link) {
  const url = typeof link === "object" && link ? (link.link || link.id || link.url) : String(link || "");
  try {
    const res = await Widget.http.get(url, { headers: Object.assign({}, HEADERS, { Referer: url }) });
    const html = res.data || "";
    let title = "";
    let cover = "";
    try {
      const $ = Widget.html.load(html);
      title = $('meta[property="og:title"]').attr("content") || $("h1").first().text().trim() || "";
      cover = $('meta[property="og:image"]').attr("content") || "";
    } catch (_) {}
    if (!title) {
      const m = html.match(/<title[^>]*>([^<]+)/i);
      title = m ? m[1].replace(/\s*[|—–-].*$/, "").trim() : "MissAV";
    }

    const videoUrl = extractM3u8(html);
    if (!videoUrl) {
      return { id: url, type: "detail", title: title || "解析失敗", description: "未找到播放地址", link: url, playerType: "app" };
    }

    return {
      id: url,
      type: "detail",
      title: title,
      link: url,
      posterPath: cover,
      coverUrl: cover,
      videoUrl: videoUrl,
      playerType: "app",
      customHeaders: {
        "User-Agent": HEADERS["User-Agent"],
        "Referer": url,
        "Origin": BASE_URL
      }
    };
  } catch (e) {
    return { id: url, type: "detail", title: "加載出錯", description: String(e.message || e), link: url, playerType: "app" };
  }
}

async function loadResource(params = {}) {
  try {
    let link = typeof params === "object" && params ? (params.link || params.url || params.id) : String(params || "");
    let videoUrl = (params && params.videoUrl) || "";

    if (!videoUrl && link && link.startsWith("http")) {
      const detail = await loadDetail(link);
      if (detail && detail.videoUrl) {
        videoUrl = detail.videoUrl;
      }
    }

    if (!videoUrl && params) {
      const kw = params.code || params.title || params.keyword;
      if (kw) {
        const list = await searchByCode({ keyword: kw });
        if (list && list.length > 0 && list[0].link) {
          const detail = await loadDetail(list[0].link);
          if (detail && detail.videoUrl) {
            videoUrl = detail.videoUrl;
          }
        }
      }
    }

    if (videoUrl) {
      return [{
        name: (params && params.title) || "123AV (MissAV)",
        description: "Surrit HLS 原畫播放源 | 建議使用應用播放器",
        url: videoUrl,
        playerType: "app",
        customHeaders: {
          "User-Agent": HEADERS["User-Agent"],
          "Referer": link || BASE_URL + "/",
          "Origin": BASE_URL
        }
      }];
    }
    return [];
  } catch (e) {
    return [];
  }
}

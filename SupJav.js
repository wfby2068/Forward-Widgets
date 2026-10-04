var WidgetMetadata = {
    id: "ti.bemarkt.supjav.full",
    title: "SupJav",
    description: "SupJav 全功能版 v3：真实分类路由、列表直连正片、女优/片商/搜索全收录",
    author: "婉儿",
    site: "https://supjav.com",
    version: "3.0.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 0,
    modules: [
        {
            title: "最新更新",
            description: "SupJav 首页最新收录",
            requiresWebView: false,
            functionName: "loadLatest",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "今日热门",
            description: "今日最多人看",
            requiresWebView: false,
            functionName: "loadPopularDay",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "本周热门",
            description: "本周最多人看",
            requiresWebView: false,
            functionName: "loadPopularWeek",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "本月热门",
            description: "本月最多人看",
            requiresWebView: false,
            functionName: "loadPopularMonth",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "中文字幕",
            description: "官方中文字幕专区",
            requiresWebView: false,
            functionName: "loadChineseSub",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "无码破解",
            description: "Reducing Mosaic 无码还原",
            requiresWebView: false,
            functionName: "loadReducingMosaic",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "日本有码",
            description: "Censored JAV 专区",
            requiresWebView: false,
            functionName: "loadCensored",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "日本无码",
            description: "Uncensored JAV 专区",
            requiresWebView: false,
            functionName: "loadUncensored",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "素人作品",
            description: "Amateur 素人专区",
            requiresWebView: false,
            functionName: "loadAmateur",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "无码流出",
            description: "Uncensored Leak 流出专区",
            requiresWebView: false,
            functionName: "loadLeak",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "FC2-PPV",
            description: "FC2 素人精选",
            requiresWebView: false,
            functionName: "loadFC2",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "VR 专区",
            description: "沉浸式 VR 影片",
            requiresWebView: false,
            functionName: "loadVR",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "动漫里番",
            description: "动漫与 3D 影片",
            requiresWebView: false,
            functionName: "loadAnime",
            cacheDuration: 0,
            params: [{ name: "page", title: "页码", type: "page", description: "页码", value: "1" }]
        },
        {
            title: "人气女优",
            description: "按女优浏览全部作品",
            requiresWebView: false,
            functionName: "loadCast",
            cacheDuration: 0,
            params: [
                {
                    name: "cast",
                    title: "选择女优",
                    type: "enumeration",
                    description: "选择女优",
                    value: "saika-kawakita",
                    enumOptions: [
                        { title: "河北彩伽 Saika Kawakita", value: "saika-kawakita" },
                        { title: "三上悠亚 Yua Mikami", value: "yua-mikami" },
                        { title: "石川澪 Mio Ishikawa", value: "mio-ishikawa" },
                        { title: "伊藤舞雪 Mayuki Ito", value: "mayuki-ito" },
                        { title: "小野六花 Rikka Ono", value: "rikka-ono" },
                        { title: "七泽美亚 Mia Nanasawa", value: "mia-nanasawa" },
                        { title: "葵司 Tsukasa Aoi", value: "tsukasa-aoi" },
                        { title: "楪可怜 Karen Yuzuriha", value: "karen-yuzuriha" },
                        { title: "相泽南 Minami Aizawa", value: "minami-aizawa" },
                        { title: "樱空桃 Momo Sakura", value: "momo-sakura" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "热门片商",
            description: "按片商浏览全部作品",
            requiresWebView: false,
            functionName: "loadMaker",
            cacheDuration: 0,
            params: [
                {
                    name: "maker",
                    title: "选择片商",
                    type: "enumeration",
                    description: "选择片商",
                    value: "s1-no-1-style",
                    enumOptions: [
                        { title: "S1 NO.1 STYLE", value: "s1-no-1-style" },
                        { title: "MOODYZ", value: "moodyz" },
                        { title: "FALENO", value: "faleno" },
                        { title: "SOD Create", value: "sod-create" },
                        { title: "PRESTIGE", value: "prestige" },
                        { title: "IDEA POCKET", value: "idea-pocket" },
                        { title: "E-BODY", value: "e-body" },
                        { title: "MAXING", value: "maxing" },
                        { title: "ATTACKERS", value: "attackers" },
                        { title: "MADONNA", value: "madonna" },
                        { title: "WAAP", value: "waap" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "搜索影片",
            description: "输入番号 / 女优 / 片商关键词",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 0,
            params: [
                { name: "keyword", title: "关键词", type: "input", description: "输入番号或演员名", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

var BASE = "https://supjav.com";
var API = "https://antigravity.6106730.xyz/api";

var BROWSER_HEADERS = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": BASE + "/zh/"
};

var STREAM_HEADERS = {
    "Referer": "https://missav.fans/",
    "Origin": "https://missav.fans",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15",
    "Accept": "*/*"
};

/* 站点真实路由（按可信度排序，逐个尝试，全部失败才报错） */
var ROUTES = {
    latest: ["/zh/"],
    popularDay: ["/zh/popular?sort=day", "/zh/popular"],
    popularWeek: ["/zh/popular?sort=week", "/zh/popular"],
    popularMonth: ["/zh/popular?sort=month", "/zh/popular"],
    chineseSub: ["/zh/category/chinese-subtitles"],
    reducing: ["/zh/category/reducing-mosaic"],
    censored: ["/zh/category/censored", "/zh/category/censored-jav"],
    uncensored: ["/zh/category/uncensored", "/zh/category/uncensored-jav"],
    amateur: ["/zh/category/amateur"],
    leak: ["/zh/category/uncensored-leak", "/zh/category/uncensored"],
    fc2: ["/zh/category/fc2-ppv", "/zh/category/fc2"],
    vr: ["/zh/category/vr"],
    anime: ["/zh/category/anime"]
};

var CAST_ROUTES = ["/zh/actor/{v}", "/zh/category/cast/{v}", "/zh/cast/{v}"];
var MAKER_ROUTES = ["/zh/studio/{v}", "/zh/category/maker/{v}", "/zh/category/studio/{v}"];

var CHALLENGE_RE = /Just a moment|请稍候|cf-chl|challenge-platform|Attention Required|正在检查|Verifying you are human/i;

/* ----------------------------- 1. 列表模块 ----------------------------- */

async function loadLatest(params) {
    return loadByRoutes("latest", params);
}

async function loadPopularDay(params) {
    return loadByRoutes("popularDay", params);
}

async function loadPopularWeek(params) {
    return loadByRoutes("popularWeek", params);
}

async function loadPopularMonth(params) {
    return loadByRoutes("popularMonth", params);
}

async function loadChineseSub(params) {
    return loadByRoutes("chineseSub", params);
}

async function loadReducingMosaic(params) {
    return loadByRoutes("reducing", params);
}

async function loadCensored(params) {
    return loadByRoutes("censored", params);
}

async function loadUncensored(params) {
    return loadByRoutes("uncensored", params);
}

async function loadAmateur(params) {
    return loadByRoutes("amateur", params);
}

async function loadLeak(params) {
    return loadByRoutes("leak", params);
}

async function loadFC2(params) {
    return loadByRoutes("fc2", params);
}

async function loadVR(params) {
    return loadByRoutes("vr", params);
}

async function loadAnime(params) {
    return loadByRoutes("anime", params);
}

async function loadCast(params) {
    var p = params || {};
    var slug = String(resolveSlug(p, "cast") || "saika-kawakita").toLowerCase();
    return loadByRoutes(CAST_ROUTES, p, slug, "女优");
}

async function loadMaker(params) {
    var p = params || {};
    var slug = String(resolveSlug(p, "maker") || "s1-no-1-style").toLowerCase();
    return loadByRoutes(MAKER_ROUTES, p, slug, "片商");
}

async function searchVideos(params) {
    var p = params || {};
    var q = String(p.keyword || "").trim();
    var page = pageOf(p);
    if (!q) return [statusItem("empty", "还没输入关键词", "请填写番号、女优或片商名")];
    var candidates = [
        BASE + "/zh/?s=" + encodeURIComponent(q),
        BASE + "/zh/page/" + page + "/?s=" + encodeURIComponent(q),
        BASE + "/zh/?s=" + encodeURIComponent(q) + "&paged=" + page
    ];
    return loadUrls(candidates, page, "搜索");
}

/* 片单入口：既支持站内路由，也接受 chip 回传的站内链接/路径 */
async function loadByRoutes(routeKey, params, slug, label) {
    var p = params || {};
    var page = pageOf(p);
    var chip = chipTarget(p);
    var candidates = [];
    if (chip) candidates.push(chip);
    var routes = typeof routeKey === "string" ? (ROUTES[routeKey] || []) : routeKey;
    routes.forEach(function (r) {
        var path = slug ? String(r).replace("{v}", encodeURIComponent(slug)) : r;
        candidates.push(pagedUrl(path, page));
    });
    return loadUrls(candidates, page, label || "");
}

async function loadUrls(candidates, page, label) {
    var challenged = false;
    for (var i = 0; i < candidates.length; i++) {
        var url = candidates[i];
        var html = await fetchHtml(url);
        if (html === null) continue;
        if (html === "") { challenged = true; continue; }
        var items = await attachStreams(parseSupJavHtml(html, url));
        if (items.length > 0) return items;
    }
    if (challenged) return [challengeItem(candidates[0])];
    return [statusItem("empty_" + page, (label ? label + " " : "") + "没有取到片单", "源站结构可能调整，点此直接进站查看")];
}

function pagedUrl(path, page) {
    var n = Math.max(parseInt(page, 10) || 1, 1);
    if (!path) return BASE + "/zh/";
    var qsIdx = path.indexOf("?");
    var head = qsIdx >= 0 ? path.slice(0, qsIdx) : path;
    var tail = qsIdx >= 0 ? path.slice(qsIdx) : "";
    head = String(head).replace(/\/+$/, "");
    if (n <= 1) return BASE + head + tail;
    return BASE + head + "/page/" + n + tail;
}

function chipTarget(p) {
    var raw = String(p.peopleId || p.genreId || p.actressId || p.tagId || p.makerId || p.path || "").trim();
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) return /supjav\.com/i.test(raw) ? raw : "";
    if (/^\/zh\//.test(raw)) return BASE + raw;
    return "";
}

function resolveSlug(p, key) {
    var raw = String(p[key] || "").trim();
    if (raw) return raw;
    var s = String(p.peopleId || p.genreId || p.makerId || "").trim();
    if (!s) return "";
    var m = s.match(/\/([^/?#]+)\/?$/);
    return m ? decodeURIComponent(m[1]) : "";
}

function pageOf(p) {
    return Math.max(parseInt((p || {}).page, 10) || 1, 1);
}

async function fetchHtml(url) {
    try {
        var r = await Widget.http.get(url, { headers: BROWSER_HEADERS, allow_redirects: true });
        var html = r && r.data ? String(r.data) : "";
        if (!html) return null;
        if (CHALLENGE_RE.test(html)) return "";
        if (html.length < 400) return null;
        return html;
    } catch (e) {
        return null;
    }
}

/* --------------------------- 2. 列表解析 + 正片 --------------------------- */

function parseSupJavHtml(html, pageUrl) {
    var out = [];
    var seen = {};
    var re = /<a\b[^>]*href=["']((?:https?:\/\/supjav\.com)?\/(?:zh\/)?\d+\.html)["'][^>]*>([\s\S]{0,2000}?)<\/a>/gi;
    var m;
    while ((m = re.exec(html)) !== null) {
        var path = m[1];
        var inner = m[2];
        var attrTitle = attrOf(m[0], "title") || attrOf(m[0], "data-title") || "";
        var imgAlt = "";
        var imgMatch = inner.match(/<img\b[^>]*>/i);
        var cover = "";
        if (imgMatch) {
            imgAlt = attrOf(imgMatch[0], "alt") || "";
            cover = attrOf(imgMatch[0], "data-original") || attrOf(imgMatch[0], "data-src") ||
                attrOf(imgMatch[0], "data-lazy-src") || attrOf(imgMatch[0], "src") || "";
        }
        var text = stripTags(inner);
        var rawTitle = cleanText(attrTitle || imgAlt || text);
        if (!rawTitle) continue;
        if (rawTitle.length < 3) continue;
        var link = /^https?:/i.test(path) ? path : BASE + path;
        if (seen[link]) continue;
        seen[link] = true;

        var labels = [];
        var lm = rawTitle.match(/\[([^\]]{1,24})\]/g) || [];
        lm.forEach(function (x) {
            var v = x.replace(/[\[\]]/g, "").trim();
            if (v && labels.indexOf(v) === -1) labels.push(v);
        });
        var title = cleanText(rawTitle.replace(/\[[^\]]*\]/g, " ")).replace(/\s{2,}/g, " ").trim();
        var code = extractCode(rawTitle) || "";
        var detailId = idFromPath(link);
        if (!/^\d{4,8}$/.test(detailId) && !code) code = extractCode(detailId);
        if (code) link = link + (link.indexOf("?") >= 0 ? "&" : "?") + "code=" + encodeURIComponent(code);
        var dateMatch = (text + " " + rawTitle).match(/(\d{4}[\/\-]\d{2}[\/\-]\d{2})/);
        var viewsMatch = text.match(/([\d,]{3,})\s*Views/i);

        var descBits = [];
        if (code) descBits.push(code.toUpperCase());
        if (labels.length) descBits.push(labels.join(" / "));
        if (dateMatch) descBits.push(dateMatch[1]);
        if (viewsMatch) descBits.push(viewsMatch[1] + " 次观看");

        out.push({
            id: String(code || detailId).toLowerCase(),
            type: "detail",
            title: title || (code ? code.toUpperCase() : rawTitle),
            backdropPath: cover ? String(cover).split("!")[0] : "",
            mediaType: "movie",
            duration: 0,
            durationText: "",
            previewUrl: "",
            videoUrl: "",
            link: link,
            description: descBits.join(" · "),
            playerType: "app"
        });
    }
    return out;
}

function attachStreams(items) {
    var codes = [];
    var seen = {};
    (items || []).forEach(function (x) {
        var c = String(x.id || "").toLowerCase();
        if (!c || !/^[a-z0-9\-]{2,24}$/.test(c)) return;
        if (/^\d+$/.test(c)) return;
        if (seen[c]) return;
        seen[c] = true;
        codes.push(c);
    });
    if (!codes.length) return Promise.resolve(items || []);

    return apiGet(API + "/getav_streams?codes=" + encodeURIComponent(codes.join(","))).then(function (d) {
        var streams = (d && d.streams) || {};
        (items || []).forEach(function (x) {
            var u = streams[String(x.id || "").toLowerCase()] || "";
            if (u) {
                x.videoUrl = u;
                x.type = "url";
                x.playerType = "app";
                x.customHeaders = STREAM_HEADERS;
                x.headers = STREAM_HEADERS;
            } else {
                x.type = "detail";
                x.videoUrl = "";
            }
            x.previewUrl = "";
        });
        return items;
    }).catch(function () {
        (items || []).forEach(function (x) {
            x.type = "detail";
            x.videoUrl = "";
            x.previewUrl = "";
        });
        return items;
    });
}

/* ------------------------------ 3. 详情页 ------------------------------ */

async function loadDetail(link) {
    var obj = (typeof link === "object" && link) ? link : null;
    var url = obj ? String(obj.link || obj.url || "") : String(link || "");
    var code = extractCode(obj ? String(obj.id || "") : "") || extractCode(url);
    var sourceUrl = url.replace(/[?&]code=[^&#]*/i, "");
    if (!code && /^https?:\/\//i.test(url)) code = await codeFromPage(url);
    var streamUrl = "";
    var cover = "";
    var title = "";
    var peoples = [];
    var genreItems = [];

    if (code) {
        var meta = await apiGet(API + "/getav_meta?code=" + encodeURIComponent(code.toLowerCase()));
        if (meta) {
            cover = meta.cover || "";
            title = meta.title || "";
            streamUrl = meta.videoUrl || "";
            (meta.actresses || []).forEach(function (a) {
                var nm = a.name || a.slug;
                if (!nm) return;
                peoples.push({ id: BASE + "/zh/?s=" + encodeURIComponent(nm), title: nm });
            });
            (meta.genres || []).forEach(function (g) {
                var nm = g.name || g.slug;
                if (!nm) return;
                genreItems.push({ id: BASE + "/zh/?s=" + encodeURIComponent(nm), title: nm });
            });
        }
        if (!streamUrl) {
            var d = await apiGet(API + "/resolve?code=" + encodeURIComponent(code.toLowerCase()));
            if (d && d.videoUrl) streamUrl = d.videoUrl;
        }
        if (!streamUrl) {
            streamUrl = await missavDirect(code);
        }
    }

    var playable = !!streamUrl;
    var item = {
        id: url || link,
        type: playable ? "detail" : "url",
        title: title || (code ? code.toUpperCase() : "SupJav 影片"),
        videoUrl: streamUrl || "",
        mediaType: "movie",
        posterPath: cover,
        backdropPath: cover || "",
        coverUrl: cover,
        image: cover,
        description: code ? (code.toUpperCase() + (playable ? " · 正片直连" : " · 未解析到直连流，已转源站打开")) : "SupJav 影片",
        previewUrl: "",
        playerType: "app",
        muted: false,
        volume: 1,
        customHeaders: STREAM_HEADERS,
        headers: STREAM_HEADERS,
        peoples: peoples.length ? peoples : undefined,
        genreItems: genreItems.length ? genreItems : undefined
    };

    if (!playable) {
        item.link = /^https?:\/\//i.test(sourceUrl) ? sourceUrl : BASE + "/zh/";
        item.customHeaders = undefined;
        item.headers = undefined;
    }
    return [item];
}

async function codeFromPage(url) {
    var html = await fetchHtml(url);
    if (!html) return "";
    var head = html.slice(0, 8000);
    var cands = [];
    var t = head.match(/<title[^>]*>([\s\S]{0,300}?)<\/title>/i);
    if (t) cands.push(cleanText(t[1]));
    var og = head.match(/property=["']og:title["'][^>]*content=["']([^"']{0,300})["']/i) ||
        head.match(/content=["']([^"']{0,300})["'][^>]*property=["']og:title["']/i);
    if (og) cands.push(cleanText(og[1]));
    var h1 = head.match(/<h1[^>]*>([\s\S]{0,300}?)<\/h1>/i);
    if (h1) cands.push(cleanText(stripTags(h1[1])));
    for (var i = 0; i < cands.length; i++) {
        var c = extractCode(cands[i]);
        if (c) return c;
    }
    return "";
}

async function missavDirect(code) {
    try {
        var r = await Widget.http.get("https://missav.fans/cn/" + encodeURIComponent(code.toLowerCase()), {
            headers: STREAM_HEADERS,
            allow_redirects: true
        });
        var h = r && r.data ? String(r.data) : "";
        var m = h.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
        if (m) return "https://surrit.mrstcdn.store/" + m[0] + "/playlist.m3u8";
    } catch (e) {}
    return "";
}

/* ------------------------------ 4. 工具 ------------------------------ */

function apiGet(url) {
    return Widget.http.get(url, { headers: { "User-Agent": "Mozilla/5.0", "Accept": "application/json" } })
        .then(function (r) {
            var d = r && r.data;
            if (typeof d === "string") { try { d = JSON.parse(d); } catch (e) { return null; } }
            return d || null;
        })
        .catch(function () { return null; });
}

function statusItem(id, title, desc) {
    return {
        id: "supjav-" + id,
        type: "detail",
        title: title,
        backdropPath: BASE + "/favicon.ico",
        mediaType: "movie",
        duration: 0,
        durationText: "",
        previewUrl: "",
        videoUrl: "",
        link: BASE + "/zh/",
        description: desc || "",
        playerType: "app"
    };
}

function challengeItem(url) {
    return {
        id: "supjav-challenge",
        type: "url",
        title: "需要过一下浏览器验证",
        backdropPath: BASE + "/favicon.ico",
        mediaType: "movie",
        duration: 0,
        durationText: "",
        previewUrl: "",
        videoUrl: "",
        link: url || (BASE + "/zh/"),
        description: "源站要求人机验证：点这里用浏览器打开一次，验证通过后回 App 刷新即可",
        playerType: "app"
    };
}

function attrOf(tag, name) {
    var m = String(tag || "").match(new RegExp(name + '=["\\\']([^"\\\']*)["\\\']', "i"));
    return m ? cleanText(m[1]) : "";
}

function stripTags(v) {
    return String(v || "")
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ");
}

function idFromPath(link) {
    var m = String(link || "").match(/\/(\d+)\.html/i);
    return m ? m[1] : String(link || "");
}

function extractCode(v) {
    var s = String(v || "");
    var q = s.match(/[?&]code=([a-z0-9\-]{2,24})/i);
    if (q) return q[1].toLowerCase();
    var fc2 = s.match(/FC2[\s\-_]*(?:PPV)?[\s\-_]*(\d{4,9})/i);
    if (fc2) return "fc2-ppv-" + fc2[1];
    var m = s.match(/\b([A-Za-z]{2,6})[\-_ ]?(\d{2,5})\b/);
    if (!m) return "";
    return m[1].toUpperCase() + "-" + m[2];
}

function cleanText(v) {
    return String(v || "")
        .replace(/<!\[CDATA\[/g, "")
        .replace(/\]\]>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#0?39;/g, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

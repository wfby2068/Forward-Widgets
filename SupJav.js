var WidgetMetadata = {
    id: "ti.bemarkt.supjav.full",
    title: "SupJav",
    description: "SupJav 全功能版：最新、热门、无码、FC2、VR、片商与女优全收录；详情带演员/片商/标签与完整数据",
    author: "婉儿",
    site: "https://supjav.com",
    version: "2.1.1",
    requiredVersion: "0.0.1",
    detailCacheDuration: 0,
    modules: [
        {
            title: "最新更新",
            description: "SupJav 最新收录影视",
            requiresWebView: false,
            functionName: "loadLatest",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "今日热门",
            description: "SupJav 今日最受欢迎影片",
            requiresWebView: false,
            functionName: "loadPopularDay",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本周热门",
            description: "SupJav 本周最受欢迎影片",
            requiresWebView: false,
            functionName: "loadPopularWeek",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "本月热门",
            description: "SupJav 本月最受欢迎影片",
            requiresWebView: false,
            functionName: "loadPopularMonth",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "中文字幕",
            description: "SupJav 中文字幕专区",
            requiresWebView: false,
            functionName: "loadChineseSub",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "日本有码",
            description: "SupJav 日本有码精选",
            requiresWebView: false,
            functionName: "loadCensored",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "日本无码",
            description: "SupJav 日本无码精选",
            requiresWebView: false,
            functionName: "loadUncensored",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "FC2-PPV 素人",
            description: "SupJav FC2-PPV 高清精选",
            requiresWebView: false,
            functionName: "loadFC2",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "无码流出 / 破解",
            description: "SupJav 无码破解还原流",
            requiresWebView: false,
            functionName: "loadLeak",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "VR 专区",
            description: "SupJav 沉浸式 VR 影片",
            requiresWebView: false,
            functionName: "loadVR",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "动漫里番",
            description: "SupJav 精选动漫与 3D 影片",
            requiresWebView: false,
            functionName: "loadAnime",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "热门片商",
            description: "按知名片商筛选影片",
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
                        { title: "SOD Create", value: "soft-on-demand" },
                        { title: "PRESTIGE", value: "prestige" },
                        { title: "IDEA POCKET", value: "idea-pocket" },
                        { title: "E-BODY", value: "e-body" },
                        { title: "MAXING", value: "maxing" },
                        { title: "ATTACKERS", value: "attackers" },
                        { title: "MADONNA", value: "madonna" },
                        { title: "WAAP", value: "waap-group" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "人气女优",
            description: "按知名女优筛选影片",
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
                        { title: "河北彩伽 (Saika Kawakita)", value: "saika-kawakita" },
                        { title: "三上悠亚 (Yua Mikami)", value: "yua-mikami" },
                        { title: "相泽南 (Minami Aizawa)", value: "minami-aizawa" },
                        { title: "楪可怜 (Karen Yuzuriha)", value: "karen-yuzuriha" },
                        { title: "樱空桃 (Momo Sakurakuu)", value: "momo-sakura" },
                        { title: "葵司 (Tsukasa Aoi)", value: "tsukasa-aoi" },
                        { title: "伊藤舞雪 (Mayuki Ito)", value: "mayuki-ito" },
                        { title: "石川澪 (Mio Ishikawa)", value: "mio-ishikawa" },
                        { title: "小野六花 (Rikka Ono)", value: "rikka-ono" },
                        { title: "七泽美亚 (Mia Nanasawa)", value: "mia-nanasawa" }
                    ]
                },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "搜索影片",
            description: "输入番号或演员搜索",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 0,
            params: [
                { name: "keyword", title: "关键词", type: "input", description: "输入番号或演员", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

var BASE = "https://supjav.com";
var RESOLVE_API = "https://antigravity.6106730.xyz/api/resolve?code=";
var META_API = "https://antigravity.6106730.xyz/api/getav_meta?code=";

var DEFAULT_HEADERS = {
    "Referer": "https://missav.fans/",
    "Origin": "https://missav.fans",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15",
    "Accept": "*/*"
};

var SUPJAV_HEADERS = {
    "Referer": "https://supjav.com/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15"
};

async function loadLatest(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/", page)], page);
}

async function loadPopularDay(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/popular?sort=day", page), pageUrl("/zh/popular", page)], page);
}

async function loadPopularWeek(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/popular?sort=week", page), pageUrl("/zh/popular", page)], page);
}

async function loadPopularMonth(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/popular?sort=month", page), pageUrl("/zh/popular", page)], page);
}

async function loadChineseSub(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/chinese-subtitles", page)], page);
}

async function loadCensored(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/censored-jav", page), pageUrl("/zh/category/censored", page)], page);
}

async function loadUncensored(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/uncensored-jav", page), pageUrl("/zh/category/uncensored", page)], page);
}

async function loadFC2(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/fc2-ppv", page), pageUrl("/zh/category/fc2", page)], page);
}

async function loadLeak(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/uncensored-leak", page), pageUrl("/zh/category/reducing-mosaic", page)], page);
}

async function loadVR(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/vr", page)], page);
}

async function loadAnime(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/anime", page)], page);
}

async function loadMaker(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var m = p.maker || "s1-no-1-style";
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/maker/" + m, page), pageUrl("/zh/studio/" + m, page), pageUrl("/zh/category/studio/" + m, page)], page);
}

async function loadCast(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var c = p.cast || "saika-kawakita";
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    return fetchHtmlList([pageUrl("/zh/category/cast/" + c, page), pageUrl("/zh/actor/" + c, page), pageUrl("/zh/?s=" + encodeURIComponent(c.replace(/-/g, " ")), page)], page);
}

async function searchVideos(params) {
    var p = params || {};
    var chip = chipTarget(p);
    if (chip) return loadChipTarget(chip, p);
    var q = String(p.keyword || "").trim();
    var page = Math.max(parseInt(p.page, 10) || 1, 1);
    if (!q) return loadLatest(params);
    return fetchHtmlList([pageUrl("/zh/?s=" + encodeURIComponent(q), page), BASE + "/zh/?s=" + encodeURIComponent(q) + (page > 1 ? "&page=" + page : "")], page);
}

/* ==== 抓取与解析（v2.1：多路由自愈 + 诚实降级，绝不塞别站内容）==== */

async function fetchHtmlList(urls, pageNum) {
    var list = typeof urls === "string" ? [urls] : (urls || []);
    var tried = [];
    var challenged = false;
    for (var i = 0; i < list.length; i++) {
        var u = list[i];
        if (!u || tried.indexOf(u) !== -1) continue;
        tried.push(u);
        var html = await fetchHtml(u);
        if (html === "") { challenged = true; continue; }
        if (!html) continue;
        var items = parseSupJavHtml(html);
        if (items.length > 0) return items;
    }
    if (challenged) {
        return [statusItem("supjav-challenge", "SupJav 要求过一次人机验证",
            "源站要求浏览器验证：点这里用浏览器打开一次，回来刷新本模块即可。", tried[0])];
    }
    return [statusItem("supjav-empty", "这一页没抓到片单",
        "源站没返回卡片（临时抽风或改版）：点这里直接去源站看看。", tried[0])];
}

async function fetchHtml(url) {
    try {
        var r = await Widget.http.get(url, { headers: SUPJAV_HEADERS, allow_redirects: true });
        var html = r && r.data ? String(r.data) : "";
        if (!html) return null;
        var hasCards = /\d{3,8}\.html/.test(html);
        if (!hasCards && html.indexOf("Just a moment") !== -1) return "";
        if (!hasCards && html.indexOf("Verifying you are human") !== -1) return "";
        if (!hasCards && html.indexOf("challenge-platform") !== -1 && html.length < 20000) return "";
        if (html.length < 400) return null;
        return html;
    } catch (e) {
        return null;
    }
}

function statusItem(id, title, desc, link) {
    return {
        id: id,
        type: "url",
        title: title,
        backdropPath: BASE + "/favicon.ico",
        mediaType: "movie",
        duration: 0,
        durationText: "",
        previewUrl: "",
        videoUrl: "",
        link: link || (BASE + "/zh/"),
        description: desc,
        playerType: "system"
    };
}

function attrOf(tag, name) {
    var m = String(tag || "").match(new RegExp(name + "\\s*=\\s*[\"']([^\"']*)[\"']", "i"));
    return m ? cleanText(m[1]) : "";
}

function stripTags(v) {
    return String(v || "").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ");
}

function parseSupJavHtml(html) {
    var out = parseCards(html, true);
    if (out.length > 0) return out;
    return parseCards(html, false);
}

function parseCards(html, strict) {
    var out = [];
    var seen = {};
    var re = strict
        ? /<a[^>]+href=["'](https?:\/\/supjav\.com\/zh\/\d+\.html)["'][^>]*title=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
        : /<a\b[^>]*href=["']((?:https?:\/\/supjav\.com)?\/(?:zh\/)?\d{3,8}\.html)["'][^>]*>([\s\S]{0,2000}?)<\/a>/gi;
    var match;
    while ((match = re.exec(html)) !== null) {
        var link = strict ? match[1] : (/^https?:/i.test(match[1]) ? match[1] : BASE + match[1]);
        var inner = strict ? match[3] : match[2];
        var rawTitle = strict ? cleanText(match[2]) : cleanText(attrOf(match[0], "title") || imgAltOf(inner) || stripTags(inner));
        if (!rawTitle || seen[link]) continue;
        seen[link] = true;
        var imgTag = String(inner || "").match(/<img\b[^>]*>/i);
        var cover = imgTag ? (attrOf(imgTag[0], "data-original") || attrOf(imgTag[0], "data-src") || attrOf(imgTag[0], "data-lazy-src") || attrOf(imgTag[0], "src")) : "";
        cover = cover ? cover.split("!")[0] : "";
        out.push(cardItem(link, rawTitle, cover));
    }
    return out;
}

function imgAltOf(inner) {
    var imgTag = String(inner || "").match(/<img\b[^>]*>/i);
    return imgTag ? attrOf(imgTag[0], "alt") : "";
}

function cardItem(link, rawTitle, cover) {
    var labels = [];
    var lm = rawTitle.match(/\[([^\]]{1,24})\]/g) || [];
    lm.forEach(function (x) {
        var v = x.replace(/[\[\]]/g, "").trim();
        if (v && labels.indexOf(v) === -1) labels.push(v);
    });
    var title = cleanText(rawTitle.replace(/\[[^\]]*\]/g, " ")).replace(/\s{2,}/g, " ").trim() || rawTitle;
    var code = extractCode(rawTitle) || extractCode(link);
    var sourceUrl = link.replace(/[?&]code=[^&#]*/i, "");
    var itemLink = code ? ("https://missav.fans/cn/" + code.toLowerCase()) : sourceUrl;
    var horizontalCover = cover || (code ? ("https://fourhoi.mrstcdn.store/" + code.toLowerCase() + "/cover-t.jpg") : "");
    var desc = code ? ("番号: " + code) : "未识别番号 · 点开源站";
    if (labels.length) desc += " | " + labels.join(" / ");
    return {
        id: itemLink,
        type: "url",
        title: title || code || rawTitle,
        backdropPath: horizontalCover || (BASE + "/favicon.ico"),
        mediaType: "movie",
        duration: 0,
        durationText: "",
        previewUrl: "",
        videoUrl: "",
        link: itemLink,
        description: desc,
        playerType: "system"
    };
}

function pageUrl(path, page) {
    var p = Math.max(parseInt(page, 10) || 1, 1);
    var pa = String(path || "/zh/");
    if (p === 1) return BASE + pa;
    var qi = pa.indexOf("?");
    var q = "";
    if (qi >= 0) { q = pa.slice(qi + 1); pa = pa.slice(0, qi); }
    pa = pa.replace(/\/+$/, "");
    if (!pa) pa = "/zh";
    return BASE + pa + "/page/" + p + (q ? ("?" + q) : "");
}

function chipTarget(p) {
    var v = String(p.peopleId || p.genreId || p.tagId || p.castId || p.makerId || p.actressId || p.path || p.list || "").trim();
    if (!v) return "";
    if (/^search:/.test(v)) return v;
    if (/^https?:\/\/supjav\.com/i.test(v) || /^\/zh\//i.test(v)) return v;
    return "";
}

async function loadChipTarget(target, p) {
    var page = Math.max(parseInt((p && p.page) || "1", 10) || 1, 1);
    if (/^search:/.test(target)) {
        var kw = target.replace(/^search:/, "");
        return fetchHtmlList([pageUrl("/zh/?s=" + encodeURIComponent(kw), page)], page);
    }
    var path = target.replace(/^https?:\/\/supjav\.com/i, "");
    if (path.charAt(0) !== "/") path = "/" + path;
    var extra = "";
    var qi = path.indexOf("?");
    if (qi >= 0) {
        path.slice(qi + 1).split("&").forEach(function (kv) {
            if (/^q=/.test(kv)) extra = kv.slice(2);
        });
        path = path.slice(0, qi);
    }
    var routes = [pageUrl(path, page)];
    if (extra) routes.push(pageUrl("/zh/?s=" + extra, page));
    return fetchHtmlList(routes, page);
}

/* ==== 详情：正片流 + 团队/演员/标签 chips + 下面那些数据 ==== */

async function loadDetail(link) {
    var url = typeof link === "object" && link ? (link.link || link.id || link.url || "") : String(link || "");
    var code = extractCode(url);
    if (!code && /^https?:\/\//i.test(url)) code = await codeFromPage(url);
    var meta = await metaOf(code);
    var streamUrl = (meta && meta.videoUrl) || "";
    if (!streamUrl && code) streamUrl = await resolveViaServer(code);
    if (!streamUrl && code) streamUrl = await resolveViaClient(code);
    var videoId = code ? code.toLowerCase() : "";
    var cover = (meta && meta.cover) || (videoId ? ("https://fourhoi.mrstcdn.store/" + videoId + "/cover-t.jpg") : (BASE + "/favicon.ico"));
    var title = (meta && meta.title) || (code ? (code.toUpperCase() + " 原画播放") : "SupJav 影片");

    var peoples = [];
    var genreItems = [];
    if (meta) {
        (meta.actresses || []).forEach(function (a) {
            var nm = castName(a);
            if (!nm) return;
            var av = avatarOf(a);
            var chip = { id: chipCastPath(nm, nm), title: nm, role: "主演" };
            if (av) { chip.avatar = av; chip.image = av; }
            peoples.push(chip);
        });
        (meta.genres || []).forEach(function (g) {
            var nm = nmOf(g);
            if (nm && genreItems.length < 6) genreItems.push({ id: "search:" + nm, title: nm });
        });
        (meta.makers || []).forEach(function (m) {
            var nm = nmOf(m);
            if (nm) genreItems.push({ id: chipMakerPath(nm, nm), title: nm });
        });
    }

    var extra = await supjavRows(url, code);

    var rows = [];
    if (code) rows.push("番号: " + code.toUpperCase());
    var metaCast = meta && meta.actresses ? meta.actresses.map(castName).filter(Boolean) : [];
    var metaMakers = meta && meta.makers ? meta.makers.map(nmOf).filter(Boolean) : [];
    var metaGenres = meta && meta.genres ? meta.genres.map(nmOf).filter(Boolean) : [];
    var castAll = metaCast.length ? metaCast : extra.cast;
    var makerAll = metaMakers.length ? metaMakers : extra.makers;
    var labelAll = extra.labels.length ? extra.labels : [];
    if (castAll.length) rows.push("演员: " + castAll.join("、"));
    if (makerAll.length) rows.push("片商: " + makerAll.join("、"));
    if (metaGenres.length) rows.push("标签: " + metaGenres.slice(0, 10).join("、"));
    else if (labelAll.length) rows.push("标签: " + labelAll.join("、"));
    if (extra.date) rows.push("发行日期: " + extra.date);
    if (extra.views) rows.push("站内观看: " + extra.views);
    if (extra.durationSec) rows.push("片长: " + formatDuration(extra.durationSec));

    if (!metaCast.length && extra.cast.length) {
        extra.cast.forEach(function (n) { if (peoples.length < 8) peoples.push({ id: chipCastPath(n, n), title: n }); });
    }
    if (!metaMakers.length && extra.makers.length) {
        extra.makers.forEach(function (n) { genreItems.push({ id: chipMakerPath(n, n), title: n }); });
    }

    // 头像兜底：meta 没给头像时，手机侧用 JavDB 女优页补（最多 3 个；失败就保持纯文字 chip）
    for (var ai = 0; ai < peoples.length && ai < 3; ai++) {
        if (!peoples[ai].avatar) {
            var av3 = await resolveActressAvatar(peoples[ai].title);
            if (av3) { peoples[ai].avatar = av3; peoples[ai].image = av3; }
        }
    }

    return {
        id: url || link,
        type: "detail",
        videoUrl: streamUrl || (code ? ("https://missav.fans/cn/" + videoId) : (BASE + "/zh/")),
        title: title,
        description: rows.join("\n"),
        posterPath: cover,
        backdropPath: cover,
        coverUrl: cover,
        mediaType: "movie",
        duration: extra.durationSec || 0,
        durationText: extra.durationSec ? formatDuration(extra.durationSec) : "",
        previewUrl: "",
        playerType: "app",
        muted: false,
        volume: 1,
        link: url || link,
        customHeaders: DEFAULT_HEADERS,
        headers: DEFAULT_HEADERS,
        peoples: peoples.length ? peoples : undefined,
        genreItems: genreItems.length ? genreItems : undefined
    };
}

function avatarOf(a) {
    if (a && typeof a === "object") return String(a.avatar || a.image || "").trim();
    return "";
}

// 手机侧兜底：JavDB 女优页头像（无防盗链，覆盖率高）。失败返回空，不编造。
async function resolveActressAvatar(name) {
    if (!name) return "";
    try {
        var r = await Widget.http.get("https://javdb.com/search?q=" + encodeURIComponent(name) + "&f=actor",
            { headers: SUPJAV_HEADERS, allow_redirects: true });
        var h = r && r.data ? String(r.data) : "";
        var m = h.match(/src="(https:\/\/c0\.jdbstatic\.com\/avatars\/[^"]+)"/);
        if (m) return m[1];
    } catch (e) {}
    return "";
}

function nmOf(x) {
    var v = typeof x === "string" ? x : String((x && (x.name || x.title || x.slug)) || "");
    return cleanName(v);
}

function cleanName(v) {
    return String(v || "").replace(/\s*[（(][^）)]{1,40}[）)]\s*$/, "").trim();
}

// 演员名专用：站内偶尔把标题片段塞进演员字段，过长的或含数字的不要拿来做 chip
function castName(x) {
    var s = nmOf(x);
    if (!s || s.length > 20 || /\d/.test(s)) return "";
    return s;
}

async function metaOf(code) {
    if (!code) return null;
    try {
        var r = await Widget.http.get(META_API + encodeURIComponent(code.toLowerCase()), { headers: { "User-Agent": "Mozilla/5.0" } });
        var d = r && r.data;
        if (typeof d === "string") { try { d = JSON.parse(d); } catch (e) { d = null; } }
        if (d && (d.videoUrl || d.title)) return d;
    } catch (e) {}
    return null;
}

async function resolveViaServer(code) {
    try {
        var res = await Widget.http.get(RESOLVE_API + encodeURIComponent(code.toLowerCase()), { headers: { "User-Agent": "Mozilla/5.0" } });
        var d = res && res.data;
        if (typeof d === "string") { try { d = JSON.parse(d); } catch (e) { d = null; } }
        if (d && d.videoUrl) return d.videoUrl;
    } catch (e) {}
    return "";
}

async function resolveViaClient(code) {
    try {
        var res2 = await Widget.http.get("https://missav.fans/cn/" + encodeURIComponent(code.toLowerCase()), { headers: DEFAULT_HEADERS, allow_redirects: true });
        var h = res2 && res2.data ? String(res2.data) : "";
        var m = h.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
        if (m) return "https://surrit.mrstcdn.store/" + m[0] + "/playlist.m3u8";
    } catch (e) {}
    return "";
}

async function codeFromPage(url) {
    var html = await fetchHtml(url.replace(/[?&]code=[^&#]*/i, ""));
    if (!html) return "";
    var head = html.slice(0, 8000);
    var cands = [];
    var t = head.match(/<title[^>]*>([\s\S]{0,300}?)<\/title>/i);
    if (t) cands.push(cleanText(t[1]));
    var og = head.match(/property=["']og:title["'][^>]*content=["']([^"']{0,300})["']/i) || head.match(/content=["']([^"']{0,300})["'][^>]*property=["']og:title["']/i);
    if (og) cands.push(cleanText(og[1]));
    var h1 = head.match(/<h1[^>]*>([\s\S]{0,300}?)<\/h1>/i);
    if (h1) cands.push(cleanText(stripTags(h1[1])));
    for (var i = 0; i < cands.length; i++) {
        var c = extractCode(cands[i]);
        if (c) return c;
    }
    return "";
}

async function supjavRows(url, code) {
    var out = { cast: [], makers: [], labels: [], date: "", views: "", durationSec: 0 };
    var target = "";
    if (url && /^https?:\/\/supjav\.com/i.test(url)) target = url;
    else if (code) target = BASE + "/zh/?s=" + encodeURIComponent(code);
    if (!target) return out;
    var html = await fetchHtml(target.replace(/[?&]code=[^&#]*/i, ""));
    if (!html) return out;
    try {
        var lm = html.match(/\[([^\]\[]{1,24})\]/g) || [];
        lm.forEach(function (x) {
            var v = x.replace(/[\[\]]/g, "").trim();
            if (v && out.labels.indexOf(v) === -1 && out.labels.length < 10) out.labels.push(v);
        });
        var castRe = /href=["'][^"']*\/cast\/([^"'\/]+)["'][^>]*>([^<]{1,24})</gi;
        var mm;
        while ((mm = castRe.exec(html)) !== null) {
            var n = cleanText(mm[2]);
            if (n && out.cast.indexOf(n) === -1 && out.cast.length < 8) out.cast.push(n);
        }
        var mkRe = /href=["'][^"']*\/(?:maker|studio)\/([^"'\/]+)["'][^>]*>([^<]{1,24})</gi;
        while ((mm = mkRe.exec(html)) !== null) {
            var n2 = cleanText(mm[2]);
            if (n2 && out.makers.indexOf(n2) === -1 && out.makers.length < 6) out.makers.push(n2);
        }
        var dm = html.match(/(\d{4}[\/\-]\d{2}[\/\-]\d{2})/);
        if (dm) out.date = dm[1];
        var vm = html.match(/([\d,]{3,})\s*(?:Views|观看)/i);
        if (vm) out.views = vm[1];
        var du = html.match(/(\d{1,2}):(\d{2}):(\d{2})/);
        if (du) out.durationSec = parseInt(du[1], 10) * 3600 + parseInt(du[2], 10) * 60 + parseInt(du[3], 10);
    } catch (e) {}
    return out;
}

function chipCastPath(slug, name) {
    var s = encodeURIComponent(String(slug || name || "").trim());
    return "/zh/category/cast/" + s + "?q=" + encodeURIComponent(String(name || slug || "").trim());
}

function chipMakerPath(slug, name) {
    var s = encodeURIComponent(String(slug || name || "").trim());
    return "/zh/category/maker/" + s + "?q=" + encodeURIComponent(String(name || slug || "").trim());
}

function extractCode(u) {
    var s = String(u || "");
    var fc2 = s.match(/FC2[\s\-_]*(?:PPV)?[\s\-_]*(\d{4,9})/i);
    if (fc2) return "FC2-PPV-" + fc2[1];
    var m = s.match(/\/videos?\/([^/?#]+)/i) || s.match(/\/cn\/([^/?#]+)/i) || s.match(/\b([a-zA-Z]{2,5}[-_]?\d{2,5})\b/i);
    return m ? decodeURIComponent(m[1]).toUpperCase().replace(/-CHINESE-SUBTITLE/i, "").replace(/-UNCENSORED-LEAK/i, "").replace(/-CHINESE-SUBTITLES/i, "") : "";
}

function formatDuration(sec) {
    if (!sec || isNaN(sec)) return "";
    var H = Math.floor(sec / 3600);
    var M = Math.floor((sec % 3600) / 60);
    var S = sec % 60;
    return (H ? (H + ":") : "") + (M < 10 ? "0" + M : M) + ":" + (S < 10 ? "0" + S : S);
}

function cleanText(v) {
    return String(v || "")
        .replace(/<!\[CDATA\[/g, "")
        .replace(/\]\]>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
}

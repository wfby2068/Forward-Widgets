/**
 * Forward App Widget - 国内热门影视 (CNFlix)
 * 聚合国内热播国产剧、电影、港台剧、动漫与热门综艺
 * 纯原生直连、1080P/4K 高速秒播、免翻墙免挂梯
 */

var WidgetMetadata = {
    id: "com.waner.cnflix",
    title: "国内热门影视",
    description: "国内全网热播国产剧、最新院线电影、港剧美剧、热门综艺与动漫，纯原生高速直连",
    author: "婉儿",
    site: "https://ikunzyapi.com",
    version: "1.0.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 0,
    modules: [
        {
            title: "🔥 国产热播剧",
            description: "热播国产电视剧、古装现代、同步更新",
            requiresWebView: false,
            functionName: "loadGuoChanJu",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🎬 院线高清电影",
            description: "最新院线大片、动作喜剧、科幻剧情",
            requiresWebView: false,
            functionName: "loadDianYing",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "📺 港台海外剧集",
            description: "经典TVB港剧、台湾悬疑、韩剧美剧",
            requiresWebView: false,
            functionName: "loadGangTaiJu",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "🎪 热门王牌综艺",
            description: "内地王牌真人秀、脱口秀、访谈音乐",
            requiresWebView: false,
            functionName: "loadZongYi",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "✨ 国漫日漫新番",
            description: "热门玄幻国漫、日韩同步连载新番",
            requiresWebView: false,
            functionName: "loadDongMan",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "⚡ 爽文短剧专区",
            description: "热门逆袭短剧、霸总战神、全集畅看",
            requiresWebView: false,
            functionName: "loadDuanJu",
            cacheDuration: 0,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ],
    search: {
        title: "全网搜剧",
        functionName: "searchGlobal",
        params: [
            { name: "keyword", title: "剧名/主角", type: "input", description: "输入想看的影视剧名称" },
            { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
        ]
    }
};

var API_BASE = "https://ikunzyapi.com/api.php/provide/vod/";

function parsePlayUrl(vod_play_url) {
    if (!vod_play_url) return [];
    var episodes = [];
    var groups = vod_play_url.split("$$$");
    var targetGroup = groups[0];
    for (var i = 0; i < groups.length; i++) {
        if (groups[i].indexOf(".m3u8") !== -1) {
            targetGroup = groups[i];
            break;
        }
    }

    var epList = targetGroup.split("#");
    for (var j = 0; j < epList.length; j++) {
        var part = epList[j].trim();
        if (!part) continue;
        var segs = part.split("$");
        var epTitle = segs[0] || ("第" + (j + 1) + "集");
        var streamUrl = segs[1] || segs[0];
        if (streamUrl && streamUrl.indexOf("http") === 0) {
            episodes.push({
                title: epTitle,
                url: streamUrl
            });
        }
    }
    return episodes;
}

function fetchCategory(typeId, page) {
    var p = page || 1;
    var targetUrl = API_BASE + "?ac=detail&t=" + typeId + "&pg=" + p;
    try {
        var res = Widget.http.get(targetUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)"
            }
        });
        if (!res || !res.body) return [];
        var data = JSON.parse(res.body);
        var list = data.list || [];
        var items = [];

        for (var i = 0; i < list.length; i++) {
            var v = list[i];
            var eps = parsePlayUrl(v.vod_play_url);
            var firstPlay = eps.length > 0 ? eps[0].url : "";
            var isTv = (v.type_id === 2 || v.type_id === 23 || v.type_id === 24 || v.type_id === 25 || v.type_id === 26 || v.type_id === 27 || v.type_id === 28 || v.type_id === 29 || v.type_id === 30 || v.type_id === 35 || v.type_id === 45 || eps.length > 1);

            items.push({
                id: String(v.vod_id),
                title: v.vod_name,
                subtitle: v.vod_remarks || v.vod_sub || "",
                link: API_BASE + "?ac=detail&ids=" + v.vod_id,
                imgSrc: v.vod_pic,
                posterPath: v.vod_pic,
                backdropPath: v.vod_pic,
                type: "detail",
                mediaType: isTv ? "tv" : "movie",
                durationText: v.vod_remarks || (eps.length > 1 ? ("全 " + eps.length + " 集") : "高清原画"),
                releaseDate: v.vod_pubdate || v.vod_year || "",
                rating: v.vod_score || "",
                genres: v.vod_class ? v.vod_class.split(",") : [v.type_name]
            });
        }
        return items;
    } catch (e) {
        return [];
    }
}

function loadGuoChanJu(params) {
    var p = (params && params.page) ? params.page : 1;
    return fetchCategory(23, p); // 23 国产剧
}

function loadDianYing(params) {
    var p = (params && params.page) ? params.page : 1;
    return fetchCategory(1, p); // 1 电影
}

function loadGangTaiJu(params) {
    var p = (params && params.page) ? params.page : 1;
    return fetchCategory(24, p); // 24 香港剧
}

function loadZongYi(params) {
    var p = (params && params.page) ? params.page : 1;
    return fetchCategory(31, p); // 31 大陆综艺
}

function loadDongMan(params) {
    var p = (params && params.page) ? params.page : 1;
    return fetchCategory(35, p); // 35 国产动漫
}

function loadDuanJu(params) {
    var p = (params && params.page) ? params.page : 1;
    return fetchCategory(45, p); // 45 爽文短剧
}

function searchGlobal(params) {
    var kw = (params && (params.keyword || params.q || params.wd)) ? (params.keyword || params.q || params.wd) : "";
    var p = (params && params.page) ? params.page : 1;
    if (!kw || !kw.trim()) {
        return fetchCategory(23, 1);
    }

    var targetUrl = API_BASE + "?ac=detail&wd=" + encodeURIComponent(kw.trim()) + "&pg=" + p;
    try {
        var res = Widget.http.get(targetUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)"
            }
        });
        if (!res || !res.body) return [];
        var data = JSON.parse(res.body);
        var list = data.list || [];
        var items = [];

        for (var i = 0; i < list.length; i++) {
            var v = list[i];
            var eps = parsePlayUrl(v.vod_play_url);
            var isTv = (eps.length > 1 || v.type_name.indexOf("剧") !== -1 || v.type_name.indexOf("动漫") !== -1);

            items.push({
                id: String(v.vod_id),
                title: v.vod_name,
                subtitle: v.vod_remarks || v.vod_sub || "",
                link: API_BASE + "?ac=detail&ids=" + v.vod_id,
                imgSrc: v.vod_pic,
                posterPath: v.vod_pic,
                backdropPath: v.vod_pic,
                type: "detail",
                mediaType: isTv ? "tv" : "movie",
                durationText: v.vod_remarks || (eps.length > 1 ? ("全 " + eps.length + " 集") : "高清"),
                releaseDate: v.vod_pubdate || v.vod_year || "",
                rating: v.vod_score || "",
                genres: v.vod_class ? v.vod_class.split(",") : [v.type_name]
            });
        }
        return items;
    } catch (e) {
        return [];
    }
}

function loadDetail(link) {
    if (!link) return { title: "未知剧集", type: "detail" };
    try {
        var res = Widget.http.get(link, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)"
            }
        });
        if (!res || !res.body) return { title: "加载失败", type: "detail" };
        var data = JSON.parse(res.body);
        var v = (data.list && data.list.length > 0) ? data.list[0] : null;
        if (!v) return { title: "剧集未找到", type: "detail" };

        var eps = parsePlayUrl(v.vod_play_url);
        var isTv = (eps.length > 1 || (v.type_name && (v.type_name.indexOf("剧") !== -1 || v.type_name.indexOf("动漫") !== -1)));

        var episodeItems = [];
        var childItems = [];
        for (var i = 0; i < eps.length; i++) {
            var item = {
                id: String(v.vod_id) + "_ep_" + (i + 1),
                title: eps[i].title,
                episode: i + 1,
                videoUrl: eps[i].url,
                mediaType: "tv",
                playerType: "app",
                headers: {
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)"
                }
            };
            episodeItems.push(item);
            childItems.push(item);
        }

        var firstVideo = eps.length > 0 ? eps[0].url : "";

        return {
            id: String(v.vod_id),
            title: v.vod_name,
            originalTitle: v.vod_sub || v.vod_name,
            description: (v.vod_content || "").replace(/<[^>]+>/g, "").trim(),
            posterPath: v.vod_pic,
            backdropPath: v.vod_pic,
            imgSrc: v.vod_pic,
            type: "detail",
            mediaType: isTv ? "tv" : "movie",
            playerType: "app",
            videoUrl: firstVideo,
            durationText: v.vod_remarks || (eps.length > 1 ? ("全 " + eps.length + " 集") : "高清"),
            releaseDate: v.vod_pubdate || v.vod_year || "",
            rating: v.vod_score || "",
            genres: v.vod_class ? v.vod_class.split(",") : [v.type_name],
            episode: eps.length,
            episodes: eps.length,
            episodeItems: episodeItems,
            childItems: childItems,
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)"
            }
        };
    } catch (e) {
        return { title: "解析异常: " + e.message, type: "detail" };
    }
}

var WidgetMetadata = {
    id: "ti.bemarkt.awjq.v100",
    title: "暗网禁区",
    description: "暗网禁区 (AWJQ) 偷拍破解·明星黑料·乱伦揭秘·极速直连播放",
    author: "婉儿",
    site: "https://awjq.cc",
    version: "1.0.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 0,
    modules: [
        {
            title: "暗网原创",
            description: "千位乱伦大神的原创精品",
            requiresWebView: false,
            functionName: "loadTopic54",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "偷拍摄像破解",
            description: "偷拍和摄像破解真实事件",
            requiresWebView: false,
            functionName: "loadTopic49",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "破处回忆",
            description: "破处初体验视频分享",
            requiresWebView: false,
            functionName: "loadTopic48",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "明星大咖黑料",
            description: "最新流出实时明星大咖内幕",
            requiresWebView: false,
            functionName: "loadTopic52",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "熟女韵味",
            description: "极品少妇与熟女私拍",
            requiresWebView: false,
            functionName: "loadTopic55",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "自拍分享",
            description: "精选情侣与单人自拍视频",
            requiresWebView: false,
            functionName: "loadTopic56",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "乱伦换妻",
            description: "真实换妻与乱伦实录",
            requiresWebView: false,
            functionName: "loadTopic57",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "SM分享",
            description: "重口与主奴极度服从展示",
            requiresWebView: false,
            functionName: "loadTopic45",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "暗网杂谈",
            description: "百家乱杂精品综合",
            requiresWebView: false,
            functionName: "loadTopic50",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "园区揭秘",
            description: "东南亚电诈与黑暗园区揭秘",
            requiresWebView: false,
            functionName: "loadTopic92",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "缅北揭秘",
            description: "缅北内幕与残酷实纪",
            requiresWebView: false,
            functionName: "loadTopic94",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        },
        {
            title: "搜索",
            description: "全站视频关键字搜索",
            requiresWebView: false,
            functionName: "searchVideos",
            cacheDuration: 0,
            params: [
                { name: "keyword", title: "关键字", type: "input", description: "搜索关键字", value: "" },
                { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
            ]
        }
    ]
};

const API_BASE = "https://antigravity.6106730.xyz/api";

function formatDuration(sec) {
    if (!sec || isNaN(sec)) return "";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

async function fetchTopicVideos(topicId, page) {
    const p = Math.max(parseInt(page, 10) || 1, 1);
    const url = `${API_BASE}/awjq_list?topic_id=${topicId}&cate=video&page=${p}&limit=20`;
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        const list = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        if (!Array.isArray(list)) return [];

        return list.map(item => {
            const cover = item.cover || "";
            const vUrlParam = item.videoUrl ? `&video_url=${encodeURIComponent(item.videoUrl)}` : '';
            const fullLink = `${API_BASE}/awjq_detail?id=${item.id}${vUrlParam}`;
            return {
                id: fullLink,
                type: "url",
                title: item.title,
                imgSrc: cover,
                posterPath: cover,
                backdropPath: cover,
                coverUrl: cover,
                mediaType: "movie",
                duration: item.duration || 0,
                durationText: formatDuration(item.duration),
                releaseDate: item.created_at || "",
                link: fullLink,
                description: item.content || ("暗网禁区 · " + item.title),
                playerType: "app"
            };
        });
    } catch (e) {
        console.error("fetchTopicVideos error:", e);
        return [];
    }
}

async function loadTopic54(params) {
    return await fetchTopicVideos(54, params && params.page);
}

async function loadTopic49(params) {
    return await fetchTopicVideos(49, params && params.page);
}

async function loadTopic48(params) {
    return await fetchTopicVideos(48, params && params.page);
}

async function loadTopic52(params) {
    return await fetchTopicVideos(52, params && params.page);
}

async function loadTopic55(params) {
    return await fetchTopicVideos(55, params && params.page);
}

async function loadTopic56(params) {
    return await fetchTopicVideos(56, params && params.page);
}

async function loadTopic57(params) {
    return await fetchTopicVideos(57, params && params.page);
}

async function loadTopic45(params) {
    return await fetchTopicVideos(45, params && params.page);
}

async function loadTopic50(params) {
    return await fetchTopicVideos(50, params && params.page);
}

async function loadTopic92(params) {
    return await fetchTopicVideos(92, params && params.page);
}

async function loadTopic94(params) {
    return await fetchTopicVideos(94, params && params.page);
}

async function searchVideos(params) {
    const keyword = ((params && params.keyword) || "").trim();
    const page = Math.max(parseInt(params && params.page, 10) || 1, 1);
    if (!keyword) return [];

    const url = `${API_BASE}/awjq_search?word=${encodeURIComponent(keyword)}&page=${page}&limit=20`;
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        const list = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        if (!Array.isArray(list)) return [];

        return list.map(item => {
            const cover = item.cover || "";
            const vUrlParam = item.videoUrl ? `&video_url=${encodeURIComponent(item.videoUrl)}` : '';
            const fullLink = `${API_BASE}/awjq_detail?id=${item.id}${vUrlParam}`;
            return {
                id: fullLink,
                type: "url",
                title: item.title,
                imgSrc: cover,
                posterPath: cover,
                backdropPath: cover,
                coverUrl: cover,
                mediaType: "movie",
                duration: item.duration || 0,
                durationText: formatDuration(item.duration),
                releaseDate: "",
                link: fullLink,
                description: item.content || ("暗网禁区 · " + item.title),
                playerType: "app"
            };
        });
    } catch (e) {
        console.error("searchVideos error:", e);
        return [];
    }
}

async function loadDetail(link) {
    const url = typeof link === "object" && link ? (link.link || link.id || link.url) : String(link || "");
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        const detail = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

        const videoUrl = detail.videoUrl;
        if (!videoUrl) {
            throw new Error("视频链接未就绪");
        }

        const cover = detail.cover || "";
        return {
            id: url,
            type: "detail",
            title: detail.title,
            description: detail.content || "",
            intro: detail.content || "",
            posterPath: cover,
            backdropPath: cover,
            imgSrc: cover,
            coverUrl: cover,
            videoUrl: videoUrl,
            mediaType: "movie",
            duration: detail.duration || 0,
            durationText: formatDuration(detail.duration),
            playerType: "app",
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            },
            link: url
        };
    } catch (e) {
        console.error("loadDetail error:", e);
        throw e;
    }
}

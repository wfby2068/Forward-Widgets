// ==ForwardWidget==
// @name         暗网禁区
// @version      1.0.0
// @description  暗网禁区 (AWJQ) 最硬核破解泄密基地全模块视频流解析
// @author       婉儿
// @type         video
// @status       active
// ==/ForwardWidget==

const API_BASE = "https://antigravity.6106730.xyz/api";

const TOPIC_PRESETS = [
    { title: "暗网原创", key: "54" },
    { title: "偷拍摄像破解", key: "49" },
    { title: "破处回忆", key: "48" },
    { title: "明星大咖黑料", key: "52" },
    { title: "熟女韵味", key: "55" },
    { title: "自拍分享", key: "56" },
    { title: "暗网杂谈", key: "50" },
    { title: "乱伦换妻", key: "57" },
    { title: "SM分享", key: "45" },
    { title: "园区揭秘", key: "92" },
    { title: "缅北揭秘", key: "94" }
];

const SORT_OPTIONS = [
    { title: "视频专区", key: "video" },
    { title: "最新发布", key: "new" },
    { title: "热门榜单", key: "hot" },
    { title: "精选推荐", key: "choice" }
];

Widget.prototype.explore = async function() {
    return {
        filterOptions: [
            {
                title: "板块分类",
                key: "topic",
                items: TOPIC_PRESETS
            },
            {
                title: "排序筛选",
                key: "sort",
                items: SORT_OPTIONS
            }
        ]
    };
};

Widget.prototype.loadList = async function(params = {}) {
    const page = params.page || 1;
    const filter = params.filter || {};
    const topicId = filter.topic || "54";
    const sort = filter.sort || "video";

    const url = `${API_BASE}/awjq_list?topic_id=${encodeURIComponent(topicId)}&cate=${encodeURIComponent(sort)}&page=${page}&limit=20`;
    const resp = await Widget.http.get(url);
    if (!resp || resp.status !== 200 || !resp.data) {
        return { items: [], hasMore: false };
    }

    let list = [];
    try {
        list = typeof resp.data === 'string' ? JSON.parse(resp.data) : resp.data;
    } catch (e) {
        list = [];
    }

    const items = list.map(item => {
        let durationStr = "";
        if (item.duration) {
            const m = Math.floor(item.duration / 60);
            const s = item.duration % 60;
            durationStr = `${m}:${s < 10 ? '0' : ''}${s}`;
        }
        return {
            id: String(item.id),
            title: item.title,
            cover: item.cover,
            duration: durationStr,
            badge: item.like_num ? `👍 ${item.like_num}` : undefined,
            link: `awjq://${item.id}`
        };
    });

    return {
        items: items,
        hasMore: items.length >= 20
    };
};

Widget.prototype.search = async function(params = {}) {
    const keyword = (params.keyword || "").trim();
    const page = params.page || 1;
    if (!keyword) return { items: [], hasMore: false };

    const url = `${API_BASE}/awjq_search?word=${encodeURIComponent(keyword)}&page=${page}&limit=20`;
    const resp = await Widget.http.get(url);
    if (!resp || resp.status !== 200 || !resp.data) {
        return { items: [], hasMore: false };
    }

    let list = [];
    try {
        list = typeof resp.data === 'string' ? JSON.parse(resp.data) : resp.data;
    } catch (e) {
        list = [];
    }

    const items = list.map(item => {
        let durationStr = "";
        if (item.duration) {
            const m = Math.floor(item.duration / 60);
            const s = item.duration % 60;
            durationStr = `${m}:${s < 10 ? '0' : ''}${s}`;
        }
        return {
            id: String(item.id),
            title: item.title,
            cover: item.cover,
            duration: durationStr,
            badge: item.like_num ? `👍 ${item.like_num}` : undefined,
            link: `awjq://${item.id}`
        };
    });

    return {
        items: items,
        hasMore: items.length >= 20
    };
};

Widget.prototype.loadDetail = async function(link) {
    const id = link.replace("awjq://", "").replace(/[^0-9]/g, "");
    if (!id) throw new Error("无效的视频 ID");

    const url = `${API_BASE}/awjq_detail?id=${id}`;
    const resp = await Widget.http.get(url);
    if (!resp || resp.status !== 200 || !resp.data) {
        throw new Error("无法获取视频详情");
    }

    let detail = {};
    try {
        detail = typeof resp.data === 'string' ? JSON.parse(resp.data) : resp.data;
    } catch (e) {
        throw new Error("解析详情失败");
    }

    const videoUrl = detail.videoUrl;
    if (!videoUrl) {
        throw new Error("该帖子暂未包含可播放视频流");
    }

    return {
        type: "detail",
        title: detail.title,
        cover: detail.cover,
        intro: detail.content || "",
        videoUrl: videoUrl,
        playerType: "app",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
        }
    };
};

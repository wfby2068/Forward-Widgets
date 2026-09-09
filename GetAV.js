var WidgetMetadata = {
  id: "ti.bemarkt.getav",
  title: "GetAV",
  description: "获取 GetAV 影视推荐 (婉儿定制版)",
  author: "婉儿 (Waner)",
  site: "https://getav.net/zh",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 300,
  modules: [
    {
      title: "4K 热门",
      description: "浏览 GetAV 4K 高清影片，按人气排序",
      requiresWebView: true,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://getav.net/zh/4k?sort=popular&page=1"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "最新更新",
      description: "浏览最新更新视频",
      requiresWebView: true,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://getav.net/zh/new"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "热门排行",
      description: "浏览热门精选视频",
      requiresWebView: true,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://getav.net/zh/popular"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "中文字幕",
      description: "中文字幕精选专区",
      requiresWebView: true,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://getav.net/zh/subtitled"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      title: "无码破解",
      description: "无码流出与破解专区",
      requiresWebView: true,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://getav.net/zh/uncensored"
        },
        { name: "page", title: "页码", type: "page", value: "1" }
      ]
    }
  ]
};

const GETAV_BASE_URL = "https://getav.net";
const GETAV_LOG_PREFIX = "ForwardWidget: GetAV -";

async function loadPage(params = {}) {
  const baseUrl = params.url || "https://getav.net/zh/new";
  const page = parseInt(params.page, 10) || 1;
  let url = baseUrl;
  if (page > 1) {
    url += (url.includes("?") ? "&" : "?") + `page=${page}`;
  }

  try {
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        "Referer": "https://getav.net/zh",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
      },
      allow_redirects: true
    });

    if (!response || !response.data) {
      return [];
    }

    const $ = Widget.html.load(response.data);
    const videoItems = [];

    // 解析视频卡片 (适配常见现代化 JAV 站结构)
    $("div.video-card, div.thumbnail, a[href*='/zh/video/'], a[href*='/v/'], div.item").each((index, el) => {
      const $el = $(el);
      let link = $el.is("a") ? $el.attr("href") : ($el.find("a").first().attr("href") || "");
      if (!link) return;

      if (!link.startsWith("http")) {
        link = link.startsWith("//") ? `https:${link}` : `${GETAV_BASE_URL}${link.startsWith("/") ? "" : "/"}${link}`;
      }

      const $img = $el.find("img").first();
      const imgSrc = $img.attr("data-src") || $img.attr("src") || "";
      if (imgSrc.includes("data:image")) return;

      let title = $el.find(".title, h2, h3, [class*='title']").first().text().trim() || $img.attr("alt") || $el.attr("title") || "";
      if (!title) title = "未知番号";

      // 提取时长
      let durationText = "";
      const $dur = $el.find(".duration, span[class*='duration'], span[class*='bottom-1'], span[class*='time']").first();
      if ($dur.length) {
        const rawDur = $dur.text().trim();
        if (/\d{1,2}:\d{2}(?::\d{2})?/.test(rawDur)) {
          durationText = rawDur;
        }
      }

      videoItems.push({
        id: `${index}|${link}`,
        type: "url",
        title: title,
        imgSrc: imgSrc,
        backdropPath: imgSrc,
        mediaType: "movie",
        link: link,
        releaseDate: durationText,
        durationText: durationText,
        description: durationText ? `时长: ${durationText}` : ""
      });
    });

    return videoItems;
  } catch (error) {
    console.error(`${GETAV_LOG_PREFIX} 获取列表失败: ${error.message}`);
    return [];
  }
}

async function loadDetail(link) {
  try {
    const response = await Widget.http.get(link, {
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        "Referer": "https://getav.net/zh",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      },
      allow_redirects: true
    });

    if (!response || !response.data) {
      return { id: link, type: "url", videoUrl: link, title: "播放", link: link };
    }

    const $ = Widget.html.load(response.data);
    const html = response.data;

    let title = $('meta[property="og:title"]').attr("content") || $("h1").first().text().trim() || "视频播放";
    let poster = $('meta[property="og:image"]').attr("content") || "";

    // 尝试寻找 HLS / m3u8 播放源
    let videoUrl = "";
    const m3u8Match = html.match(/['"](https?:\/\/[^'"\s]+\.m3u8[^'"\s]*)['"]/);
    if (m3u8Match && m3u8Match[1]) {
      videoUrl = m3u8Match[1];
    }

    if (!videoUrl) {
      const src = $("video source[src*='.m3u8']").attr("src") || $("video").attr("src");
      if (src) videoUrl = src;
    }

    return {
      id: link,
      type: "url",
      videoUrl: videoUrl || link,
      title: title,
      imgSrc: poster,
      backdropPath: poster,
      mediaType: "movie",
      link: link,
      customHeaders: {
        "Referer": "https://getav.net/",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15"
      }
    };
  } catch (error) {
    return { id: link, type: "url", videoUrl: link, title: "播放", link: link };
  }
}

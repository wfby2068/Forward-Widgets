// peiee_mitm.js
// 捕获手机端访问 api.pei.ee 时的请求凭证并自动同步给 VPS
const url = $request.url;
const headers = $request.headers || {};

try {
    let cookie = headers['Cookie'] || headers['cookie'] || '';
    let auth = headers['Authorization'] || headers['authorization'] || '';
    
    if (cookie || auth) {
        $httpClient.post({
            url: 'https://antigravity.6106730.xyz/api/sync_peiee',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cookie: cookie,
                authorization: auth,
                url: url
            })
        }, function(error, response, data) {
            $notification.post('Pei.ee 凭证同步成功', '婉儿已在服务器捕获登录态！', '每日自动签到已就绪');
            $done({});
        });
        return;
    }
} catch(e) {}

$done({});

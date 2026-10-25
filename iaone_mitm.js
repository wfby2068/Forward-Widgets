// IA ONE (Signalist) Pro/Plus Unlock Module for Shadowrocket / Surge / QX
// Target Domains: iaone.app, cn.iaone.app

const url = $request.url;
let body = $response.body;

if (url.includes("/api/v1/me/subscription")) {
    try {
        let obj = JSON.parse(body || "{}");
        obj.plan = "plus";
        obj.limit = 9999;
        obj.isPlus = true;
        obj.features = ["iphone_duo", "unlimited_watchlist", "integrations", "restock_alerts"];
        body = JSON.stringify(obj);
    } catch (e) {
        body = JSON.stringify({
            plan: "plus",
            limit: 9999,
            isPlus: true,
            status: "active"
        });
    }
    $done({ body });
} else if (url.includes("/api/v1/device-session")) {
    // If server returned 403 / 400 with PLUS_PLAN_REQUIRED, intercept and succeed
    try {
        let obj = JSON.parse(body || "{}");
        if (obj.code === "PLUS_PLAN_REQUIRED" || obj.code === "PLAN_LIMIT_REACHED" || obj.error) {
            // Replace with mock success session
            body = JSON.stringify({
                status: "success",
                deviceId: "plus_unlocked_device",
                plan: "plus"
            });
            $done({ status: 200, body });
        } else {
            $done({ body });
        }
    } catch (e) {
        $done({ body });
    }
} else {
    $done({ body });
}

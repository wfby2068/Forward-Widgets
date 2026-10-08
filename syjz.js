var body = $response.body;
var url = $request.url;

try {
  if (body) {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      obj.data.is_buy = 1;
      obj.data.vip = {
        "isvip": 1,
        "status": 1,
        "buy_status": 1,
        "pre_status": 1,
        "auto_buy": 1,
        "days": 99999,
        "finish_date": "2099-12-31 23:59:59",
        "finish_date_ios": "2099.12.31",
        "id": 901828
      };
      if (obj.data.offcial_vip) {
        obj.data.offcial_vip = {
          "days": 99999,
          "finish_date_ios": "2099-12-31",
          "auto_buy": 1
        };
      }
      body = JSON.stringify(obj);
    }
  }
} catch (e) {}

$done({ body });

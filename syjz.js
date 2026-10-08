/*
 鲨鱼记账 永久VIP & 搜索解锁
*/

try {
  let body = $response.body;
  if (body) {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      obj.data.is_buy = 1;
      obj.data.vip = {
        "isvip": 1,
        "days": 99999,
        "finish_date_ios": "2099-12-31"
      };
      if (obj.data.offcial_vip) {
        obj.data.offcial_vip.days = 99999;
        obj.data.offcial_vip.finish_date_ios = "2099-12-31";
        obj.data.offcial_vip.auto_buy = 1;
      }
      body = JSON.stringify(obj);
    }
  }
  $done({ body });
} catch (e) {
  $done({});
}

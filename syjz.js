var body = $response.body;
var url = $request.url;

try {
  if (body) {
    let obj = JSON.parse(body);
    
    // 1. 全局注入所有可能的 VIP / 买断字段
    if (obj.data) {
      obj.data.is_buy = 1;
      obj.data.is_vip = 1;
      obj.data.isvip = 1;
      obj.data.status = 1;
      obj.data.buy_status = 1;
      obj.data.pre_status = 1;
      obj.data.auto_buy = 1;
      obj.data.days = 99999;
      obj.data.finish_date = "2099-12-31 23:59:59";
      obj.data.finish_date_ios = "2099.12.31";

      // 针对 pro/cfg/ 专门处理
      if (url.indexOf("gain/grant/pro/cfg") !== -1) {
        obj.data.is_active = 1;
        obj.data.days = 99999;
        if (Array.isArray(obj.data.pro_cfg)) {
          obj.data.pro_cfg.forEach(item => {
            item.is_active = 1;
            item.days = 99999;
          });
        }
      }

      // 针对常规 vip 结构
      obj.data.vip = {
        "isvip": 1,
        "is_vip": 1,
        "status": 1,
        "buy_status": 1,
        "pre_status": 1,
        "auto_buy": 1,
        "days": 99999,
        "finish_date": "2099-12-31 23:59:59",
        "finish_date_ios": "2099.12.31",
        "id": 901828
      };
      
      obj.data.offcial_vip = {
        "days": 99999,
        "finish_date_ios": "2099-12-31",
        "auto_buy": 1
      };
    }
    
    body = JSON.stringify(obj);
  }
} catch (e) {}

$done({ body });

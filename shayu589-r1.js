// Shayu 5.89 r1. Local response adapter; no telemetry, payments or account changes.
(function () {
  var original = $response.body;
  var result = {};
  function object(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }
  try {
    var url = String($request.url || '');
    var vip = /^https:\/\/api\.shayujizhang\.com\/account\/grant\/vip\/detail\/(?:\?|$)/.test(url);
    var config = /^https:\/\/api\.shayujizhang\.com\/gain\/grant\/pro\/cfg\/(?:\?|$)/.test(url);
    var status = String($response.status === undefined ? 200 : $response.status);
    if (!(vip || config) || !/^(?:2\d\d|HTTP\/\S+ 2\d\d(?:\s|$))/.test(status)) { $done({}); return; }
    var data = JSON.parse(original);
    if (!object(data) || !(data.code === 0 || data.code === '0') || !object(data.data)) { $done({}); return; }
    var changed = false;
    if (vip) {
      var membership = object(data.data.offcial_vip) ? data.data.offcial_vip : {};
      membership.days = 99999;
      membership.finish_date_ios = '2099-12-31';
      // Preserve subscription/renewal flags; this script does not purchase or renew.
      data.data.offcial_vip = membership;
      changed = true;
    } else if (object(data.data.sync_data) && Object.prototype.hasOwnProperty.call(data.data.sync_data, '1012')) {
      // SKAPIConfig maps API 1012 to membership. Different revision requests fresh detail.
      data.data.sync_data['1012'] = 'local-shayu-589-r1';
      changed = true;
    }
    if (changed) result.body = JSON.stringify(data);
  } catch (_) { /* Invalid or unknown responses pass through unchanged. */ }
  $done(result);
}());

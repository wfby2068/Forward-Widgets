/***********************************************
App Name: AsylumTracker Pro Unlocker for Quantumult X
***********************************************/

let body = $response.body;
try {
    let obj = JSON.parse(body);
    
    function patchObject(o) {
        if (!o || typeof o !== 'object') return;
        for (let key in o) {
            if (Object.prototype.hasOwnProperty.call(o, key)) {
                let val = o[key];
                if (typeof val === 'string') {
                    if (key.toLowerCase().includes('tier') || key.toLowerCase().includes('plan')) {
                        o[key] = 'pro';
                    }
                } else if (typeof val === 'boolean') {
                    if (key.toLowerCase().includes('pro') || key.toLowerCase().includes('premium') || key.toLowerCase().includes('subscrib') || key.toLowerCase().includes('lock')) {
                        o[key] = true;
                    }
                } else if (typeof val === 'object' && val !== null) {
                    patchObject(val);
                }
            }
        }
    }

    if (Array.isArray(obj)) {
        obj.forEach(item => patchObject(item));
    } else {
        patchObject(obj);
    }

    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        obj.tier = 'pro';
        obj.isPro = true;
        obj.isPremium = true;
        obj.subscriptionTier = 'pro';
    }

    body = JSON.stringify(obj);
} catch (e) {}

$done({ body });

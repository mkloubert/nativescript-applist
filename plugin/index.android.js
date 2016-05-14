// The MIT License (MIT)
// 
// Copyright (c) Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var app = require("application");
var androidApp = app.android;
var androidAppCtx = androidApp.context;


// getInstalledApps()
function getInstalledApps(callback, cfg) {
    if (!callback) {
        return;
    }
    
    if (!cfg) {
        cfg = {};
    }
    
    var iconFormat = android.graphics.Bitmap.CompressFormat.PNG;
    var iconMime = 'image/png';
    var iconQuality = 100;
    if (cfg.icon) {
        switch (cfg.icon.format) {
            case 1:
               iconFormat = android.graphics.Bitmap.CompressFormat.JPEG;
               iconMime = 'image/png';
               break;
        }
        
        if (cfg.icon.quality) {
            iconQuality = cfg.iconQuality;
        }
    }

    var pm = androidAppCtx.getPackageManager();
    
    var apps = [];
    
    var packages = pm.getInstalledPackages(0);
    for (var i = 0; i < packages.size(); i++) {
        var p = packages.get(i);
        
        var a = {
            displayName: pm.getApplicationLabel(p.applicationInfo).toString(),
            name: p.packageName,
            version: {
                code: p.versionCode,
                name: p.versionName
            }    
        };
        
        if (cfg.withIcons) {
            a.icon = null;
            
            try {
                var logo = pm.getApplicationLogo(p.applicationInfo);
                if (logo != null) {
                    var bitmap = logo.getBitmap();
                    try {
                        if (bitmap != null) {
                            var stream = new java.io.ByteArrayOutputStream();
                            try {
                                bitmap.compress(iconFormat, iconQuality, stream);
                                
                                a.icon = "data:" + iconMime + ";base64," + android.util.Base64.encodeToString(stream.toByteArray(),
                                                                                                              android.util.Base64.DEFAULT);
                            }
                            catch (e) {
                                // ignore
                            }
                            finally {
                                stream.close();
                            }
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    finally {
                        if (bitmap != null) {
                            bitmap.recycle();
                        }
                    }
                }
            }
            catch (e) {
                // ignore
            }
        }
        
        apps.push(a);
    }
    
    callback(apps);
};
exports.getInstalledApps = getInstalledApps;

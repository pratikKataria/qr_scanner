const config = require('../config');

exports.handleAppRoute = (req, res) => {
    const mosqueId = req.query.mosque_id;

    // Use Custom URL Scheme for IP testing instead of App Links
    let appIntentUrl = `${config.customScheme}://app`;
    let webStoreUrl = config.playStoreUrl; 
    
    if (mosqueId) {
        appIntentUrl += `?mosque_id=${encodeURIComponent(mosqueId)}`;
        const referrerPayload = encodeURIComponent(`mosque_id=${mosqueId}`);
        webStoreUrl += `&referrer=${referrerPayload}`;
    }
    
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting to Sunni Aiemma Council...</title>
        <script>
            window.onload = function() {
                // Attempt to launch the app via Custom URL Scheme
                window.location.href = "${appIntentUrl}";
                
                // Fallback to Play Store if the custom scheme fails to find the app
                setTimeout(function() {
                    window.location.href = "${webStoreUrl}";
                }, 2500);
            };
        </script>
        <style>
            body { font-family: -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f9; }
            .loader { text-align: center; padding: 20px; border-radius: 8px; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
            a { color: #01875f; text-decoration: none; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="loader">
            <h2>Opening Mosque Details...</h2>
            <p>If you are not redirected, <a href="${webStoreUrl}">click here to open Play Store</a>.</p>
        </div>
    </body>
    </html>
    `;
    
    res.send(htmlContent);
};
const config = require('../config');

exports.handleAppRoute = (req, res) => {
    // Use Custom URL Scheme for IP testing instead of App Links
    const appIntentUrl = `${config.customScheme}://app`;
    const webStoreUrl = config.playStoreUrl;

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting...</title>
        <script>
            window.onload = function () {
                // Attempt to launch the app via Custom URL Scheme
                window.location.href = "${appIntentUrl}";

                // Fallback to the store if the custom scheme fails to open the app
                setTimeout(function () {
                    window.location.href = "${webStoreUrl}";
                }, 2500);
            };
        </script>
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                background: linear-gradient(135deg, #f4f6fb 0%, #e9edf5 100%);
                color: #1f2937;
                padding: 24px;
            }

            .card {
                text-align: center;
                padding: 40px 32px;
                border-radius: 16px;
                background: #ffffff;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                max-width: 360px;
                width: 100%;
            }

            .spinner {
                width: 40px;
                height: 40px;
                margin: 0 auto 20px;
                border: 3px solid #e5e7eb;
                border-top-color: #4f46e5;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            h2 {
                margin: 0 0 8px;
                font-size: 1.25rem;
                font-weight: 600;
            }

            p {
                margin: 0;
                font-size: 0.95rem;
                color: #6b7280;
                line-height: 1.5;
            }

            a {
                color: #4f46e5;
                text-decoration: none;
                font-weight: 600;
            }

            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="spinner"></div>
            <h2>Opening the app...</h2>
            <p>
                If nothing happens automatically,
                <a href="${webStoreUrl}">tap here to continue</a>.
            </p>
        </div>
    </body>
    </html>
    `;

    res.send(htmlContent);
};
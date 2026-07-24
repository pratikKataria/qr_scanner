const qrService = require('../services/qrService');
const config = require('../config');

exports.generateQr = async (req, res) => {
    const mosqueId = req.query.mosque_id;

    // 1. Strict Input Validation
    if (!mosqueId || typeof mosqueId !== 'string') {
        console.warn(`[QR Controller] Bad Request: Missing or invalid mosque_id.`);
        return res.status(400).json({ 
            status: 'ERROR',
            message: "The 'mosque_id' query parameter is required." 
        });
    }

    try {
        // 2. Target URI Construction
        const targetUrl = `${config.baseUrl}/app?mosque_id=${encodeURIComponent(mosqueId)}`;
        
        // 3. Service Execution
        const qrBuffer = await qrService.generateQrBuffer(targetUrl);
        
        // 4. Optimized HTTP Headers
        res.setHeader('Content-Type', 'image/png');
        // Instructs browsers to cache this specific static image for 1 hour (3600 seconds)
        res.setHeader('Cache-Control', 'public, max-age=3600'); 
        
        return res.status(200).send(qrBuffer);
        
    } catch (error) {
        // 5. Contextual Error Logging for PM2 Monitoring
        console.error(`[QR Controller] Generation failed for mosque_id: ${mosqueId} | Error:`, error.message);
        
        return res.status(500).json({ 
            status: 'ERROR',
            message: "Internal server error during QR generation." 
        });
    }
};
const qrService = require('../services/qrService');
const config = require('../config');

exports.generateQr = async (req, res) => {
    try {
        const mosqueId = req.query.mosque_id;
        
        // Construct the base target URL
        let targetUrl = `${config.baseUrl}/app`;
        
        // Append the mosque_id if provided
        if (mosqueId) {
            targetUrl += `?mosque_id=${encodeURIComponent(mosqueId)}`;
        }
        
        const qrBuffer = await qrService.generateQrBuffer(targetUrl);
        
        res.setHeader('Content-Type', 'image/png');
        res.send(qrBuffer);
    } catch (error) {
        console.error("QR Generation Error:", error);
        res.status(500).json({ error: "QR Generation Failed" });
    }
};
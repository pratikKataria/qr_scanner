const QRCode = require('qrcode');

exports.generateQrBuffer = async (url) => {
    try {
        return await QRCode.toBuffer(url, {
            errorCorrectionLevel: 'H',
            margin: 4,
            width: 300
        });
    } catch (error) {
        throw new Error('Failed to generate QR Code buffer');
    }
};
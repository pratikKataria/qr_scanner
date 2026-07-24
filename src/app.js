const express = require('express');
const config = require('./config');
const assetLinksController = require('./controllers/assetLinksController');
const qrController = require('./controllers/qrController');
const routingController = require('./controllers/routingController');

const app = express();

// Request monitoring middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Register Core Routes
app.get('/.well-known/assetlinks.json', assetLinksController.getAssetLinks);
app.get('/app', routingController.handleAppRoute);
app.get('/api/v1/generate-qr', qrController.generateQr);

app.listen(config.port, config.host, () => {
    console.log(`QR Router listening on http://${config.host}:${config.port}`);
});
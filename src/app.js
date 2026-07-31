require('dotenv').config();
const express = require('express');
const config = require('./config');
const assetLinksController = require('./controllers/assetLinksController');
const routingController = require('./controllers/routingController');
const healthController = require('./controllers/healthController');

const app = express();

// Request monitoring middleware
app.use((req, res, next) => {
    // Avoid logging health checks to prevent log spam in production
    if (req.url !== '/health') {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    }
    next();
});

// Register Core Routes
app.get('/.well-known/assetlinks.json', assetLinksController.getAssetLinks);
app.get('/app', routingController.handleAppRoute);

// Register Health Route
app.get('/health', healthController.checkHealth);

app.listen(config.port, config.host, () => {
    console.log(`QR Router listening on http://${config.host}:${config.port}`);
});
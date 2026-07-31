const config = require('../config');

exports.getAssetLinks = (req, res) => {
    try {
        if (!config.appFingerprint) {
            console.error('APP_FINGERPRINT is not set — assetlinks.json will be invalid');
            return res.status(500).json({ error: 'Server misconfiguration: missing APP_FINGERPRINT' });
        }

        const payload = [{
            relation: ['delegate_permission/common.handle_all_urls'],
            target: {
                namespace: 'android_app',
                package_name: config.appNamespace,
                sha256_cert_fingerprints: [config.appFingerprint]
            }
        }];
        res.json(payload);
    } catch (error) {
        console.error('Failed to serve asset links', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {
    port: process.env.PORT || 6677,
    host: process.env.HOST || '0.0.0.0',
    appNamespace: process.env.APP_NAMESPACE || 'com.kohinoor.customerapp.kohinoor',
    customScheme: process.env.CUSTOM_SCHEME || 'kohinoor',
    appFingerprint: process.env.APP_FINGERPRINT || '',
    baseUrl: process.env.BASE_URL || 'http://13.234.168.238',
    playStoreUrl: process.env.PLAY_STORE_URL || `https://play.google.com/store/apps/details?id=com.swc.sunni_aiemma_council`
};
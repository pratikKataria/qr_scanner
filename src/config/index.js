module.exports = {
    port: process.env.PORT || 6677,
    host: process.env.HOST || '0.0.0.0',
    appNamespace: process.env.APP_NAMESPACE || 'com.swc.sunni_aiemma_council',
    customScheme: 'sunnicouncil',
    baseUrl: process.env.BASE_URL || 'http://13.234.168.238:6677',
    playStoreUrl: process.env.PLAY_STORE_URL || `https://play.google.com/store/apps/details?id=com.swc.sunni_aiemma_council`
};
module.exports = {
  apps: [{
    name: 'qr-router',
    script: './src/app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 6677,
      HOST: '127.0.0.1',
      APP_NAMESPACE: 'com.swc.sunni_aiemma_council',
      APP_FINGERPRINT: 'YOUR_ACTUAL_SHA256_FINGERPRINT',
      BASE_URL: 'https://link.yourdomain.com',
      PLAY_STORE_URL: 'https://play.google.com/store/apps/details?id=com.swc.sunni_aiemma_council'
    }
  }]
};
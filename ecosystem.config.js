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
      APP_FINGERPRINT: '91:73:06:5B:0F:C1:BE:94:4B:62:67:DF:2E:3F:63:7D:B8:DD:FD:60:CD:6E:F6:3C:53:E1:EF:54:B5:BF:BD:96',
      BASE_URL: 'https://link.yourdomain.com',
      PLAY_STORE_URL: 'https://play.google.com/store/apps/details?id=com.swc.sunni_aiemma_council'
    }
  }]
};
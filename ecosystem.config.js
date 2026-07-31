module.exports = {
  apps: [
    {
      name: 'fsl-redirect',
      script: './src/app.js',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '300M'
    }
  ]
};

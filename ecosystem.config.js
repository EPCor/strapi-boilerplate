module.exports = {
  apps: [
    {
      name: 'strap',
      script: 'server.js',
      instances: 'max',
      autorestart: true,
      max_restarts: 10,
      watch: true,
      merge_logs: true,
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};

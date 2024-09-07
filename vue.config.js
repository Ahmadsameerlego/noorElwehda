module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://64.227.132.28',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
          onProxyReq: (proxyReq, req, res) => {
            proxyReq.setHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
          }
        },
      },
    },
  };
  
module.exports = {
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: false,
    https: false,
    hot: true,
    compress: true,
    proxy: {
      '/api': {
        // target: 'http://192.168.0.16:9991/',
        target: 'http://124.71.172.144:80/', // 华为云
        // pathRewrite: {
        //   '^/api': '',
        // },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};

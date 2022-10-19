module.exports = {
  productionSourceMap: false,
  // publicPath: '/mindSpore/',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: false,
    https: false,
    hot: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.16:80/',
        // target: 'http://124.71.172.144:9010/', // 华为云
        // pathRewrite: {
        //   '^/api': '',
        // },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};

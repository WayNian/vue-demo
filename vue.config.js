module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/index.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      "/api/": {
        target: "https://www.wanandroid.com/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};

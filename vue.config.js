const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
        headers: {
          Connection: 'keep-alive'
        }
      },
    },
  },
})

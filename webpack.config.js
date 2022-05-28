var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

var VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
   mode: 'none',
  // mode: 'production',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  plugins: [ // 所有webpack  插件的配置节点
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' // 设置生成的内存页面的名称,注意如果不是index.html命名的则报错（我也不知道为啥）
    }),
    new VueLoaderPlugin()
  ],

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
      // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
      // { test: /\.scss$/, use: ['style-loader', 'css-loader','scss-loader'] }
      //{ test: /\.vue$/, use: 'vue-loader' }
      { test:/\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径 "module": "dist/vue.runtime.esm.js",
       "vue$": "vue/dist/vue.js",
       "vue-router$": "vue-router/dist/vue-router.js"
    }
  }
}

const path = require("path"); // 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
const HtmlWebPackPlugin = require('html-webpack-plugin');

const BASEPATH = __dirname
const SRCPATH = path.join(__dirname,'../example')
const NODE_ENV = process.env.NODE_ENV
const entryPath = NODE_ENV==='development'?path.join(__dirname, "../example/test.js"):path.join(__dirname, "../index.js")
module.exports = {
  // 应用入口
  entry: {
    app: entryPath, // app.js作为打包的入口
  },
  // 输出目录
  output: {
    filename: "[name].[hash].js", //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
    path: path.join(__dirname, "../build"), // 打包好之后的输出路径
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: [
          path.join(__dirname, "../node_modules"), // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ],
  },

  resolve:{
    alias:{
      "@":path.resolve(__dirname,'../src/')
    }
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,    
    host: "localhost", 
    open:true,    //自动打开页面，
    hot:true,    //开启热更新，
    compress: true, // 服务器压缩式，一般为`true`，
    inline: true, // 默认为true,在打包时会注入一段代码到最后的js中，用来监视页面的改动而自动刷新页面    
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: `${SRCPATH}/index.html`,
      filename: './index.html'
    })
  ]
};

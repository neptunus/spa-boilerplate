/*global __dirname*/
var path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "generated-app.js"
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    contentBase: __dirname,
    hot: true,
    compress: true,
    port: 9000,
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}

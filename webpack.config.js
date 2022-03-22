const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module :{
    rules:[
      {
          test: /\.(mjs|js)$/,
          exclude: /node_modules/,
          use:{
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./public/index.html"),
  })],
};
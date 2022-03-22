const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin')

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
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime']
              }
          }
      },
      {
        test: /\.css|.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns:[
        {
          from: path.resolve(__dirname, "src","assets/images"),
          to: "assets/images"
        }
      ]
    })
  ],
};
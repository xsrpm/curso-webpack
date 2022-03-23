const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool:"source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    assetModuleFilename:"assets/images/[name][ext]"
  },
  resolve: {
    extensions: [".js"],
    alias:{
      "@": path.resolve(__dirname, "src")
    }
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
     },
     {
      test: /\.png$/,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2)$/,
      type: "asset/resource",
      generator: {
        filename: "assets/fonts/[name][ext]"
      }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin(),
    new Dotenv()
  ]
};
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Dotenv = require('dotenv-webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  mode:"production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename:"assets/images/[hash][ext][query]",
    clean: true
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
        filename: "assets/fonts/[name].[contenthash].[ext]"
      }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new Dotenv()
  ],
	optimization: {
    minimize: true,
		minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ]
  }
};
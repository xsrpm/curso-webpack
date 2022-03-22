const path = require("path");

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
}
};
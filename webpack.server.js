const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require("webpack-node-externals");
// const htmlWebpack = require("html-webpack-plugin");
// const webpack = require("webpack");
const config = {
  mode:"development",
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       loader: "babel-loader",
  //       exclude: /node_modules/,
  //     },
  //   ],
  // },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);

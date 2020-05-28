const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
// const htmlWebpack = require("html-webpack-plugin");
// const webpack = require("webpack");
const config = {
  mode: "development",
  entry: {
    bundle: "../src/client/client.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
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
};

module.exports = merge(baseConfig, config);

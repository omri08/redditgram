const webpack = require("webpack");
const slsw = require("serverless-webpack");
module.exports = {
  target: "node",
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  node: false,
  optimization: {
    minimize: true,
  },
  plugins: [new webpack.IgnorePlugin(/canvas/)],
  devtool: "inline-cheap-module-source-map",
};

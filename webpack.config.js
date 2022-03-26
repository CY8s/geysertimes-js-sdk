const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist/browser"),
    filename: "index.js",
    library: {
      name: "GeyserTimes",
      type: "umd",
      export: "default",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: "es6-promise-promise",
    }),
  ],
  mode: "production",
};

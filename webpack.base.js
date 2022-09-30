const path = require("path");
const webpack = require("webpack");

const baseConfig = {
  mode: "development",
  context: __dirname,
  devtool: "eval-cheap-source-map",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              extends: path.join(__dirname, "./babel.config.js"),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  node: false,
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        ELECTRON_ENV: true,
      },
      global: "globalThis",
    }),
  ],
};

module.exports = baseConfig;

const baseConfig = require("./webpack.base");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PACKAGE = require("./package.json");
const version = PACKAGE.version;

const plugins = [...baseConfig.plugins];
plugins.push(
  new HtmlWebpackPlugin({
    filename: "./mainWindow.html",
    template: __dirname + "/src/mainWindow.html",
    inject: "body",
    chunks: ["app"],
  })
);
plugins.push(
  new HtmlWebpackPlugin({
    filename: "./addWindow.html",
    template: __dirname + "/src/addWindow.html",
    inject: "body",
    chunks: ["addOn"],
  })
);
const config = {
  ...baseConfig,
  entry: {
    version: "./src/checkVersion.ts",
    app: "./src/app.ts",
    addOn: "./src/addOn.ts",
  },
  output: {
    path: path.join(__dirname, "public", version),
    // publicPath: "http://localhost:1111/" + version + "/",
    filename: "[name].js",
  },

  plugins,

  target: "electron-renderer",
};

module.exports = config;

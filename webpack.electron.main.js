const baseConfig = require("./webpack.base");

const config = {
  ...baseConfig,
  entry: "./src/electron.ts",
  output: {
    filename: "main.js",
    sourceMapFilename: "[name].map.js",
    path: __dirname,
  },
  target: "electron-main",
};

module.exports = config;

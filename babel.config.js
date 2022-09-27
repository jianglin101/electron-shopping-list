module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { chrome: "78" },
        modules: "commonjs",
        useBuiltIns: "entry",
        corejs: "3.25.3",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
};

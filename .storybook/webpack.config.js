const path = require("path");

// see: https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default
module.exports = (baseConfig, env, defaultConfig) => ({
  ...defaultConfig,
  output: {
    ...defaultConfig.output,
    chunkFilename: "[name]_[chunkHash].js"
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.yml$/,
        use: [{ loader: "json-loader" }, { loader: "yaml-loader" }]
      }
    ]
  },
  resolve: {
    ...defaultConfig.resolve,
    modules: [
      "node_modules",
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "./")
    ],
    extensions: [".js", ".jsx", ".json"]
  }
});

const path = require("path");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "..", "src", "index.js"),
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);

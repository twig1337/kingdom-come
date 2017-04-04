const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "main.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ["babel-polyfill", "./scripts/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }, {
      test: /\.html$/,
      loader: "raw-loader"
    }]
  },
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Tether: "tether"
    })
  ]
};
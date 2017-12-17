const
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  common = require('./webpack.common.js'),
  CompressionPlugin = require('compression-webpack-plugin'),

  S3Plugin = require('webpack-s3-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new S3Plugin({
      include: /.*\.(js|html|css|map|jpg|svg|png)/,
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-west-2'
      },
      s3UploadOptions: {
        Bucket: 'kingdom-come'
      },
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
        Items: ["/*"]
      }
    })
  ]
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ImageminWebpackPlugin } = require('imagemin-webpack');
const ImageMinGifsicle = require('imagemin-gifsicle');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// WORK THROUGH THESE:
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ImageminWebpackPlugin({
      imageminOptions: {
        bail: false,
        plugins: ImageMinGifsicle({
          interlaced: true,
          optimizationLevel: 5,
        }),
      },
    }),
    new CopyWebpackPlugin([
      { from: './img/**/*.{jpg,jpeg,png,gif}', to: '' },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true,
  //     }),
  //     new OptimizeCSSAssetsPlugin({}),
  //   ],
  // },
};

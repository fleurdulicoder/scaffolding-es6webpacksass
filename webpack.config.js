const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ImageminWebpackPlugin } = require('imagemin-webpack');
const ImageMinGifsicle = require('imagemin-gifsicle');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/main.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            // options: { minimize: true },
          },
        ],
      },
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
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { config: { path: 'postcss.config.js' } },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['css', 'js', 'img'], {
    //   root: path.join(__dirname, '/dist'),
    //   exclude: ['.gitkeep'],
    //   verbose: true,
    //   dry: false,
    //   beforeEmit: true,
    // }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
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
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true,
  //     }),
  //   ],
  // },
};

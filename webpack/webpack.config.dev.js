var path = require('path')
var webpack = require('webpack')

var ROOT_PATH = path.resolve(__dirname, '../')
var APP_PATH = path.resolve(ROOT_PATH, 'src')
var ENTRY_PATH = path.resolve(ROOT_PATH,'src/index')
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist')
var PUBLIC_PATH = path.resolve(BUILD_PATH, '/static/')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    ENTRY_PATH
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: PUBLIC_PATH
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&autoprefixer!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: "style-loader!sass-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
    require('cssnext')
  ]
}

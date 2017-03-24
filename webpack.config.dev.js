const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  devtool: 'eval',
  entry: {
    app: ['./src/index.jsx'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    stats: 'errors-only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HtmlWebpackTemplate,
      links: [{
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
        integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ',
        crossorigin: 'anonymous',
      }],
      meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }],
      title: 'Demo app',
      appMountId: 'app',
      inject: false,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    ],
  },
};

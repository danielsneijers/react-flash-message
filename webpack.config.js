const { resolve } = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: './src/index.jsx',
  // devtool: 'inline-source-map',
  // devServer: {
  //   hot: true,
  //   contentBase: 'build',
  //   publicPath: '/',
  //   stats: 'errors-only',
  // },
  output: {
    path: resolve('./build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Title',
  //     template: './src/index.html',
  //     minify: { useShortDoctype: true },
  //     hash: false,
  //   }),
  // ],
  externals: {
    react: 'react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
};

module.exports = baseConfig;

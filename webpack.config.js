const debug = process.env.NODE_ENV !== 'production';
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader');
require('webpack');

module.exports = {
  context: path.join(__dirname, '/public'),
  devtool: debug ? 'source-map' : false,
  plugins: debug ? [] : [
    new UglifyJsPlugin(),
    new CheckerPlugin(),
  ],
  entry: './index.ts',
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.css', '.pug', '.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.pug$/, use: ['pug-loader'] },
      { test: /\.tsx?$/, use: ['awesome-typescript-loader'], exclude: /node_modules/ },
    ],
  },
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      })
    ],
  };
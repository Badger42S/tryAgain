const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'stories.js',
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
          {
            test: /\.(png|jpg|svg|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            }
          },
          {
            test: /\.ttf$/i,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
              publicPath: 'fonts/'
            }
          },
        ],
      },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'stories.css'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      })
    ],
  };
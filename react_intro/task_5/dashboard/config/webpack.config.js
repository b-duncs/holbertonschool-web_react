const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot: true,
    compress: true,
    port: 8564,
  },
  entry: {
    index: './src1/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks:{
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'image-webpack-loader',
          'file-loader'
        ],
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  mode: "development",
  devtool: "inline-source-map",
};

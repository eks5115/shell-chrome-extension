const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    background: './src/background.js',
    popup: './src/popup.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: './src/popup.html',
      chunks: [
        'popup'
      ]
    }),
    new CopyWebpackPlugin([
      {
        from: './src/manifest.json'
      },
      {
        from: './src/host/*',
        to: '../host/[name].[ext]'
      }
    ])
  ]
};
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public'
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          // miniCss... conflits with 'style-loader'
          //'style-loader', // ADD in DOM the tag <style>
          'css-loader' // interprets: @import, url()...
        ]
      },
    ]
  }
}
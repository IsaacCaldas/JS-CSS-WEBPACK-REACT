const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssestsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: "./public",
    port: 8080
  },
  optimization: {
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssestsPlugin({})
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          miniCssExtractPlugin.loader,
          // miniCss... conflits with 'style-loader'
          //'style-loader', // ADD in DOM the tag <style>
          'css-loader', // interprets: @import, url()...
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
         use: ['file-loader']
      }
    ]
  }
}
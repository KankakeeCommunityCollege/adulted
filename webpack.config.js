const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  //entry: path.join(__dirname, 'webpack', 'main'),
  entry: {
    'main': './assets/js/script/all.js',
    'table': './assets/js/table/table.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'assets', 'js', 'dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};

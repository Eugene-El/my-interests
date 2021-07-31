const path = require('path');

module.exports = {
  entry: {
    landing: './src/landing.ts',
    createNewDb: './src/createNewDb.ts',
    pageNotFound: './src/pageNotFound.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
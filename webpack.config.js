module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
}

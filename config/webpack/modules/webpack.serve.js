const webpack = require('webpack');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'errors-only',
    host,
    port,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
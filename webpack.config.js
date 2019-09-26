const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: `${__dirname}/server/server.js`,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'server-ssr.js',
    path: `${__dirname}/server-ssr`,
    // library: 'RecommendationsModule',
    // libraryExport: 'default',
  },
};

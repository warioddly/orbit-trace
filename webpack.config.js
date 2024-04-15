const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    library: {
        type: 'module',
    },
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './OrbitTrace.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      include: [path.resolve(__dirname, 'src')],
    }]
  },
  experiments: {
    outputModule: true,
  },
};

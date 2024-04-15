const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './OrbitTrace.js',
    library: {
      name: 'OrbitTrace',
      type: 'umd',
      umdNamedDefine: true,
    },
    libraryTarget: 'var',
  },
  resolve: {
    extensions: ['.ts', '.js', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.d\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Orbit Trace',
      template: 'index.html'
    }),
  ],
  experiments: {
    outputModule: true,
  },
  optimization: {
    minimize: false,
  },
};

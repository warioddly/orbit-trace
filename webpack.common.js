const path = require('path');

module.exports = {
  entry: {
    app: './src/app.src',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './src/app.ts',
  },
};

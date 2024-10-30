const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    }],
  },
  output: {
    path: path.resolve(__dirname, 'www/js'),
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};

const path = require('path');

const { DefinePlugin} = require('webpack');
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
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),
  ],
};

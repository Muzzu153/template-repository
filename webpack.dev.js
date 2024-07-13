import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { join } from 'path';

export default merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: join(__dirname, './src'),
      directory: join(__dirname, './dist'),
    },
  },
});

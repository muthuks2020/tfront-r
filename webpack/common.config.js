import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import merge from 'webpack-merge';
import development from './dev.config';
import production from './prod.config';
const PATHS = {
  app: path.join(__dirname, '../src'),
  prod: path.join(__dirname, '../dist')
};
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const common = {
  entry: [PATHS.app],
  output: {
    path: PATHS.prod,
    filename: 'bundle.js'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    loaders: [
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-otf'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      // ,
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=image/svg+xml'
      // },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file?name=media/[name].[ext]'
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
};
let cfg;
if (TARGET == 'start') {
  cfg = merge(development, common);
}
if (TARGET == 'build') {
  cfg = merge(production, common);
}
export default cfg;

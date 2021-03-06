var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(css|scss)$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  productionPlugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        except: ['$', 'exports', 'require'],
      },
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.react.js'],
  },
};

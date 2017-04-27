var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js', 'script-loader!foundation-sites/dist/js/foundation.min.js', './app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery'
  })],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Navigation: __dirname + '/app/components/Navigation.js',
      applicationStyles: __dirname + '/app/styles/app.scss',
      Timer: __dirname + '/app/components/Timer.js',
      Countdown: __dirname + '/app/components/Countdown.js',
      Clock: __dirname + '/app/components/Clock.js',
      CountdownForm: __dirname + '/app/components/CountdownForm.js',

    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'eval-source-map'
};

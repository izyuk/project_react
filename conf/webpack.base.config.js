import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default new Config().merge({
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/, /public/] },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader!postcss-loader!less-loader'],
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  // watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: "body"
    })
  ]
});
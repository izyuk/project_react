var express = require('express');
var path = require('path');
// import path from 'path';

const PORT = 7700;
const PUBLIC_PATH = __dirname + '/public';
const ADMIN_PATH = __dirname + '/admin';
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(PUBLIC_PATH));
  // app.use('/admin', express.static(ADMIN_PATH));
}

app.all("*", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});
// app.post("/admin", function(req, res) {
//   res.sendFile(path.resolve(ADMIN_PATH, 'index.html'));
// });


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import request from 'superagent';

const app = express();
const compiler = webpack(webpackConfig);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   next();
// });

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use(express.static('./public'));

app.get('/hello/:id', function(req, res) {
   console.log(req.params.id);
  request.get('http://localhost:8080/jersey-mybatis-mysql-demo/users/' + req.params.id)
    .end((err, data) => {
      console.log(data.body);
      res.send(data.body);
    });

  // res.send('Hello, world!');
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});
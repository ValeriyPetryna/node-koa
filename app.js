const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(views(path.join(__dirname, '/src/templates'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));

app.use(serve(require('path').join(__dirname, '/public')));

router.use('/', require('./src/routes').routes());

app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');

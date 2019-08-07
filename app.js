const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const path = require('path');
const serve = require('koa-static');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');


mongoose.connect('mongodb://localhost:27017/cat', {
  useNewUrlParser: true,
});

const app = new Koa();
const router = new Router();



app.use(views(path.join(__dirname, '/src/templates'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));



app.use(serve(require('path').join(__dirname, '/public')));

app.use(bodyParser({
   multipart: true,
  }));

router.use('/', require('./src/routes').routes());

app.use(router.routes());

const PORT = process.env.PORT || 3000;
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
     const errors = [];
     Object.keys(err.errors).forEach((key) => {
       errors.push(err.errors[key].message);
       console.log(errors)
     });
    ctx.status = 500;
    ctx.body = {
      error: true,
    };
  }
});
app.listen(PORT);
console.log('listening: ' + PORT)

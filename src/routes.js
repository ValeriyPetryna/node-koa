const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('main', ctrl.mainPage);

module.exports = router;
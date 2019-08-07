const Router = require('koa-router');
const ctrl = require('./controllers');
const val = require('./validators');

const router = new Router();

router.get('main', ctrl.mainPage);
router.get('search', ctrl.searchPage);
router.get('handler', ctrl.handlePost);
// json.users 

module.exports = router;
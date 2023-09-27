const router = require('express').Router();
const controller = require('./controllers.js');

router.get('/shop', controller.fetchData);

module.exports = router;
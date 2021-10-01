const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const bookRoutes = require('./book-now-routes');

router.use('/', homeRoutes);
router.use('/book-now', bookRoutes);
router.use('/api', apiRoutes);

module.exports = router;
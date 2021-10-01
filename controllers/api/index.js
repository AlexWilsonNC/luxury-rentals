const router = require('express').Router();
const userRoutes = require('./user-routes');
const bookingRoutes = require('./booking-routes');

router.use('/users', userRoutes);
router.use('/book-now', bookingRoutes);

module.exports = router;
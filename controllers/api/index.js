const router = require('express').Router();
const userRoutes = require('./user-routes');
const bookingRoutes = require('./booking-routes');
const locationRoutes = require('./location-routes');
const carRoutes = require('./car-routes');

router.use('/users', userRoutes);
router.use('/book-now', bookingRoutes);
router.use('/location', locationRoutes);
router.use('/car', carRoutes);

module.exports = router;
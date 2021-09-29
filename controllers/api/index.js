const router = require('express').Router();
const locationRoutes = require('./location-routes');
const carRoutes = require('./car-routes');
const userRoutes = require('./user-routes');

router.use('/location', locationRoutes);
router.use('/car', carRoutes);
router.use('/user', userRoutes);

module.exports = router;
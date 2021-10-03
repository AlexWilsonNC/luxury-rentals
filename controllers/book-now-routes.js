const router = require('express').Router();
const { Car, Location, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:city/:car', withAuth, async (req, res) => {
    try {
        const locationData = await Location.findAll();
        const cities = locationData.map((city) =>
            city.get({ plain: true })
        );

        const carData = await Car.findAll();
        const cars = carData.map((car) =>
            car.get({ plain: true })
        );

        res.render('booknow', { cities, cars, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
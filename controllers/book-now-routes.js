const router = require('express').Router();
const { Car, Location, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const carData = await Car.findAll();
        const cars = carData.map((car) =>
            car.get({ plain: true })
        );

        const locationData = await Location.findAll();
        const cities = locationData.map((city) =>
            city.get({ plain: true })
        );

        res.render('booknow', { cities, cars, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/city/:city', withAuth, async (req, res) => {
    try {
        const locationData = await Location.findAll();
        const cities = locationData.map((city) =>
            city.get({ plain: true })
        );
        
        const choiceData = await Location.findByPk(req.params.city, {
            include: [
                {
                    model: Car,
                    attributes: [
                        'id',
                        'year',
                        'make',
                        'model',
                        'price',
                        'color',
                        'image'
                    ]
                },
            ],
        });

        const cityChoice = choiceData.get({ plain: true });
        const cars = cityChoice.cars;
        res.render('booknow', { cities, cars, cityChoice, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/car/:car', withAuth, async (req, res) => {
    try {
        const carData = await Car.findAll();
        const cars = carData.map((car) =>
            car.get({ plain: true })
        );

        const locationData = await Location.findAll();
        const cities = locationData.map((city) =>
            city.get({ plain: true })
        );
        
        const choiceData = await Car.findByPk(req.params.car);

        const carChoice = choiceData.get({ plain: true });
        // const cities = carChoice.locations;
        res.render('booknow', { cities, cars, carChoice, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/choice/:city/:car', withAuth, async (req, res) => {
    try {
        const bookData = await Location.findByPk(req.params.city, {
            include: [
                {
                    model: Car,
                    attributes: [
                        'id',
                        'year',
                        'make',
                        'model',
                        'price',
                        'color',
                        'image'
                    ],
                    where: { id: req.params.car }
                },
            ],
        });

        const booking = bookData.get({ plain: true });
        res.render('booknow', { booking, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
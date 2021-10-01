const router = require('express').Router();
const { Car, Location, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  try {
    res.render('homepage', { logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/rentals', async (req, res) => {
  try {
    const carData = await Car.findAll();

    const cars = carData.map((car) =>
      car.get({ plain: true })
    );

    res.render('rentals', {
      cars,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/rentals/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
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
        },
      ],
    });

    const location = locationData.get({ plain: true });
    res.render('rentals', { location, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/contact', (req, res) => {
  try {
    res.render('contact', { logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/book-now/:city/:car', withAuth, async (req, res) => {
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
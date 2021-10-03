const router = require('express').Router();
const { Car, Location, User, Reservation } = require('../models');
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

    res.render('rentals', { cars, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/rentals/:city', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.city, {
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

router.get('/account', withAuth, async (req, res) => {
  try {

    const historyData = await Reservation.findAll({
      where: { user_id: req.session.user_id },
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
        {
          model: Location,
          attributes: [
            'id',
            'city',
            'airport',
            'embed'
          ],
        },
      ]
    });
    const reservations = historyData.map((reservation) =>
      reservation.get({ plain: true })
    );
    console.log(reservations);

    res.render('account', { reservations, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
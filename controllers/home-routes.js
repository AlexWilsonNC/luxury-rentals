const router = require('express').Router();
const { Car, Location } = require('../models');

router.get('/', (req, res) => {
  try {
    res.render('homepage');
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
    res.render('rentals', { location });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/contact', (req, res) => {
  try {
    res.render('contact');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
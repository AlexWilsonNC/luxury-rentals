const router = require('express').Router();
const { Car, Location, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:city/:car', withAuth, async (req, res) => {
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
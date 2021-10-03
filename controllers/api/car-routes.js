const router = require('express').Router();
const { Car, Location } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const carData = await Car.findByPk(req.params.id, {
            include: [{
                model: Location,
                attributes: ['id']
            }]
        });

        res.status(200).json(carData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
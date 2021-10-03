const router = require('express').Router();
const { Car, Location } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            include: [{
                model: Car,
                attributes: ['id']
            }]
        });

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const { Reservation } = require('../../models');

router.post('/', async (req, res) => {
    try {

        const bookData = {
            user_id: req.session.user_id,
            location_id: parseInt(req.body.location_id),
            car_id: parseInt(req.body.car_id),
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            rental_period: req.body.rental_period,
            total_price: parseInt(req.body.total_price)
        };

        const newBooking = await Reservation.create(bookData);
        
        res.status(200).json(newBooking);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
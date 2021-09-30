const { CarLocation } = require('../models');

const carLocationData = [
    {
        car_id: 1,
        location_id: 3,
    },
    {
        car_id: 2,
        location_id: 2,
    },
    {
        car_id: 3,
        location_id: 1,
    },
    {
        car_id: 4,
        location_id: 4,
    },
    {
        car_id: 5,
        location_id: 1,
    },
    {
        car_id: 5,
        location_id: 2,
    },
    {
        car_id: 5,
        location_id: 3,
    },
    {
        car_id: 5,
        location_id: 4,
    },
    {
        car_id: 6,
        location_id: 1,
    },
    {
        car_id: 6,
        location_id: 2,
    },
    {
        car_id: 6,
        location_id: 3,
    },
    {
        car_id: 6,
        location_id: 4,
    },
    {
        car_id: 7,
        location_id: 1,
    },
    {
        car_id: 7,
        location_id: 2,
    },
    {
        car_id: 7,
        location_id: 3,
    },
    {
        car_id: 7,
        location_id: 4,
    },
    {
        car_id: 8,
        location_id: 1,
    },
    {
        car_id: 8,
        location_id: 2,
    },
    {
        car_id: 8,
        location_id: 3,
    },
    {
        car_id: 8,
        location_id: 4,
    },
    {
        car_id: 9,
        location_id: 1,
    },
    {
        car_id: 9,
        location_id: 2,
    },
    {
        car_id: 9,
        location_id: 3,
    },
    {
        car_id: 9,
        location_id: 4,
    },
    {
        car_id: 10,
        location_id: 1,
    },
    {
        car_id: 10,
        location_id: 2,
    },
    {
        car_id: 10,
        location_id: 3,
    },
    {
        car_id: 10,
        location_id: 4,
    },
    {
        car_id: 11,
        location_id: 1,
    },
    {
        car_id: 11,
        location_id: 2,
    },
    {
        car_id: 11,
        location_id: 3,
    },
    {
        car_id: 11,
        location_id: 4,
    },
    {
        car_id: 12,
        location_id: 1,
    },
    {
        car_id: 12,
        location_id: 2,
    },
    {
        car_id: 12,
        location_id: 3,
    },
    {
        car_id: 12,
        location_id: 4,
    },
    {
        car_id: 13,
        location_id: 1,
    },
    {
        car_id: 13,
        location_id: 2,
    },
    {
        car_id: 13,
        location_id: 3,
    },
    {
        car_id: 13,
        location_id: 4,
    },
    {
        car_id: 14,
        location_id: 1,
    },
    {
        car_id: 14,
        location_id: 2,
    },
    {
        car_id: 14,
        location_id: 3,
    },
    {
        car_id: 14,
        location_id: 4,
    },
    {
        car_id: 15,
        location_id: 2,
    },
    {
        car_id: 16,
        location_id: 1,
    },
    {
        car_id: 17,
        location_id: 3,
    },
    {
        car_id: 18,
        location_id: 4,
    },

];

const seedCarLocations = () => CarLocation.bulkCreate(carLocationData);

module.exports = seedCarLocations;
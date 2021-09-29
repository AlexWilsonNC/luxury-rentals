const Location = require('../models/Location');

const locationData = [
    {
        "city": "Charlotte",
        "airport": "CLT",
        "latitude": "35.2144",
        "longitude": "-80.9473"
    },
    {
        "city": "New York",
        "airport": "JFK",
        "latitude": "40.6413",
        "longitude": "-73.7781"
    },
    {
        "city": "San Francisco",
        "airport": "SFO",
        "latitude": "37.6213",
        "longitude": "-122.3790"
    },
    {
        "city": "Chicago",
        "airport": "ORD",
        "latitude": "41.9803",
        "longitude": "-87.9090"
    }
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
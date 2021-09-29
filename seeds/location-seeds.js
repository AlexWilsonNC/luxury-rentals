const Location = require('../models/Location');

const locationData = [
    {
        "city": "Charlotte",
        "airport": "CLT",
        "embed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.6812852771864!2d-80.94950328388559!3d35.2144069630373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856987db74ad489%3A0x1aba4a6f3cc4a737!2sCharlotte%20Douglas%20International%20Airport!5e0!3m2!1sen!2sus!4v1632939240468!5m2!1sen!2sus"
    },
    {
        "city": "New York",
        "airport": "JFK",
        "embed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.4815074562844!2d-73.78032778381434!3d40.6413151498723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26650d5404947%3A0xec4fb213489f11f0!2sJohn%20F.%20Kennedy%20International%20Airport!5e0!3m2!1sen!2sus!4v1632940486416!5m2!1sen!2sus"
    },
    {
        "city": "San Francisco",
        "airport": "SFO",
        "embed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.185798624817!2d-122.38114408385549!3d37.62131712874506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f778c55555555%3A0xa4f25c571acded3f!2sSan%20Francisco%20International%20Airport!5e0!3m2!1sen!2sus!4v1632940569432!5m2!1sen!2sus"
    },
    {
        "city": "Chicago",
        "airport": "ORD",
        "embed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.9313367241693!2d-87.91118658379509!3d41.98028396699094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb4276a7762f3%3A0x511747070259ad4b!2sO%27Hare%20International%20Airport!5e0!3m2!1sen!2sus!4v1632940633152!5m2!1sen!2sus"
    }
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
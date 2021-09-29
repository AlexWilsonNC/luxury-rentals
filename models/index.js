const Car = require('./Car');
const Location = require('./Location');
const Category = require('./Category');
const User = require('./User');
const Reservation = require('./Reservation');
const CarLocation = require('./CarLocation');


// TODO: add through references and create models to serve as through references
// below methods incomplete

Car.belongsToMany(Location, {
    through: {
        model: CarLocation,
        unique: false
    }
});

Location.belongsToMany(Car, {
    through: {
        model: CarLocation,
        unique: false
    }
});

module.exports = {
    Car,
    Location,
    CarLocation,
    Category,
    User,
    Reservation
};

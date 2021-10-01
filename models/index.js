const Car = require('./Car');
const Location = require('./Location');
const User = require('./User');
const Reservation = require('./Reservation');
const CarLocation = require('./CarLocation');

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

Car.belongsToMany(User, {
    through: {
        model: Reservation,
        unique: false
    }
});

User.belongsToMany(Car, {
    through: {
        model: Reservation,
        unique: false
    }
});

Reservation.belongsTo(User, {
    foreignKey: 'user_id'
});

Reservation.belongsTo(Car, {
    foreignKey: 'car_id'
});

Reservation.belongsTo(Location, {
    foreignKey: 'location_id'
});

module.exports = {
    Car,
    Location,
    CarLocation,
    User,
    Reservation
};

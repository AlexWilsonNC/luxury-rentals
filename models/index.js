const Car = require('./Car');
const Location = require('./Location');
const Category = require('./Category');
const User = require('./User');
const Reservation = require('./Reservation');


// TODO: add through references and create models to serve as through references
// below methods incomplete

Car.belongsTo(Location, {
    foreignKey: 'location_id',
});

Location.hasMany(Car, {
    foreignKey: 'location_id'
});

Car.belongsTo(Category, {
    foreignKey: 'category_id',
});

Category.hasMany(Car, {
    foreignKey: 'category_id',
});

module.exports = { Car, Location, Category, User, Reservation };

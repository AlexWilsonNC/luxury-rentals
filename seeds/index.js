const sequelize = require('../config/connection');
const Car = require('../models/Car');
const carData = require('./car-seeds.json');
const Location = require('../models/Location');
const locationData = require('./location-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Car.bulkCreate(carData, {
    individualHooks: true,
    returning: true,
  });

  await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
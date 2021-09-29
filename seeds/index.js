const sequelize = require('../config/connection');
const seedCars = require('./car-seeds');
const seedLocations = require('./location-seeds');
const seedCarLocations = require('./car-location-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedCars();

  await seedLocations();

  await seedCarLocations();

  process.exit(0);
};

seedDatabase();
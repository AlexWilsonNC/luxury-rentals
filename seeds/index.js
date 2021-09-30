const sequelize = require('../config/connection');
const seedCars = require('./car-seeds');
const seedLocations = require('./location-seeds');
const seedCarLocations = require('./car-location-seeds');
const seedUsers = require('./user-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCars();
  console.log('\n----- CARS SEEDED -----\n');

  await seedLocations();
  console.log('\n----- LOCATIONS SEEDED -----\n');

  await seedCarLocations();
  console.log('\n----- CAR LOCATIONS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
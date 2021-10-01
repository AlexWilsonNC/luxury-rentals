const User = require('../models/User');

const userData = [
    {
        "email": "luxrents@email.com",
        "password": "pass1234"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
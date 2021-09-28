// TODO: model for reservation
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Reservation extends Model {}

Reservation.init(
  {
    // add columns - ?? id, will be linked to user and car (reference foreign key?)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation'
  }
);

module.exports = Reservation;
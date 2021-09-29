const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CarLocation extends Model {}

CarLocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'car',
        key: 'id',
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'car_location'
  }
);

module.exports = CarLocation;

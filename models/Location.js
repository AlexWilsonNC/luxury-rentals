const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { }

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    map: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;
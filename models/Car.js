const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      make: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
          }
      },
      rental_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true,
          }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'location',
          key: 'id',
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category',
          key: 'id',
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'car',
    }
  );
  
  module.exports = Car;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Reservation extends Model { }

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
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
        modelName: 'reservation'
    }
);

module.exports = Reservation;
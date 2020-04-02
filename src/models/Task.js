const Sequelize = require('sequelize');
const sequelize = require('../database/db')

module.exports = sequelize.define(
    'tbl_tasks', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tasks_name: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    }, {
        freezeTableName: true
    }
)
const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');
const { table } = require('node:console');

const estudante = sequelize.define(
    'estudante', 
    {
     nome:{type: DataTypes.STRING,},
     idade:{type: DataTypes.INTEGER,}
    },
     {tableName: 'estudante',timestamps: true}

);

module.exports = estudante;
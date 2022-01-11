'use strict';
const { v4: uuidv4 } = require('uuid')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Tasks, {
        foreignKey: 'nota_id',
        as:'task',
        onDelete: 'cascade'
      })
    }
  };
  Notas.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notas',
  });
  Notas.beforeCreate(nota => nota.id = uuidv4())
  return Notas;
};
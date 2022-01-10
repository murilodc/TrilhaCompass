'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tasks.belongsTo(models.Notas, {
        foreignKey: 'mainId'
      })
    }
  };
  Tasks.init({
    mainId: DataTypes.STRING,
    title: DataTypes.STRING,
    taskRelevance: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};
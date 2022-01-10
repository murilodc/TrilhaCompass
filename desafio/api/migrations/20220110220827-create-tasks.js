'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      mainId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: 'Notas', key: 'id'}
      },
      title: {
        type: Sequelize.STRING
      },
      taskRelevance: {
        type: Sequelize.INTEGER
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};
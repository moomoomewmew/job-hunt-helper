'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('opportunities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      payRange: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      pointOfContact: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      jobPostURL: {
        type: Sequelize.STRING
      },
      companyURL: {
        type: Sequelize.STRING
      },
      DateApplied: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('opportunities');
  }
};
'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'clients',
      'isLogged',
      {
        type: Sequelize.BOOLEAN
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'clients',
      'isLogged',
    );
  }
};

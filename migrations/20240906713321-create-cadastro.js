'use strict';

module.exports = {
 up: async(queryInterface, Sequelize) => {
   await queryInterface.createTable('Cadastro', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
   })
  },

down: async  (queryInterface, Sequelize) => {
   await queryInterface.dropTable('Cadastro');
  }
};
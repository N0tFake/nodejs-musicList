'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genre_associate', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_album: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'albuns', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_genre: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'genre_musical', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('genre_associate');
  }
};

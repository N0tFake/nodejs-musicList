'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('albuns', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_artist: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'artists', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      realese: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('albuns');
  }
};

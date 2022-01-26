'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genre_music', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_music: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'musics', key:'id' },
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
    await queryInterface.dropTable('genre_music');
  }
};

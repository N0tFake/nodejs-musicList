'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('artist_music', { 
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
      id_artist: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'artists', key:'id' },
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
    await queryInterface.dropTable('artist_music');
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('musics', { 
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
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      release: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('musics');
  }
};

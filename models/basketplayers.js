'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basketPlayers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  basketPlayers.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birth: DataTypes.DATE,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'basketPlayers',
  });
  return basketPlayers;
};
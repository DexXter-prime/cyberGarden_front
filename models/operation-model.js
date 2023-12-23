const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Locomotive', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inventoryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direction: {
      type: DataTypes.ENUM,
      values: ["LEFT", "RIGHT"]
    }
  });
};

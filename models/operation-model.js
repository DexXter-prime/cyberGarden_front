const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Operation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    operationName: DataTypes.STRING,
    minutesNorma: DataTypes.INTEGER,
    reasonId: DataTypes.INTEGER,
    wagonsIds: DataTypes.ARRAY(DataTypes.INTEGER),
    departureStation: DataTypes.INTEGER,
    departurePark: DataTypes.INTEGER,
    departureWay: DataTypes.INTEGER,
    destinationStation: DataTypes.INTEGER,
    destinationPark: DataTypes.INTEGER,
    destinationWay: DataTypes.INTEGER,
    supplyDirection: {
      type: DataTypes.ENUM,
      values: ["LEFT", "RIGHT"]
    },
    locomotiveId: DataTypes.INTEGER,
    operationStatus: DataTypes.STRING,
    comment: DataTypes.STRING
  });
};

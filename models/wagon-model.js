const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Wagon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wagonType: {
      type: DataTypes.ENUM,
      values: [
        "HalfCarriage", "Platform", "RollPlatform", "UsoPlatform", "Hopper",
        "Tank", "CoveredCarriage", "Sdpm", "Sm2", "Ppsm2", "Pksm2", "DgkMpt",
        "Vprs", "Uk", "KranKj", "GuideCarriage"
      ]
    },
    inventoryNumber: {
      type: DataTypes.INTEGER,
    },
    isDirty: {
      type: DataTypes.BOOLEAN,
    },
    isSick: {
      type: DataTypes.BOOLEAN,
    },
    owner: {
      type: DataTypes.ENUM,
      values: [
        "HTC", "GK", "ATL", "PGK",
        "MOD", "RJD", "NPK", "FGK",
        "MECH", "AGENT", "OTHER"
      ]
    },
    loadCapacity: {
      type: DataTypes.DOUBLE
    },
    daysToRepair: {
      type: DataTypes.INTEGER
    },
    kilometersLeft: {
      type: DataTypes.INTEGER
    }
  });
};

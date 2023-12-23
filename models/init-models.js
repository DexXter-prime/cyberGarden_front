const DataTypes = require("sequelize").DataTypes;
const WagonModel = require('./wagon-model');
const LocomotiveModel = require('./locomotive-model');
const WayModel = require('./way-model');
const ParkModel = require('./park-model');
const StationModel = require('./station-model');

function initModels(sequelize) {
    const Station = StationModel(sequelize, DataTypes);
    const Park = ParkModel(sequelize, DataTypes);
    const Way = WayModel(sequelize, DataTypes);
    const Locomotive = LocomotiveModel(sequelize, DataTypes);
    const Wagon = WagonModel(sequelize, DataTypes);

    Wagon.belongsTo(Way);
    Locomotive.belongsTo(Way);
    Way.belongsTo(Park);
    Park.belongsTo(Station);
    sequelize.sync();

    return {
        Wagon,
        Locomotive,
        Way,
        Park,
        Station
    }
}

module.exports = { initModels };
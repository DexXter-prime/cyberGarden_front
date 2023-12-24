const DataTypes = require("sequelize").DataTypes;
const WagonModel = require('./wagon-model');
const LocomotiveModel = require('./locomotive-model');
const WayModel = require('./way-model');
const ParkModel = require('./park-model');
const StationModel = require('./station-model');
const OperationModel = require('./operation-model')
const data = require("../db2.json");

function initModels(sequelize) {
    const Station = StationModel(sequelize, DataTypes);
    const Park = ParkModel(sequelize, DataTypes);
    const Way = WayModel(sequelize, DataTypes);
    const Locomotive = LocomotiveModel(sequelize, DataTypes);
    const Wagon = WagonModel(sequelize, DataTypes);
    const Operation = OperationModel(sequelize, DataTypes);

    Wagon.belongsTo(Way);
    Locomotive.belongsTo(Way);
    Way.belongsTo(Park);
    Park.belongsTo(Station);

    async function fillFromJson() {
        for (const station_i in data.stationsData) {
            const station_file = data.stationsData[station_i].station
            const station = await Station.create({ name: station_file.name });

            for (const park_i in station_file.parks) {
                const park_file = station_file.parks[park_i].park;
                const park = await Park.create({ StationId: station.id, name: park_file.name });

                for (const way_i in park_file.ways) {
                    const way_file = park_file.ways[way_i];
                    const way = await Way.create({ ParkId: park.id, name: way_file.name });

                    for (const wagon_i in way_file.wagons) {
                        const wagon_file = way_file.wagons[wagon_i];
                        await Wagon.create({
                            WayId: way.id,
                            vagonType: wagon_file.type,
                            inventoryNumber: wagon_file.inventoryNumber,
                            isDirty: wagon_file.isDirty,
                            isSick: wagon_file.isSick,
                            owner: wagon_file.owner,
                            loadCapacity: wagon_file.loadCapacity,
                            daysToRepair: wagon_file.daysToRepair,
                            kilometersLeft: wagon_file.kilometersLeft
                        })
                    }

                    for (const loko_i in way_file.locomotives) {
                        const loko = way_file.locomotives[loko_i];
                        await Locomotive.create({
                            WayId: way.id,
                            inventoryNumber: loko.inventoryNumber,
                            direction: loko.direction
                        })
                    }
                }
            }
        }

    }

    sequelize.sync();

    return {
        Wagon,
        Locomotive,
        Way,
        Park,
        Station,
        Operation
    }
}

module.exports = { initModels };
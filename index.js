const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {error, json} = require("./responceHelper");
const getModels = require('./database');
const data = require('./db.json')

const app = express();
const port = 3000;

const models = getModels();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    res.header("Content-Type","application/json");
    next();
});

const users = [
    {
        id: 1,
        username: 'admin',
        role: 'admin',
        password: 'admin' // In a real application, never store passwords in plain text
    },
    {
        id: 2,
        username: 'user',
        role: 'user',
        password: 'user'
    }
];

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        jwt.sign({ user }, 'secretkey', { }, (err, token) => {
            res.json({ token });
        });
    } else {
        res.status(401).json({"status": "bad"});
    }
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

function checkRole(roles) {
    return function(req, res, next) {
        jwt.verify(req.token, 'secretkey', (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else if (roles.contains(data.user.role)) {
                res.status(403);
            } else {
                next();
            }
        });
    }
}

app.get('/api/station/list', async (req, res) => {
    const stations = await models.Station.findAll({
        attributes: ["id", "name"],
        raw: true,
        nest: true
    });

    if (stations == null) {
        error(res, 500, "Indernal Server", "Data Not found", "Data not found");
    }

    json(res, stations)
});



app.get('/api/station/list/:id', async (req, res) => {
    const station = await getStation(req.params.id);
    if (station == null) {
        error(res, 404, "Not found", "Station not found", "");
        return;
    }

    getParks(req.params.id).then(async (parks) => {
        for (const park_i in parks) {
            const ways = await models.Way.findAll({
                attributes: {exclude: ["createdAt", "updatedAt"]},
                where: {ParkId: parks[park_i].id},
                raw: true,
                nest: true
            });

            for (const way_i in ways) {
                ways[way_i].locomotives = await models.Locomotive.findAll({
                    attributes: {exclude: ["createdAt", "updatedAt"]},
                    where: {WayId: ways[way_i].id},
                    raw: true,
                    nest: true
                })

                ways[way_i].wagons = await models.Wagon.findAll({
                    attributes: {exclude: ["createdAt", "updatedAt"]},
                    where: {WayId: ways[way_i].id},
                    raw: true,
                    nest: true
                })
            }

            parks[park_i].ways = ways;
        }

        station.parks = parks;
        json(res, station)
    })
});

async function getStation(id) {
    return await models.Station.findOne({
        attributes: {exclude: ["createdAt", "updatedAt"]},
        where: {id: id},
        raw: true,
        nest: true
    });
}

async function getParks(stationId) {
    return await models.Park.findAll({
        attributes: {exclude: ["createdAt", "updatedAt"]},
        where: {StationId: stationId},
        raw: true,
        nest: true
    });
}

app.get('/api/station/list/:id/operation/list', verifyToken, checkRole(['user', 'admin']), async (req, res) => {
    res.json({'page': "operationsList"});
});

app.post('/api/station/list/:id/operation/list/add', verifyToken, checkRole(['user', 'admin']), async (req, res) => {
    res.json({'page': "operationsListAdd"});
});


app.listen(port, () => console.log('started'));
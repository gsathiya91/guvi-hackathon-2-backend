const express= require('express');
const { getSeats, createSeats } = require('../controllers/functionforseats');
const routers = express.Router();

routers.route('/getseats').get(getSeats);
routers.route('/createseats').post(createSeats)

module.exports = routers;
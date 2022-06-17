const express= require('express');
const { getTheatres, createTheatres } = require('../controllers/functionfortheatre');
const route = express.Router();

route.route('/gettheatres').get(getTheatres);
route.route('/createtheatres').post(createTheatres)

module.exports = route;
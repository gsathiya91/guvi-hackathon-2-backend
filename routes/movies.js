const express= require('express');
const { getMovies, createMovies } = require('../controllers/functionformovies');
const router = express.Router();

router.route('/getmovies').get(getMovies);
router.route('/createmovies').post(createMovies)

module.exports = router;
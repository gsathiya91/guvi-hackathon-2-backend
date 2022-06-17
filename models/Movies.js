const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieUrl: String,
    movieName: String
})

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
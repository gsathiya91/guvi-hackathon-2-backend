const movieModel = require("../models/Movies")

const getMovies = async (req, res) => {
    try {
        const movies = await movieModel.find({});
        if (movies) {
            res.json(movies)
        }
    } catch (err) {
        console.log(err)
    }
};

const createMovies = async (req, res) => {
    try {
const movies = new movieModel({
    movieUrl: req.body.movieUrl,
    movieName: req.body.movieName
})
const createMovie = await movies.save();
if(createMovie){
    res.send(createMovie)
}
    } catch (err) {
        console.log(err)
    }
}
module.exports = { getMovies, createMovies }
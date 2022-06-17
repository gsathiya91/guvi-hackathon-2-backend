const theatreModel = require("../models/Theatre")

const getTheatres = async (req, res) => {
    try {
        const theatres = await theatreModel.find({});
        if (theatres) {
            res.json(theatres)
        }
    } catch (err) {
        console.log(err)
    }
};

const createTheatres = async (req, res) => {
    try {
const theatres = new theatreModel({
    theatreName: req.body.theatreName,
    showTime1: req.body.showTime1,
    showTime2: req.body.showTime2,
    showTime3: req.body.showTime3,
})
const createTheatre = await theatres.save();
if(createTheatre){
    res.send(createTheatre)
}
    } catch (err) {
        console.log(err)
    }
}
module.exports = { getTheatres, createTheatres }
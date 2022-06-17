const seatModel = require("../models/Seating");

const getSeats = async (req, res) => {
    try {
        const seats = await seatModel.find({});
        if (seats) {
            res.json(seats)
        }
    } catch (err) {
        console.log(err)
    }
};

const createSeats = async (req, res) => {
    try {
const seats = new seatModel({
    rowName: req.body. rowName,
    seatNumber1: req.body.seatNumber1,
    seatNumber2: req.body.seatNumber2,
    seatNumber3: req.body.seatNumber3,
    seatNumber4: req.body.seatNumber4,
    seatNumber5: req.body.seatNumber5,
    seatNumber6: req.body.seatNumber6,
    seatNumber7: req.body.seatNumber7,
    seatNumber8: req.body.seatNumber8,
    seatNumber9: req.body.seatNumber9,
    seatNumber10: req.body.seatNumber10,
})
const createSeat = await seats.save();
if(createSeat){
    res.send(createSeat)
}
    } catch (err) {
        console.log(err)
    }
}
module.exports = { getSeats, createSeats }
const mongoose = require('mongoose');

const seatingSchema = mongoose.Schema({
    rowName: String,
    seatNumber1: Number,
    seatNumber2: Number,
    seatNumber3: Number,
    seatNumber4: Number,
    seatNumber5: Number,
    seatNumber6: Number,
    seatNumber7: Number,
    seatNumber8: Number,
    seatNumber9: Number,
    seatNumber10: Number,
})

const seatModel = mongoose.model("seats", seatingSchema);

module.exports = seatModel;
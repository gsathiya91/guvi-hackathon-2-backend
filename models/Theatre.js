const mongoose = require('mongoose');

const theatreSchema = mongoose.Schema({
    theatreName: String,
    showTime1: String,
    showTime2: String,
    showTime3: String,
})

const theatreModel = mongoose.model("theatres", theatreSchema);

module.exports = theatreModel;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const brewSchema = new Schema ({

    brewery: { type: String, unique: false, required: false },
    beer: { type: String, unique: false, required: false },
})


const Brew = mongoose.model('Brew', brewSchema)
module.exports = Brew
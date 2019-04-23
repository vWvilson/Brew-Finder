const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const brewSchema = new Schema ({ 
    brewery: { type: String, unique: false, required: true },
    beer: { type: String, unique: false, required: true },
 });


const Brew = mongoose.model('Brew', brewSchema)
module.exports = Brew
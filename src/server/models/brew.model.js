const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const brewSchema = new Schema ({ 
    selectedOption:  { 
        type: Object, 
        items:{
            label : String,
            value : String
            }
        },
    beer: { type: String, unique: false, required: true },
 });
        
        


const Brew = mongoose.model('Brew', brewSchema)
module.exports = Brew
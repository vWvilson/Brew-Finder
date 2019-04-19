const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const signupSchema = new Schema ({

    username: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
	password: { type: String, unique: false, required: true }
})


const Signup = mongoose.model('Signup', signupSchema)
module.exports = Signup
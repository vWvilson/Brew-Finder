const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const signupSchema = new Schema ({

    username: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false }
})


const Signup = mongoose.model('Signup', signupSchema)
module.exports = Signup
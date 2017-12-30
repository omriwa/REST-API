var mongoose = require("mongoose"),
    userSchema;

userSchema = new mongoose.Schema({
    username: String,
    address: String,
    pass: String,
    fName: String,
    lName: String,
    email:String
});

module.exports = mongoose.model('userModel' , userSchema);

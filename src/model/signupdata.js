const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@fsdfiles.ogsbi.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    dob: String,

});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports=Signupdata;
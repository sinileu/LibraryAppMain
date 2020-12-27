const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@fsdfiles.ogsbi.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author: String,
    desc: String,
    image: String 
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;
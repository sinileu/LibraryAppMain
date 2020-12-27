const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@fsdfiles.ogsbi.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String 
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;
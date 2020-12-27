const { request } = require('express');
const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/bookdata')

adminRouter.get('/',function(req,res){
    res.render('addbook',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            {link:'/admin',name:'Add Book'}],
            title:'Library',
    
    });

});
adminRouter.post('/add',function(req,res){
    var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
    }
    
     var book= Bookdata(item);
     book.save();
     res.redirect('/books');
     
});
adminRouter.post('/update',function(req,res){
    var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
    }
    
     var book= Bookdata(item);
     book.save();
     res.redirect('/books');
     
});

module.exports = adminRouter;
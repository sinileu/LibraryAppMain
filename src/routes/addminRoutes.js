const express = require('express');
const addminRouter = express.Router();
const Authordata = require('../model/authordata')

addminRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            {link:'/addmin',name:'Add Author'}],
            title:'Library',
    
    });

});
addminRouter.post('/add',function(req,res){
    var item={
        author:req.body.author,
        desc:req.body.desc,
        image:req.body.image
    }
    
     var author= Authordata(item);
     author.save();
     res.redirect('/authors');
     
});

module.exports = addminRouter;
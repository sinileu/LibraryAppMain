const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/signupdata');




signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            {link:'/login',name:'Login'}],
            // {link:'/signup',name:'Signup'}],
            title:'Library',
    
    });

});

signupRouter.post('/signin',function(req,res){
    var item = {
  
     firstname: req.body.firstname,
     lastname: req.body.lastname,
     email: req.body.email,
     password: req.body.password,
     cpass: req.body.cpass,
     dob: req.body.dob
    
      }  
   var signup =  Signupdata(item);
   signup.save();
   res.redirect('/login');
 
  });


module.exports = signupRouter;
const express = require('express');
const loginRouter = express.Router();
const Signupdata = require('../model/signupdata');



loginRouter.get('/',function(req,res){
    res.render('login',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            // {link:'/login',name:'Login'},
            {link:'/signup',name:'Signup'}],
            title:'Library',
    
    });

});

loginRouter.post('/',function (req,res) {

    const email = req.body.email;
    const password = req.body.password;
    
    Signupdata.findOne({
        email:email,password:password})
            .then(function(mail){
            if(password==mail.password){
                res.redirect('/books');
            }
            else{
                res.render('invalid password');
                res.redirect('/login');
                
            }
            });
          });

           
          module.exports = loginRouter;
const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');

// var books =[
//     {
//         title: 'Life of Pi',
//         author: 'Yann Martel',
//         genre: 'Fantasy',
//         img: "life.jpg",
//         desc: 'Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001.'
//     },
//     {
//         title: 'The Long Walk',
//         author: 'Stephen King',
//         genre: 'Fiction',
//         img: "long.jpg",
//         desc: 'The Long Walk is a dystopian horror novel by American writer Stephen King, published in 1979, under the pseudonym Richard Bachman.'
//     },
//     {
//         title: 'The Alchemist',
//         author: 'Paulo Coelho',
//         genre: 'Adventure',
//         img: "alchemist.jpg",
//         desc: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese.'
//     },
//     {
//         title: 'The Lord of the Rings',
//         author: 'J.R.R. Tolkien',
//         genre: 'Fantasy',
//         img: "lord.jpg",
//         desc: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth.'
//     },
//     {
//         title: 'Resurrection',
//         author: 'Leo Tolstoy',
//         genre: 'Novel',
//         img: "resurrection.jpg",
//         desc: 'Resurrection, first published in 1899, was the last novel written by Leo Tolstoy. Also translated as The Awakening.'
//     }
//     ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
          res.render('books',{
            nav:[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/admin',name:'Add Book'}],
            title:'Library',
            books 
        });
        });
        
        });
        booksRouter.get('/:id',function(req,res){
            const id = req.params.id;
            Bookdata.findOne({_id:id})
            .then(function(book){
             res.render('book',{
                nav:[{link:'/books',name:'Books'},
                {link:'/authors',name:'Authors'}],
                title:'Library',
                book 
            });

            });
            
        });
        booksRouter.get('/update/:id',function(req,res){
            const id = req.params.id;
            Bookdata.findOne({_id:id})
            .then(function(book){
             res.render('updatebook',{
                nav:[{link:'/books',name:'Books'},
                {link:'/authors',name:'Authors'}],
                title:'Library',
                book 
            });
        });
    });
       booksRouter.post('/update/:id',function (req,res) {
        console.log(req.body);
        const id=req.params.id;
      
        const update={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
            
           }
      
           Bookdata.findByIdAndUpdate({_id:id},{$set:update},function(err){
            if(err) {
                console.log(err);
            }else{
            
            res.redirect('/books');
            }
          });
      
       });

       booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOneAndDelete({_id:id})
            .then(function(books){

                res.redirect('/books');
            });
        });
       module.exports = booksRouter;      
const express = require('express');
const indexRouter = express.Router();

var index =[
    {
        name: '30 Books Everyone Should Read At Least Once In Their Lives',
        img: "yann.jpg",
        desc: 'allrefer.com',
        time: '2 hours ago  • ' 
    },
    {   
        name: '100 Famous Authors In The World |',
        img: "stephen.jpg",
        desc: 'brainpickings.org',
        time: 'Yesterday  • '
    },
    {   
        name: '21 Books You have Been Meaning To Read',
        img: "paulo.jpg",
        desc: 'mentalfloss.com',
        time: 'Yesterday • '
    },
    {   
        name: 'The Best Books We Read in 2020',
        img: "tolkien.jpg",
        desc: 'newyorker.com',
        time: 'Two Days ago • '
    },
    {   
        name: 'The Greatest Books of All Time, As Voted by 125 Famous Authors',
        img: "tolstoy.jpg",
        desc: 'offtheshelf.com',
        time: 'Last Week  • '
    }
    ]
    indexRouter.get('/',function(req,res){
        res.render('index',{
            nav:[{link:'./books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/login',name:'Login'},
            {link:'/signup',name:'Signup'}],
            title:'Library',
            index 
        });
        // });
        // authorsRouter.get('/:ig',function(req,res){
        //     const ig = req.params.ig
        //     res.render('author',{
        //         nav:[{link:'./books',name:'Books'},
        //         {link:'/authors',name:'Authors'},
        //         {link:'/add author',name:'Add Author'}],
        //         title:'Library',
        //         author : authors[ig]
        //     });
        // });
    });
        module.exports = indexRouter;
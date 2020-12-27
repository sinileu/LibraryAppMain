const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const booksRouter = require('./src/routes/bookRoutes');
const authorsRouter = require('./src/routes/authorRoutes');
const adminRouter = require('./src/routes/adminRoutes');
const addminRouter = require('./src/routes/addminRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/addmin',addminRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("index",
    {
      nav:[{link:'/books',name:'Books'},
           {link:'./authors',name:'Authors'},
           {link:'./login',name:'Login'},
           {link:'./signup',name:'Signup'}],
      title:'Library'  
    });
});

app.listen(port,()=>{console.log("Server Ready at" + port)});
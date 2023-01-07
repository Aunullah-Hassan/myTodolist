const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=8000;

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));

todate=Date('12/12/12');
app.get('/',function(req,res){
    // console.log(__dirname);
    // console.log(req.url);
    return res.render('home',{
        title: "To Do List",
        heading: "TODO App",
        due_date:todate
    });

    
});

app.post('/create_task',function(req,res){
    console.log('create task requested');
    return res.redirect('back');
});

app.get('/delete_task',function(req,res){
    console.log('delete contact requested');
    return res.redirect('back');
});



app.listen(port,function(err){
    if(err){
        console.log(`Error in runnig the server : ${err}`);
    }
    console.log(`server is runnig on the port : ${port}`);
});

const express=require('express');
const bodyParser=require('body-parser');

const db=require('./config/mongoose');
const TodoList=require('./models/todolist');

const app=express();
const port=8000;

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/',function(req,res){
    // console.log(__dirname);
    // console.log(req.url);
    TodoList.find({},function(err,tasks){
        // name:'new'
        if(err){
            console.log('error in fetching To do List from db ');
            return;
        }
        return res.render('home',{
            title:'My ToDo List',
            task_list:tasks,
            heading:"TODO App"
        });
    });

    
});

app.post('/create_task',function(req,res){
    // console.log('create task requested');

    TodoList.create({
        task:req.body.task,
        due_date:req.body.due_date,
        label:req.body.label
    },function(err,newContact){
        if(err){
            console.log('error in creating contact');
            return;
        }
        console.log('************',newContact);
        return res.redirect('back');
    });

    // return res.redirect('back');
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

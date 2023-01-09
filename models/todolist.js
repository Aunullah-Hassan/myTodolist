// Since we have set up the configuration of mongoose and connected the mongoose to our mongoDB database
// let's make schema

const mongoose=require('mongoose');

const todolistSchema=mongoose.Schema({
    
    task:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    },
    label:{
        type:String,
        required:true
    }
});

// We have to set the NAME OF COLLECTION IN OUR DATATBASE
const TodoList=mongoose.model('TodoList',todolistSchema);

module.exports=TodoList;
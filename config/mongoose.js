// Require the library

const mongoose=require('mongoose');

// Connect to the database
mongoose.connect('mongodb://127.0.0.1/todo_list_db');

// Acquire the connection (to check if it is succesfull)
const db=mongoose.connection;

// error
db.on('error',console.error.bind('console','there is some error connecting to db'));
// up and running then print the message
db.once('open',function(){
    console.log('successfully connected to database !!');
});




const mongoose = require('mongoose');
const Schema=  new mongoose.Schema({
    id:{type:Number},
    text:{type:String},
    status:{type:String},
})
const ToDo =  new mongoose.model('todolist',Schema);
module.exports=ToDo;

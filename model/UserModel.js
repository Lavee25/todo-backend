const mongoose = require('mongoose');
const Schema=  new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    age:{type:Number}
})
const User =  new mongoose.model('todouserdata',Schema);
module.exports=User;

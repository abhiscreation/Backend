const mongoose = require("mongoose");
const UserSchema =new mongoose.Schema({
 email:{
     type:String,
     required:[true,"please enter an email address"]
 }  ,
 Firstname:{
    type:String,
    required:[true,"please enter a first name"]
}  ,
Lastname:{
    type:String,
    required:[true,"please enter a last name"]
},
password:{
    type:String,
    required:[true,"please enter an password"]
}  ,
});
module.exports = mongoose.model("User",UserSchema)
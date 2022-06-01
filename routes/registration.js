var express = require('express');
var router = express.Router();
const User =require('./UserModel')

//View All Users  
router.get('/', function(req, res, next) {
 User.find({},function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err });
    } else {
      res.status(200).json({ status: true, data, message: "Data found!" });
      console.log(data)
    }
  })
});

//Register a User
router.post('/adduser', async(req, res, next)=>{
if( await userExists(req.body.email)){
  res.status(409).json({error:"email alreday exists"})
}
else{
  console.log(req.body)
  const user = new User(req.body);
  user.save(err =>{
      if(err){
          res.send(err)
      }else{
          res.send({message:"Successful Registered"})
      }
  })
}
})
  
//Existing User Check Condition
const userExists=async(email)=>{
const user = await User.findOne({email:email.toLowerCase().trim()})
if(user){
  return true
}else{
  return false
}
  }

//Login a User  
router.post('/login', function(req, res, next) {
  User.findOne({email:req.body.email ,password:req.body.password}).then(data=>{
if(data){
  res.status(200).json(data)
}else{
  res.status(401).json({error:"incorrect email or password"})
}
  }).catch(err=>{
    res.status(500).json({error:err.message})
  })
    
  
})

module.exports = router;




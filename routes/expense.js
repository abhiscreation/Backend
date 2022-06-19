var express = require('express');
var router = express.Router();
var expense = require('./expensemodule');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Insert expense
router.post('/expenseinsert', function(req, res) {
    console.log(req.body)
    const Expense = new expense(req.body);
    Expense.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successfully Inserted"})
        }
    })
});


router.get("/display", function (req, res) {
    expense.find({},function (err, data) {
         if (err) {
           res.status(500).json({ status: false, message: err });
         } else {
           res.status(200).json({ status: true, data, message: "Data found!" });
           console.log(data)
         }
       }).populate("patient","PatientName")
     }); 

module.exports = router;

//accept a string and return the number of times the string is repeated in the string


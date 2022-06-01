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
module.exports = router;

//accept a string and return the number of times the string is repeated in the string


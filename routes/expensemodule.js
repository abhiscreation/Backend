const mongoose = require("mongoose");
const ExpenseSchema= new mongoose.Schema({
   perday:{
        type:Number,
       
    },
        medicinename:{
            type:String,
            required:true,
        },
        medicineamount:{
            type:Number,
            required:true,
        },
        testamount:{
            type:Number,
            required:true,
        },
    
    patient:{
        type:String,
        ref:"NewPatient"
    },
})
module.exports=mongoose.model("expense",ExpenseSchema);
const mongoose = require("mongoose");
const ExpenseSchema= new mongoose.Schema({
   perday:{
        type:Number,
       
    },
    
    otherCharges:[{
        billname:{
            type:Array,
            required:true,
        },
        billamount:{
            type:Number,
            required:true,
        },
    }],
    
    patient:{
        type:mongoose.Schema.ObjectId,
        ref:"NewPatient"
    },
})
module.exports=mongoose.model("expense",ExpenseSchema);
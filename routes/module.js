const mongoose = require("mongoose");
const NewPatientSchema = new mongoose.Schema({
    _id:Number,
    PatientName:String,
    PatientAge:Number,
    RegistrationDate:Date,
    Disease:Array,
    Test:Array
});
module.exports = mongoose.model("NewPatient",NewPatientSchema)


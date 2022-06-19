const mongoose = require("mongoose");
const NewPatientSchema = new mongoose.Schema({
    _id:String,
    PatientName:String,
    PatientAge:String,
    RegistrationDate:Date,
    Disease:Array,
    Test:Array
});
module.exports = mongoose.model("NewPatient",NewPatientSchema)
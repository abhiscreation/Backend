var express = require('express');
var router = express.Router();
var patient = require('./module');

router.get("/:PatientName", function (req, res) {
    const {PatientName} = req.params;
    patient.findOne({PatientName}, function (err, data) {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else {
        res.status(200).json({ status: true, data, message: "Data found!" });
        console.log(data)
      }
    });
  });

module.exports = router;
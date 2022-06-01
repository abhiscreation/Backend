const mongoose = require("mongoose");

module.exports = () => {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(
    `mongodb://localhost:27017/patient_info`,
    options
  );
  //

  // mongoose.connect("mongodb://localhost:27017/numeric")
  mongoose.connection
    // eslint-disable-next-line no-console
    .once("open", () => console.log("MongoDb running"))
    // eslint-disable-next-line no-console
    .on("error", (err) => console.log(err));
  // mongoose.set("debug", true);
};
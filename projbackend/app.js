require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const getdata = require("./routes/getdataforbackend");
const apidata = require("./routes/apidata");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/better-place-app-dinesh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(cors());
app.use(bodyParser.json());

app.use("/getdata", getdata);
app.use("/apidata", apidata);

app.listen(8000, ()=>{
    console.log(`server is up and running`);
});

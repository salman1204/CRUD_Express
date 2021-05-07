const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/person", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const con = mongoose.connection;

con.on("open", () => {
  console.log("conected....");
});

app.use(express.json());
const personRouter = require('./routes/persons');

app.use('/persons', personRouter);

app.listen(9000, () => {
  console.log("Server Running");
});

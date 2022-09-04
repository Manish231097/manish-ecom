const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
require("dotenv").config();

// variables

const app = express();
const port = process.env.PORT || 8000;
const { DB_USERNAME, DB_PASS } = process.env;

// middlewear

app.use(express.json());
app.use(cors())


//db connection

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASS}@cluster0.rdx5iax.mongodb.net/projest?retryWrites=true&w=majority`,
  (err) => {
    if (err) return console.log("Err", err);
    console.log("db connected");
  }
);



// routes start

app.get('/',(req,res)=>{
    res.send('Project Development start')
})

app.use('/api/admin/user',require('./routes/user.routes'));


// routes end

// server

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
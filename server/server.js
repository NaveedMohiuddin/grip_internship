const express = require('express');
const cors = require('cors');
const router = require('./router/bank');
const mongoose = require('./db/connection');
require('dotenv');

const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use('/',router);
app.use(express.urlencoded({extended: false}))

// app.get("/",(req,res)=>{
//     res.send("data base")
// });

app.listen(port,()=>{
    console.log(`server started at ${port}`);
})
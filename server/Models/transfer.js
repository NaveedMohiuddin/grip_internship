const mongoose = require('mongoose');

const bankingschema = mongoose.Schema({
    to: Number,
    amount: Number,
    date:String,
    time:String
})

const Transfer =new mongoose.model("transfer",bankingschema)

module.exports=Transfer;
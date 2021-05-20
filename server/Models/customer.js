const mongoose = require('mongoose');

const bankingschema = mongoose.Schema({
    Accountno : {
        type : Number,
        required : true,
    },
    name : String,
    email : {
        type : String,
        required : true,
    },
    Amount : Number
})

const Customer =new mongoose.model("customer",bankingschema)

module.exports= Customer;

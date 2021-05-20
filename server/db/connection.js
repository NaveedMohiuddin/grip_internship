const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://Naveed:naveedcluster@cluster0.rdinp.mongodb.net/basicbanking?retryWrites=true&w=majority",{useFindAndModify:false,
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{console.log("db connected");})
.catch((err)=>{console.log("db not connected");})

module.exports = mongoose;

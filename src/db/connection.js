const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/travel_api', {useNewUrlParser:true,useUnifiedTopology: true })
.then(console.log("connectins sucsefull to data base"))
.catch((e)=>{
    console.log(e);
})
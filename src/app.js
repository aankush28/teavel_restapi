const express = require('express')
require('./db/connection');
const personsData = require('./routers/personData')
const app = express()
app.use(express.json())
app.use(personsData)
const port = process.env.POST || 3000;
 app.get("/",(req,res)=>{
res.send('hello gupta your traveling data base is working')
console.log("hello ankush.");
 })

 
app.listen(port, () => {
    console.log('Yes..! your server is runing');
  });
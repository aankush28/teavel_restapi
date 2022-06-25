const express = require('express')
const router = new express.Router();
const persons = require('../models/persons')

//this function use only for check surver in runing or not.
router.get("/anku",(req,res)=>{
    res.send("Hello World !");
})
router.get('/', function (req, res) {
    res.send('Hello World')
    console.log("it's working..");
  })
 
  /* router.post('/persons', function (req, res) {
    res.send('Hello World')
    const user = new persons(req.body)
    user.save().then(()=>{
      res.status(201).send(user)
      console.log("it's data filled work");
    }).catch((err)=>{
      res.status(400).send(err)
     
    })
    console.log(req.body);
  })
   */
 //this function use only for post data in database.
  router.post('/persons', async (req, res) => {
    try {
      const user = new persons(req.body)
      const createpersons = await user.save();
      res.status(201).send(createpersons)
    } catch (err) {
      res.status(400).send(err)
      console.log("yes erroe in async");
    }
    console.log(req.body);
  })
  //this function use only for reads data in database.
  router.get('/persons', async (req, res) => {
    try {
      const personData = await persons.find()
      res.send(personData)
      console.log(personData);
      if (!personData) {
        return res.status(404).send()
      } else (
        res.send(personData)
      )
    } catch (e) {
      res.send(e)
      console.log(e);
    }
  })
 
    //this function use only for read a proper  data in database .
  router.get('/persons/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      const personData = await persons.findById({ _id });
      console.log(personData);
      if (!personData) {
        return res.status(404).send()
      } else (
        res.send(personData)
      )
    } catch (e) { res.send(e) }
  })
   //this function use only for update a data in database.
  router.patch('/persons/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      const updatepersons = await persons.findByIdAndUpdate(_id, req.body, {
  new:true
      });
  res.send(updatepersons);
 
    } catch (err) {
      res.status(400).send(err)
      console.log("yes erroe in async");
    }
  })
   //this function use only for delete a data in database.
  router.delete('/persons/:id',async(req,res)=>{
    try{
      const deletepersons = await persons.findByIdAndDelete(req.params.id);
      if(!req.params.id){
        return res.status(400).send()
      }else{
        res.send(deletepersons);
      }
    }catch(err){
      res.status(500).send(err)
      console.log("yes erroe in async");
    }
  })
module.exports = router
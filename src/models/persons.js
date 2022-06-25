const mongoose = require('mongoose');
var validator = require('validator');

const personsSchema = new  mongoose.Schema({
    name:{
        type :String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[3,"minmum three latter"],
        maxlength:25,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid');
            }
        }
    }, 
    number: {
        type:Number,
        required:true,
        trim:true,
        minlength:10,
        maxlength:10,
      
    },
    to: {
        type:String,
        trim:true,
        required:true,
        
    },
    from: {
        type:String,
        trim:true,
        required:true,
        
    },
    date: {
        type:String,
        trim:true,
        required:true,
        
    },
    
    active: Boolean,
    date :{
          type:Date,
          default:Date.now
    }
})
//models......
const persons = new mongoose.model('persons',personsSchema)
module.exports = persons;
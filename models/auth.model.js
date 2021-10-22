const mongoose = require("mongoose");
const DB_URL = 'mongodb://localhost:27017/DB';
const jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");

let userScheme = mongoose.Schema({
  username : String,
  email : String,
  password : String,
  isAdmin : {
      type : Boolean,
      default : false
  },
}); 
let User = mongoose.model('user',userScheme);

exports.createNewUser = (username,email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            return User.findOne({username:username})
        }).then(user =>{
            if(user)
            {
                mongoose.disconnect();
                reject("This User Name is used");
            }
            else
            {
                return User.findOne({email:email})
            }
        }).then(user => {
            if(user)
            {
                mongoose.disconnect();
                reject("This Email is used");
            }
            else 
            {
                return bcrypt.hash(password,10); 
            } 
        }).then((hashedPassword) =>{
            let user = new User({
                username:username,
                email:email,
                password:hashedPassword
            })
            return user.save();
        }).then(()=>{
            mongoose.disconnect();
            resolve();
        }).catch(err=>{
            mongoose.disconnect(),
            reject()
        })
    })
}

exports.login = (email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL).then(()=>{
            return user = User.findOne({email:email})
           }).then((user)=>{
            if(!user){
                mongoose.disconnect();
                reject("This Email not found please Register First")
            }
            else{
               bcrypt.compare(password,user.password)
                .then((check)=>{
                    if(!check){
                        mongoose.disconnect();
                        reject("Password isn't Correct");
                    }
                    else{
                        mongoose.disconnect();
                        resolve({
                            id:user._id,
                            isAdmin:user.isAdmin
                        })
                    } 
                })
            }
        }).catch(err => {
            mongoose.disconnect();
            reject();
        })
    })
}
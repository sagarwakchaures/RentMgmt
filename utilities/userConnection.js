const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017/eduCrack';
const userConnection = {};

const userSchema = new Schema({
    userName : { type:String,required:true },
    userId: { type: Number ,required:true},
    email: { type:String,required:true },
    password : { type: String,required:true },
    address : { type: String },
    mobileNo : { type: Number }
},
{
    timestamps : true
},
{
 collection : "Users"
});


userConnection.getuserConnection = () =>{
   return mongoose.connect(url,{}).then((db)=>{
        return db.model('Users',userSchema,'Users');
    }).catch((e)=>{
        let err = new Error("Unable to connect db");
        throw err;
    });
}

module.exports = userConnection;
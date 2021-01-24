const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017/eduCrack';
const rentConnection = {};

const rentSchema = new Schema({
    name : { type:String,required:true },
    rentId: { type: Number ,required:true},
    price: { type:Number,required:true },
    userId : { type: Number,required:true },
    manufactureDate : { type: Date },
    isFree: {type: Boolean}
},
{
    timestamps : true
},
{
 collection : "Rents"
});


rentConnection.getrentConnection = () =>{
   return mongoose.connect(url,{}).then((db)=>{
        return db.model('Rents',rentSchema,'Rents');
    }).catch((e)=>{
        let err = new Error("Unable to connect db");
        throw err;
    });
}

module.exports = rentConnection;
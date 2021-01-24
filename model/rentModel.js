const rentConnection = require('../utilities/rentConnection');
const rentModel = {};
/*
create the rent
*/
rentModel.createRent = (obj) =>{
    return rentConnection.getRentConnection().then((rentModel)=>{
        return rentModel.create(obj).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
update the rent
*/
rentModel.updateRent = (userId,userObj) =>{ 
    return rentConnection.getRentConnection().then((rentModel)=>{
        return rentModel.updateOne({ userId:userId },{ $set: userObj }).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
delete the rent
*/
rentModel.deleteRent = (userId) => {
    return rentConnection.getRentConnection().then((rentModel)=>{
        return rentModel.deleteOne({ userId:userId }).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}


/*
delete the rent
*/
rentModel.generateRandomRentId = () => {
    return rentConnection.getRentConnection().then((rentModel)=>{
        return rentModel.findOne({}).sort({createdAt:-1}).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

module.exports = rentModel;
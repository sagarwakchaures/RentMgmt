const userConnection = require('../utilities/userConnection');
const userModel = {};
/*
create the user
*/
userModel.createUser = (obj) =>{
    return userConnection.getuserConnection().then((userModel)=>{
        return userModel.create(obj).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
update the user
*/
userModel.updateUser = (userId,userObj) =>{ 
    return userConnection.getuserConnection().then((userModel)=>{
        return userModel.updateOne({ userId:userId },{ $set: userObj }).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
delete the user
*/
userModel.deleteUser = (userId) => {
    return userConnection.getuserConnection().then((userModel)=>{
        return userModel.deleteOne({ userId:userId }).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}


/*
delete the user
*/
userModel.generateRandomUserId = () => {
    return userConnection.getuserConnection().then((userModel)=>{
        return userModel.findOne({}).sort({createdAt:-1}).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

module.exports = userModel;
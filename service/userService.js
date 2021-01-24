/*
interact with model & writing the bussiness logic
*/
const userModel = require('../model/userModel');
const userService = {};
/*
delete the user
*/
userService.deleteUser = (userId) =>{
    if (!userId) {
        let userIdErr = new Error('user id is missing !!!');
        userIdErr.status = 400;
        throw userIdErr;
    }
    return userModel.deleteUser(userId).then((res)=>{
        return res;
    });
}

/*
create the user
*/
userService.createUser = async(userObj) =>{
    let userName = userObj.userName;
    if (!userName) {
        let nameErr = new Error('Missing the username');
        nameErr.status = 400;
        throw nameErr;
    }
    let email = userObj.email;
    if (!email) {
        let emailErr = new Error('Missing the email');
        emailErr.status = 400;
        throw emailErr;
    }
    let password = userObj.password;
    if (!password) {
        let passwordErr = new Error('Missing the password');
        passwordErr.status = 400;
        throw passwordErr;
    }
    let address = userObj.address ? userObj.address: null;
    let mobileNo = userObj.mobileNo ? userObj.mobileNo: null;
    let userId = await userService.createUserId();
    let obj = {
        userId,
        userName,
        email,
        password,
        address,
        mobileNo
    };
    return userModel.createUser(obj).then((res)=>{
        return res;
    });
}

/*
create the auto increment user Id 
*/
userService.createUserId = async() => {
    return userModel.generateRandomUserId().then((res)=>{
        let userId;
        if (res) {
            let data = res;
            userId = Number(data.userId) + 1;
        } else {
            userId = 1;
        }
        return userId;
    });
}

/*
update the user
*/
userService.updateUser = (userId,userObj) =>{
    if (userId === undefined ){
        throw new Error("user id is required !!!!");
    }
    return userModel.updateUser(userId,userObj).then((res)=>{
        return res;
    });
}

module.exports = userService;
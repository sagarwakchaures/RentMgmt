/*
interact with model & writing the bussiness logic
*/
const rentModel = require('../model/rentModel');
const rentService = {};
/*
delete the rent
*/
rentService.deleteRent = (rentId) =>{
    if (!rentId) {
        let rentIdErr = new Error('rent id is missing !!!');
        rentIdErr.status = 400;
        throw rentIdErr;
    }
    return rentModel.deleteUser(rentId).then((res)=>{
        return res;
    });
}

/*
create the user
*/
rentService.createRent = async(rentObj) =>{
    let name = rentObj.userName;
    if (!name) {
        let nameErr = new Error('Missing the name');
        nameErr.status = 400;
        throw nameErr;
    }
    let price = rentObj.price;
    if (!price) {
        let priceErr = new Error('Missing the price');
        priceErr.status = 400;
        throw priceErr;
    }
    let address = userObj.address ? userObj.address: null;
    let mobileNo = userObj.mobileNo ? userObj.mobileNo: null;
    let rentId = await rentService.createRentId();
    let obj = {
        rentId,
        name,
        price,
        manufactureDate: new Date(),
        userId:rentObj.userId
    };
    return rentModel.createRent(obj).then((res)=>{
        return res;
    });
}

/*
create the auto increment user Id 
*/
rentService.createRentId = async() => {
    return rentModel.generateRandomRentId().then((res)=>{
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
rentService.updateRent = (userId,userObj) =>{
    if (userId === undefined ){
        throw new Error("user id is required !!!!");
    }
    return rentModel.updateRent(userId,userObj).then((res)=>{
        return res;
    });
}

module.exports = rentService;
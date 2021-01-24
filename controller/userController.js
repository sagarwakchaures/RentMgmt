const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const userService = require('../service/userService');
const secret = require('../config');

/*
create the user
*/
router.post('/create',(req,res,next)=>{
    let userObj = req.body;
    userService.createUser(userObj).then(async(response)=>{
        let userId = response.userId;
        let email = response.email;
        let obj = {
            userId,
            email
        }
        const token = await jwt.sign(obj, secret['secret'],{ expiresIn: 18000 });
        res.json({
            token:token,
            msg:"User is created successfully !!!"
        });
    }).catch((err)=>{
        next(err);
    });
});

/*
delete the user 
*/
router.delete('/delete/:userId',(req,res,next)=>{
    let userId = req.param.userId;
    userService.deleteUser(userId).then((response)=>{
        res.json({'msg': "User is deleted successfully"});
    }).catch((err)=>{
        next(err);
    });
});

/*
update the user
*/
router.put('/update/:userId',(req,res,next)=>{
    let userId = req.param.userId;
    let userObj = req.body;
    userService.updateUser(userId,userObj).then((response)=>{
        res.json({'msg': "User is updated successfully"});
    }).catch((err)=>{
        next(err);
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const rentService = require('../service/rentService');
/*
create the rent
*/
router.post('/create',(req,res,next)=>{
    let rentObj = req.body;
    rentObj.userId = req.body.currentUserId;
    rentService.createRent(rentObj).then(async(response)=>{
        res.json({
            msg:"Rent is created successfully !!!"
        });
    }).catch((err)=>{
        next(err);
    });
});

/*
delete the user 
*/
router.delete('/delete/:rentId',(req,res,next)=>{
    let rentId = req.param.rentId;
    rentService.deleteRent(rentId).then((response)=>{
        res.json({'msg': "Rent is deleted successfully"});
    }).catch((err)=>{
        next(err);
    });
});

/*
update the user
*/
router.delete('/update/:rentId',(req,res,next)=>{
    let rentId = req.param.rentId;
    let rentObj = req.body;
    rentObj.userId = req.body.currentUserId;
    rentService.updateRent(rentId,rentObj).then((response)=>{
        res.json({'msg': "Rent is updated successfully"});
    }).catch((err)=>{
        next(err);
    });
});

module.exports = router;

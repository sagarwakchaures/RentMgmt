const fs = require('fs');

function errorLogger(err,req,res,next) {
    fs.appendFile('errorLogger.txt', err.stack, function (e) {
        if (e) throw e;
    });
    if (err){
        res.status(500);
        res.json({"message":err.message});
    }
}

module.exports = errorLogger;
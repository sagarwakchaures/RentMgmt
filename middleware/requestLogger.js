const fs = require('fs');

function requestLogger(req,res,next) {
    fs.appendFile('requestLogger.txt', req.url, function (err) {
        if (err) throw err;
    });
    next();
}

module.exports = requestLogger;
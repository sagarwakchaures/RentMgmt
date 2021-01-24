const jwt = require("jsonwebtoken");
const config = require('../config');

module.exports = async(req,res,next) =>{
    let token = req.headers['x-access-token'];
    let url = req.url.split('/');
    let flag = false;
    if (url) {
        let allowWithoutToken = url[2] + '/'+  url[3];
        if (allowWithoutToken == 'user/create') {
            flag = true; 
        }
    }
    if (!flag) {
        if (!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }
        let decoded;   
        try {
            decoded = await jwt.verify(token, config.secret);
        } catch(e) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.body.currentUserId = decoded.userId;
    }
    next(req);
}

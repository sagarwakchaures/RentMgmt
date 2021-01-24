const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const indexController = require('./controller/indexController');
const requestLogger = require('./middleware/requestLogger');
const errorLogger = require('./middleware/errorLogger');
const checkValidToken = require('./middleware/verifyToken');
const port = 3003; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

//log all the requests in requestLogger.txt
app.use(requestLogger);
//end
app.use(checkValidToken);
app.use('/',indexController);
//log all the errors in errorLogger.txt
app.use(errorLogger);
//end

app.listen(port,()=>{
    console.log(`listing on port ${port}`);
});
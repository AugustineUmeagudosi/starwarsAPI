require('dotenv').config();
const Response = require('./responseMessages.js');

module.exports = function errorHandler ( error, req, res, next ) {
    let code = error.statusCode ? error.statusCode : 500;
    let message = "Ops!. Something went south :(";

    if(error.message === "jwt malformed" ) {
        message = 'Invalid or expired token';
        code = 401;
    }

    if(error.message === "jwt expired" ) {
        message = 'Session expired. Kindly login to continue.';
        code = 419;
    }
    
    if(process.env.NODE_ENV !== 'production') return Response.error(res, error.message, code);
    return Response.error(res, message, code);
};
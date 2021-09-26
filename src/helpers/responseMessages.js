const status = require('http-status');

module.exports = {
    info: (res, message, code, data = []) => res.status(code).json({
        status: 'success',
        message,
        data,
    }),
        
    error:  (res, message = '', code = 500) => res.status(code).json({
        status: 'error',
        message: message || status[`${code}_NAME`],
    })
};
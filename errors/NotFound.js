const CustomAPIError = require('./CustomAPIError.js')
const { StatusCodes } = require('http-status-codes');

class NotFoundError extends CustomAPIError{
    constructor(message) {
        super(message)
        this.statusCode = 404  
    }   
}

module.exports = NotFoundError
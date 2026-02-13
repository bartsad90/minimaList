const customAPIError = require('./CustomAPIError')
const { StatusCodes } = require('http-status-codes')

class UnauthorizedError extends customAPIError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthorizedError
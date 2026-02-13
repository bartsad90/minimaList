const CustomAPIError = require("./CustomAPIError")
const BadRequestError = require('./BadRequest')
const NotFoundError = require('./NotFound')
const UnauthorizedError = require('./Unauthorized')

module.exports = {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    CustomAPIError,
}
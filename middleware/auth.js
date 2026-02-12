const jwt = require('jsonwebtoken')

const authenticateUser = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error('Provide a valid token')
    }

    const token = authHeader.split(' ')[1]

    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.user = {_id: payload._id, name: payload.name, email: payload.email}
    next()
}

module.exports = authenticateUser
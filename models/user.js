const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please provide name']
    },
    email: {
        type: String, 
        required: [true, 'Please provide email']
    },
    password: {
        type: String, 
        required: [true, 'Please provide password'],
    }, 
})

// a prehook which hashes the password
UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})
// create token and compare methods
UserSchema.methods.createJWT = function() {
    return jwt.sign({_id:this._id, name:this.name, email:this.email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}


UserSchema.methods.compare = async function (candidatePassword) {
    const isPasswordSame = await bcrypt.compare(candidatePassword, this.password)
    return isPasswordSame
}



const userModel = mongoose.model('user', UserSchema)

module.exports = userModel
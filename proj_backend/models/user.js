const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuidv1')
const {ObjectId} = mongoose.Schema

const userSchema = new mongoose.Schema(
    {   
        username: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        encry_password: {
            type: String,
            required: true
        },
        salt: String,
        links: [{
            type: ObjectId,
            ref: 'URL'
        }]
    },
    { timestamps: true }
)

userSchema.virtual('password')
    .set((function (password) {
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password)
    }))
    .get(function () {
        return this._password
    })

userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword: function (plainpassword) {
        if(!plainpassword) return ""
        try {
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
        } catch (err) {
            return ""
        }
    }
}

module.exports = mongoose.model('User', userSchema)
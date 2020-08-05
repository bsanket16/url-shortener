const User = require('../models/user')
const { validationResult } = require('express-validator')
const  jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

//signup controller
exports.signup = (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : `${errors.array()[0].msg}`
        })
    }

    const user = new User(req.body)
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err: 'Not able to store user in database'
            })
        }
        res.json({
            id : user._id,
            username : user.username,
            email : user.email
        })
    })
}

//login controller
exports.login = (req, res) => {
    const errors = validationResult(req)

    const {email, password} = req.body

    if(!errors.isEmpty()){
        return res.status(422).json({
            error : `${errors.array()[0].msg}`
        })
    }

    User.findOne({ email }, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error : 'Email does not exist'
            })
        }

        if(!user.authenticate(password))  {
            return res.status(401).json({
                error : 'Incorrect password'
            })
        }

        //create token
        const token = jwt.sign({ _id: user.id }, process.env.SECRET)
        
        //cookie
        res.cookie('token', token, {expire: new Date() + 9999})

        //response to frontend
        const {_id, username, email, links} = user
        return res.json({token, user: {_id, username, email, links}})

    })

}

//logout controller
exports.logout = (req, res) => {
    res.clearCookie('token')
    res.json({
        message: 'logout successfully!'
    })
}

//protected routes
exports.isSignedIn = expressJwt({   
    secret: process.env.SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'
})  

// //custom middleware
exports.isAuthenticated = (req, res, next) => {
    let checker = req.profile && req.auth && req.profile._id == req.auth._id
    if(!checker){
        return res.status(403).json({
            error: "ACCESS DENIED"
        })
    }
    next()
}
const User = require('../models/user')

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                error : 'No User Found'
            })
        }
        req.profile = user
        next()
    })
}

//get all urls
//populate links
//filter out links with userId
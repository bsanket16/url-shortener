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

exports.getUserLinks = async (req, res) => {
    try {
        await User.findOne({ _id: req.params.userId })
        .populate('links').exec((err, links) => {
            if(err){
                res.status(201).json({
                    error: 'No Links Found'
                })
            }
            else {
                res.send(links.links)
            }
        })
    } catch (error) {
        res.status(400).json({
            error : 'No URLs Shortened'
        })
    }
}
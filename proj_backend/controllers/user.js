const User = require('../models/user')

// exports.getUserById = (req, res, next, id) => {
//     User.findById(id).exec((err, user) => {
//         if(err || !user){
//             return res.status(400).json({
//                 error : 'No User Found'
//             })
//         }
//         req.profile = user
//         next()
//     })
// }

exports.getUserLinks = async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId })
    .populate('links')
    res.send(user)
}
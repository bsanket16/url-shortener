const express = require('express')
const router = express.Router()

const { getUserLinks } = require('../controllers/user')
const { isSignedIn, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')

router.param('userId', getUserById)

router.get('/urls/:userId', isSignedIn, isAuthenticated, getUserLinks)

module.exports = router
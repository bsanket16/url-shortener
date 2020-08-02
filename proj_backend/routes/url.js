const express = require('express')
const router = express.Router()

const { shortenURL, publicShortenURL, redirectURL } = require('../controllers/url')
const { isSignedIn, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')

router.param('userId', getUserById)

//routes for logged in users
router.post('/url/shorten/:userId', isSignedIn, isAuthenticated, shortenURL)

//public route
router.post('/url/shorten', publicShortenURL)

// redirect
router.get('/:code', redirectURL)

module.exports = router
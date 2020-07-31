const express = require('express')
const router = express.Router()
const { shortenURL, publicShortenURL } = require('../controllers/url')

//routes for logged in users
router.post('/url/shorten/:userId', shortenURL)

//public route
router.post('/url/shorten', publicShortenURL)

module.exports = router
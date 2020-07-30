const express = require('express')
const router = express.Router()
const { shortenURL } = require('../controllers/url')
//controllers

//routes
router.post('/url/shorten', shortenURL)


module.exports = router


//api/urls/create/:userId
//params
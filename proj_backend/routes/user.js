const express = require('express')
const router = express.Router()

const { getUserLinks } = require('../controllers/user')

router.get('/urls/:userId', getUserLinks)

module.exports = router
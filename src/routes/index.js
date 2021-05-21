const express = require('express')
const router = express.Router()
const beatport = require('../controllers/beatportControllers')
const afrohouse = require('../controllers/afroHouseController')

// const url = 'https://www.beatport.com/genre/afro-house/89'

router.use('/beatportTop10', beatport)
router.use('/afroHouseTop10', afrohouse)

module.exports = router
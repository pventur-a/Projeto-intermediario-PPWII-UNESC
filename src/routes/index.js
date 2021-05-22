const express = require('express')
const router = express.Router()
const beatport = require('../controllers/beatportControllers')
const afrohouse = require('../controllers/afroHouseController')
const info = require('../controllers/info')

// const url = 'https://www.beatport.com/genre/afro-house/89'

router.use('/beatport', beatport)
router.use('/afroHouse', afrohouse)
router.use('/info', info)

module.exports = router
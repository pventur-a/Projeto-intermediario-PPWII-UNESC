
const express = require('express')
const router = express.Router()
const music = require('./baseController')
const url = 'https://www.beatport.com/'

router.get('/', async (req, res,) => {

  // query string
  const consulta = req.query.search

  var listMusic = []

  listMusic.push(await music(url))

  if (consulta) {
    const list = listMusic[0].filter(art => art.ARTISTS.toLowerCase().includes(consulta.toLowerCase()))
    if (list) {
      return res.json(list)
    }
  }

  // console.log()
  return res.json(listMusic[0])
})

router.get('/:id', async (req, res,) => {

  let id = req.params.id

  var listMusic = []
  listMusic.push(await music(url))

  // console.log(listMusic[0].length)
  return res.json(listMusic[0][id])
})

module.exports = router
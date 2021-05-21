

const express = require('express')
const router = express.Router()
const axios = require('axios')
const { parse } = require('node-html-parser');


router.get('/', async (req, res,) => {


  // query string
  const consulta = req.query.search
  const url = 'https://www.beatport.com'
  var listMusic = []
  try {

    const { data } = await axios(url)
    const root = parse(data)


    const li = root.querySelectorAll('.bucket-item.ec-item.top-ten-track')
    const remixed = root.querySelectorAll('.top-ten-track-remixed')
    // const links = root.querySelectorAll('.top-ten-track-meta a')
    // console.log(root.querySelectorAll('.top-ten-track-meta a')[0]['_rawAttrs']['href'])

    li.forEach((track, remix, link) => {
      let i = {
        "TRACK": track['_attrs']['data-ec-name'],
        "REMIXED": remixed[remix].textContent,
        "ARTISTS": track['_attrs']['data-ec-d1'],
        "BRAND": track['_attrs']['data-ec-brand'],
        "GENRES": track['_attrs']['data-ec-d3'],
        // "link": url + links[link]['_rawAttrs']['href']
        "timestamp": Date.now()
      }
      return listMusic.push(i)
    })
  } catch (error) {
    console(error)
  }
  if (consulta) {
    const list = listMusic.filter(art => art.ARTISTS.toLowerCase().includes(consulta.toLowerCase()))
    if (list) {
      return res.json(list)
    }
  }
  return res.json(listMusic)
})

router.get('/:id', async (req, res,) => {

  let id = req.params.id

  const url = 'https://www.beatport.com/'
  var listMusic = []
  try {

    const { data } = await axios(url)
    const root = parse(data)


    const li = root.querySelectorAll('.bucket-item.ec-item.top-ten-track')
    const remixed = root.querySelectorAll('.top-ten-track-remixed')
    // const links = root.querySelectorAll('.top-ten-track-meta a')
    // console.log(root.querySelectorAll('.top-ten-track-meta a')[0]['_rawAttrs']['href'])

    li.forEach((track, remix, link) => {
      let i = {
        "TRACK": track['_attrs']['data-ec-name'],
        "REMIXED": remixed[remix].textContent,
        "ARTISTS": track['_attrs']['data-ec-d1'],
        "BRAND": track['_attrs']['data-ec-brand'],
        "GENRES": track['_attrs']['data-ec-d3'],
        // "link": url + links[link]['_rawAttrs']['href']
        "timestamp": Date.now()
      }
      listMusic.push(i)
    })
  } catch (error) {
    console(error)
  }
  // console.log(listMusic)
  res.json(listMusic[id])
})

module.exports = router
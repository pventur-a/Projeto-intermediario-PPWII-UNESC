const axios = require('axios')
const { parse } = require('node-html-parser');

async function music(url) {
  // console.log('Estou na base')

  var listMusic = []
  try {

    // pegando os dados da url, nesse caso o dada
    const { data } = await axios(url)

    // tratamento dos dados da url
    const root = parse(data)

    // pegando a class onde esta a informação desejada
    const li = root.querySelectorAll('.bucket-item.ec-item.top-ten-track')
    const remixed = root.querySelectorAll('.top-ten-track-remixed')
    // const links = root.querySelectorAll('.top-ten-track-meta a')
    // console.log(root.querySelectorAll('.top-ten-track-meta a')[0]['_rawAttrs']['href'])


    li.forEach((track, remix) => {
      var i = {
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
    // retornando a lista de musica
    return listMusic
    
  } catch (error) {
    console.log(error)
  }

}
module.exports = music
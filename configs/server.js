module.exports = function () {

  const express = require('express')
  const router = require('../src/routes');
  const PORT = process.env.PORT || 8080
  const app = express();
  const beatport = '/api/beatport/'
  const afroHouse = '/api/afroHouse'

  app.get('/', (req, res) =>{
    res.send(`<h1>Bem vindo a api music.</h1>
    <p> Utilize os EndPoint abaixo para listar as musicas do site Beatport.</p>
      <li>${beatport}</li>
      <li>${afroHouse}</li
      `)
  })

  app.use('/api', router)

  app.listen(PORT, () => {
    console.log(`Servidor inicializado: localhost:${PORT}`)
  })
}
module.exports = function () {

  const express = require('express')
  const router = require('../src/routes');
  const PORT = process.env.PORT || 8080
  const app = express();

  app.use('/api', router)

  app.listen(PORT, () => {
    console.log(`Servidor inicializado: localhost:${PORT}`)
  })
}
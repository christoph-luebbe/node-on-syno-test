const express = require('express')
const app = express()
const port = 3000
const scanFolder = 'Scans'


app.get('/', (req, res) => {
  res.send('Hallo Welt! Die Uhr spricht: ' + new Date().toString())
  console.log(`Das ist Eintrag 1`)
  console.log(`Das ist Eintrag 3`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

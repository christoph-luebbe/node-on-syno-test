const express = require('express')
const app = express()
const port = 3000
const scanFolder = 'Scans'


app.get('/', (req, res) => {
  res.send('Hallo Welt! Die Uhr spricht: ' + new Date().toString())
  res.send('\nDas ist die zweite Zeile')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

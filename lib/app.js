const express = require('express')
const app = express()
const port = 3000
const scanFolder = 'Scans'
const fs = require('fs)

app.get('/', (req, res) => {
  res.send('Hallo Welt! Die Uhr spricht: ' + new Date().toString())
  console.log('Comment 1')
  console.log('Comment 2')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express')
const hbs = require('hbs')

const app = express()
app.set('view engine', hbs)

app.get('/', (req, resp) => {
  resp.render('index.hbs')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/kamal', (req, res) => {
  res.send('Hello kamal!')
})
app.get('/h1', (req, res) => {
  res.send('<h1> hello kps</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
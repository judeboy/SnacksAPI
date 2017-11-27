const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.disable('x-powered-by')

const snackRoutes = require('./src/routes/snacksR.js')
app.use('/', snackRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app

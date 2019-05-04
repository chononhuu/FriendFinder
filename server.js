const apiRoutes = require('./app/routing/apiRoutes')
const htmlRoutes = require('./app/routing/htmlRoutes')

const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/app/public')))
app.use(express.static(path.join(__dirname, '/public')))

app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
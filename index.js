const express = require('express')

const routes = require('./routes/routes')
const app = express()

app.use(routes)
app.listen(8080, () => console.log("Je tourne sur le port 8080"))
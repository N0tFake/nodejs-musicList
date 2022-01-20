const express = require('express')
const routes = require('./routes')

require('./database/index')

const app = express()

app.use(express.json())
app.use(routes)

app.get("/", (req, res) => res.send("API Music List"))

app.listen(3333, () => console.log('Server running at address: http://localhost:3333'))
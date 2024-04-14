// Loads .env file contents into process.env by default.
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

// Creates an Express application
const pfServer = express()

//use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`)
})

pfServer.get("/", (req, res) => {
 res.status(200).send(`<h1 style="color: red">Project fair started and waiting for client request!!!!</h1>`)
})



const express = require('express')
const app = express()
const productRouter = require('./routes/productRouter')
const DBConnection = require("./db/connect")

app.use('/api/v1/product', productRouter)

async function start() {
  try {
      await DBConnection()
      app.listen(3001, console.log(`server is listening on port 3001...`))
  } catch (err) {
      console.log(err)
  }
}

start()
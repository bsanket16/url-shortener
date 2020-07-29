require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())

//DB connection
mongoose.connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log(`Database connected successfully`)
})

const PORT = process.env.PORT || 5000

//Server
app.listen(PORT, console.log(`App running in ${process.env.NODE_ENV} mode at port ${PORT}`))
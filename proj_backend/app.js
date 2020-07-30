require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Routes
app.use('/api', require('./routes/auth'))
app.use('/api', require('./routes/url'))

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
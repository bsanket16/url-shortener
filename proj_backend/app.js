require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
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

//Routes
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/url'))
app.use('/', require('./routes/user'))

// Serve static assets
if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('../proj_frontend/build'))
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, + '../proj_frontend/build/index.html'))
    })
}

const PORT = process.env.PORT || 5000

//Server
app.listen(PORT, console.log(`App running in ${process.env.NODE_ENV} mode at port ${PORT}`))
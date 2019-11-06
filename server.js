import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const logger = require('morgan');

const app = express()

dotenv.config()
const API_PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

app.get('/home', (req, res) => res.send({ hi: "hello" }))

app.listen(API_PORT, () => console.log(`Running on Port ${API_PORT}`))
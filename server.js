import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
const logger = require('morgan');

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

const PORT = 3001

app.get('/home', (req, res) => res.send({ hi: "hello" }))

app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
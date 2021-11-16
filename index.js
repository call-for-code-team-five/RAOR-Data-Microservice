require('dotenv').config();

const cors = require('cors')
const express = require('express')
const app = express()
const routes = require('./routes')
const port = process.env.PORT || 8001
const COS = require('ibm-cos-sdk');

app.use(cors())

app.get('/', (req, res) => {
    res.send("Main Data Microservice is running")
})

app.use("/api", routes);

app.listen(port, () => {
    console.log('Main Data Microservice is running in', port)
})
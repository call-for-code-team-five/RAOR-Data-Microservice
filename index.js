const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send("Hey there")
})

app.listen(port, () => {
    console.log('Node Server is running in', port)
})
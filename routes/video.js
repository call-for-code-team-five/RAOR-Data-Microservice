const app = require('express')()
const videoController = require('../controller/video')

app.get('/getVideobyId/:id', videoController.getVideobyId)

module.exports = app
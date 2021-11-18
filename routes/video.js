const app = require('express')()
const videoController = require('../controller/video')

app.get('/getVideobyId/:id', videoController.getVideobyId)

app.get("/htmlvideo", function (req, res) {
    res.sendFile(__dirname + "/tempindex.html");
  });

module.exports = app
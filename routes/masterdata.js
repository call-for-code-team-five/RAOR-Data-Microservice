const app = require('express')()
const masterdataController = require('../controller/masterdata')

app.get('/getCountries', masterdataController.getCountries)
app.get('/getPlants', masterdataController.getPlants)
app.get('/getAssets', masterdataController.getAssets)

module.exports = app
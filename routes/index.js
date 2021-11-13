const Router = require("express").Router;

const masterData = require('./masterdata')

const routes = Router()

routes.use('/masterData', masterData)

module.exports = routes
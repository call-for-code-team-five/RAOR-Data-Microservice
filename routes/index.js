const Router = require("express").Router;

const masterData = require('./masterdata')
const video = require('./video')

const routes = Router()

routes.use('/masterData', masterData)
routes.use('/video', video)

module.exports = routes
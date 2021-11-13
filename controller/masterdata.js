const Request = require('express').Request
const Response = require('express').Response
const config = require('../config/config')

const getCountries = async (req=Request, res=Response) => {
    try {
        var data = JSON.stringify({
            "tablename": "master_country",
            "tabledefinition": {
                "country_id": {
                    "type": "INTEGER"
                },
                "country_name": {
                    "type": "STRING"
                },
                "country_coordinates_latitude": {
                    "type": "DOUBLE"
                },
                "country_coordinates_longitude": {
                    "type": "DOUBLE"
                }
            }
        }); 

        let response = await config.getDBResponse(data)
        res.send(response)
        
    } catch (e) {
        console.log(e)
    }
}

const getPlants = () => {

}

const getAssets = () => {

}

module.exports = {getCountries, getPlants, getAssets}
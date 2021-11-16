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
            },
            "query" : "findAll"
        }); 

        let response = await config.getDBResponse(data)
        res.send(response)
        
    } catch (e) {
        console.log(e)
    }
}

const getPlants = async (req=Request, res=Response) => {
        try {
            var data = JSON.stringify({
                "tablename": "master_plant",
                "tabledefinition": {
                    "plant_id": {
                        "type": "INTEGER"
                    },
                    "plant_name": {
                        "type": "STRING"
                    },
                    "plant_coordinates_latitude": {
                        "type": "DOUBLE"
                    },
                    "plant_coordinates_longitude": {
                        "type": "DOUBLE"
                    },
                    "country_id": {
                        "type": "INTEGER"
                    }
                },
                "query" : "findAll"
            }); 
    
            let response = await config.getDBResponse(data)
            res.send(response)
            
        } catch (e) {
            console.log(e)
    }

}

const getAssets  = async (req=Request, res=Response) => {
    try {
        var data = JSON.stringify({
            "tablename": "master_assets",
            "tabledefinition": {
                "asset_id": {
                    "type": "INTEGER"
                },
                "asset_name": {
                    "type": "STRING"
                },
                "asset_coordinates_latitude": {
                    "type": "DOUBLE"
                },
                "asset_coordinates_longitude": {
                    "type": "DOUBLE"
                },
                "plant_id": {
                    "type": "INTEGER"
                }
            }
        }); 

        let response = await config.getDBResponse(data)
        res.send(response)
        
    } catch (e) {
        console.log(e)
}


}

module.exports = {getCountries, getPlants, getAssets}
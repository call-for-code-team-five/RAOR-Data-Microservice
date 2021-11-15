const Request = require('express').Request
const Response = require('express').Response
const config = require('../config/config')

const getVideobyId = async (req=Request, res=Response) => {
    try {
        const id = parseInt(req.params.id);
        var data = JSON.stringify({
            "tablename": "drone_footages",
            "tabledefinition": {
                "footageid": {
                    "type": "INTEGER"
                },
                "footage_key": {
                    "type": "STRING"
                },
                "plantid": {
                    "type": "INTEGER" 
                }
            },
            "id" : id,
            "query" : "findbyId"
        }); 
        let response = await config.getDBResponse(data)
        res.setHeader("Content-Type","video/mp4")
        // let objectStoreResponse = await config.getObjectStoreResponse(response)
        res.send(response)
        
    } catch (e) {
        console.log(e)
    }
}




module.exports = {getVideobyId}
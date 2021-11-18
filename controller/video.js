const Request = require('express').Request
const Response = require('express').Response
const config = require('../config/config')

const fs = require('fs')

const getVideobyId = async (req = Request, res = Response) => {
    try {
        // const id = parseInt(req.params.id);
        // var data = JSON.stringify({
        //     "tablename": "drone_footages",
        //     "tabledefinition": {
        //         "footageid": {
        //             "type": "INTEGER"
        //         },
        //         "footage_key": {
        //             "type": "STRING"
        //         },
        //         "plantid": {
        //             "type": "INTEGER" 
        //         }
        //     },
        //     "id" : id,
        //     "query" : "findbyId"
        // }); 
        // let response = await config.getDBResponse(data)
        // res.setHeader("Content-Type","video/mp4")
        // // let objectStoreResponse = await config.getObjectStoreResponse(response)
        // res.send(response)

        let videoId = req.params['id']

        const range = req.headers.range;
        if (!range) {
            res.status(400).send("Requires Range header");
        }

        // get video stats (about 91MB)
        const videoPath = __dirname + "/drone_footage_" + videoId + ".mp4";
        const videoSize = fs.statSync(__dirname + "/drone_footage_" + videoId + ".mp4").size;
        
        // Parse Range
        // Example: "bytes=32324-"
        let pow = parseInt(videoSize/10000000)
        // console.log("pow", pow)

        const CHUNK_SIZE = 10 ** 9; // 1MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

        // console.log(videoSize, CHUNK_SIZE, start, end)

        // Create headers
        const contentLength = end - start + 1;
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };

        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);

        // create video read stream for this particular chunk
        const videoStream = fs.createReadStream(videoPath, { start, end });

        // Stream the video chunk to the client
        videoStream.pipe(res);



    } catch (e) {
        console.log(e)
    }
}




module.exports = { getVideobyId }
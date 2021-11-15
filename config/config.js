var axios = require('axios')

const getDBResponse = async (data) => {
    var config = {
        method: 'post',
        url: process.env.CONFIGSERVICEURL + '/getDBConfiguration',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    let response = await axios(config)
    return response.data;

}

const getObjectStoreResponse = async () => {
    var config = {
        method: 'get',
        url: process.env.CONFIGSERVICEURL + '/getObjectStoreConfiguration',
        headers: {}
    };

    let response = await axios(config)
    return response.data;

}

module.exports = { getDBResponse, getObjectStoreResponse }
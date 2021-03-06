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

const getObjectStoreResponse = async (data) => {
    var config = {
        method: 'post',
        url: process.env.CONFIGSERVICEURL + '/getObjectStoreConfiguration',
        headers: {},
        data: data
    };

    let response = await axios(config)
    return response.data;

}

module.exports = { getDBResponse, getObjectStoreResponse }
const fetch = require('node-fetch');


async function getAllComuni() {
    let url = "https://api.pollo.host/istat-api/?query=comuni";
    let settings = {method: "Get"};
    return fetch(url, settings)
        .then(res => {return res.json()})
}

async function getComuniOf(provincia){
    let url = "https://api.pollo.host/istat-api/?query=comunidiprovincia&provincia="+provincia;
    let settings = {method: "Get"};
    return fetch(url, settings)
        .then(res => {return res.json()})
}

module.exports = {
    getAllComuni,
    getComuniOf
}

const fetch = require('node-fetch');


async function getAllRegioni() {
    let url = "https://api.pollo.host/istat-api/?query=regioni";
    let settings = {method: "Get"};
    return fetch(url, settings)
        .then(res => {return res.json()})
}

module.exports = {
    getAllRegioni

}

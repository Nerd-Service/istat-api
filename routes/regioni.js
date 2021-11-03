const express = require('express');
const router = express.Router();
const regioni = require('../services/regioni');

/* GET Plugins. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await regioni.getAllRegioni());
    } catch (err) {
        console.error(`Error while getting regioni `, err.message);
        next(err);
    }
});

module.exports = router;

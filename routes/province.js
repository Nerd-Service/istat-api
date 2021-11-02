const express = require('express');
const router = express.Router();
const province = require('../services/province');

/* GET Plugins. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await province.getAllProvince());
    } catch (err) {
        console.error(`Error while getting province `, err.message);
        next(err);
    }
});

module.exports = router;

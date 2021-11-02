const express = require('express');
const router = express.Router();
const comuni = require('../services/comuni');

/* GET Plugins. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await comuni.getAllComuni());
    } catch (err) {
        console.error(`Error while getting province `, err.message);
        next(err);
    }
});

router.get('/:provincia', async function(req, res, next) {
    try {
        //req.params.provincia = 'provincia';
        res.json(await comuni.getComuniOf(req.params['provincia']));
    } catch (err) {
        console.error(`Error while getting province `, err.message);
        next(err);
    }
});

module.exports = router;

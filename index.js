const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const provinceRouter= require('./routes/province');
const comuniRouter= require('./routes/comuni');

const app = express();
const port = 3000;

app.use(cors())

app.use(bodyParser.json({limit: '50mb'}));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    })
);

app.get('/', (req, res) => {
    res.json({'message': 'API Ready'});
})

app.use('/province', provinceRouter)
app.use('/comuni', comuniRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

app.listen(process.env.PORT || 3000,() => {
    console.log(`Ready...`)
});


'use strict'

let express = require('express')
let bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 88;

app.get('/', (req, res, next) => {
    res.json({"result": "ok"});
});
app.post('/webhook', (req, res, next) => {
    res.json({"result": "ziv"});
});

app.listen(port);

console.log('Your application is running on http://localhost:' + port);
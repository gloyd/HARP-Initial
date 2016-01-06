/************************************
* Filename: server.js
* Author:   J. Brysch
* Date :    01/04/2016
************************************/
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('../HARP-S.properties');
var databaseName = properties.get('DBName');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/' + databaseName);

var RaspNode     = require('./models/raspNode');

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
    // TODO - Do logging!
    console.log('Do some event logging!');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Huzzzzzaaaaaah!!! HARP Server API is up and running!!!' });   
});

router.route('/raspNodes')
    .post(function(req, res) {
        //TODO - Do some data validation!
        var raspNode = new RaspNode();
        raspNode.name = req.body.name;
        raspNode.ip = req.body.ip;
        raspNode.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'RaspNode created!' });
            }
        });
    })
    .get(function(req, res) {
        RaspNode.find(function(err, raspNodes) {
            if (err) {
                res.send(err);
            } else {
                res.json(raspNodes);
            }
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
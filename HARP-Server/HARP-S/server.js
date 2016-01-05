// server.js

// BASE SETUP
// =============================================================================
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/testing');

var RaspNode     = require('./models/raspNode');

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    
    // TODO - Do logging!
    console.log('Do some event logging!');
    
    next();
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Huzzzzzaaaaaah!!! HARP API is up and running!!!' });   
});

// more routes for our API will happen here

router.route('/raspNodes')

    // create a bear (accessed at POST http://localhost:8080/api/raspNode)
    .post(function(req, res) {

        //TODO - Do some data validation!
        var raspNode = new RaspNode();
        raspNode.name = req.body.name;
        raspNode.ip = req.body.ip;

        raspNode.save(function(err) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: 'RaspNode created!' });
            }
        });
    })
    .get(function(req, res) {
        RaspNode.find(function(err, raspNodes) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(raspNodes);
            }
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
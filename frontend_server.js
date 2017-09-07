var r = require('./request_wrapper.js');
var Promise = require('bluebird');

var host = 'http://localhost';
var port = 3000;
var journey_port = 3002;

var address = make_url(host, port);

var journey_address = make_url(host, journey_port);

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

function make_url(host, port) {
    return host + ':' + port;
}

var monitor = function () {

};
var get_timeout = require("./get");

app.route('/get_next_bus/').get(function (req, res) {

    get_timeout(journey_address + "/next_bus/"
        , {
            line_id: req.query.line_id,
            stop_id: req.query.stop_id
        })
        .then(function(data){
            console.log("Esta es la posta de la parada: " + data);
            res.json(data);
        })
        .catch(function(error) {
             console.error("Se rompió la parada :(");
             res.status(500).send(JSON.stringify(error));
        });
});

app.route('/line_status/').get(function (req, res) {
    get_timeout(journey_address + "/line_status/"
        , {
            line_id: req.query.line_id
        })
        .then(function(data){
            console.log("Esta es la posta del bondi: " + JSON.stringify(data));
            res.json(data);
        })
        .catch(function(error) {
             console.error("Se rompió el bondi :(");
             res.status(500).send('Se rompió el bondi');
        });
});


var server = app.listen(port, function () {

    console.log("Initializing node in port " + server.address().port + "....");

    var suffix = 'Empezando servidor en el puerto ' + server.address().port;

    console.log(suffix);

    return server;
});

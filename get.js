"use strict";

var Client = require('node-rest-client').Client;
var Promise = require('bluebird');

module.exports = function (url, parameters) {
    return new Promise(function(resolve, reject){
	    var client = new Client();

	    client.get(url, {
	        parameters: parameters
	    }, function (data, incomingMessage) {
	        if (incomingMessage.statusCode > 299)
	            reject(data);
	        else
	        	resolve(data);
	    });
    });
};
/**
 * Created by frederikolesen on 01/12/14.
 */
var http = require('http');


exports.JSONRequestPost = function (host, port, path, obj, callback) {
    var postdata = JSON.stringify(obj);
    var headers = {
        'Content-Type': 'application/json',
        'Content-Length': postdata.length
    };

    var options = {
        host: host,
        port: port,
        path: path,
        method: 'POST',
        headers: headers
    };

// Setup the request.  The options parameter is
// the object we defined above.
    var req = http.request(options, function (res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function (data) {
            responseString += data;
        });

        res.on('end', function () {
            var resultObject = JSON.parse(responseString);
        });
    });

    req.on('error', function (e) {
        // TODO: handle error.
    });
    console.log("You are through the JSONrequest POST part");
    req.write(postdata);
    req.end();
}

exports.JSONRequestPut = function (host, port, path, obj, callback) {
    var postdata = JSON.stringify(obj);
    var headers = {
        'Content-Type': 'application/json',
        'Content-Length': postdata.length
    };

    var options = {
        host: host,
        port: port,
        path: path,
        method: 'PUT',
        headers: headers
    };

// Setup the request.  The options parameter is
// the object we defined above.
    var req = http.request(options, function (res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function (data) {
            responseString += data;
        });

        res.on('end', function () {
            var resultObject = JSON.parse(responseString);
        });
    });

    req.on('error', function (e) {
        // TODO: handle error.
    });
    console.log("You are through the JSONrequest PUT part");
    req.write(postdata);
    req.end();

}

exports.JSONRequestDelete = function (host, port, path, obj, callback) {
    var postdata = JSON.stringify(obj);
    var headers = {
        'Content-Type': 'application/json',
        'Content-Length': postdata.length
    };

    var options = {
        host: host,
        port: port,
        path: path,
        method: 'DELETE',
        headers: headers
    };

// Setup the request.  The options parameter is
// the object we defined above.
    var req = http.request(options, function (res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function (data) {
            responseString += data;
        });

        res.on('end', function () {
            var resultObject = JSON.parse(responseString);
        });
    });

    req.on('error', function (e) {
        // TODO: handle error.
    });
    console.log("You are through the JSONrequest DELETE part");
    req.write(postdata);
    req.end();
}

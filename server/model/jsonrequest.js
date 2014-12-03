/**
 * Created by frederikolesen on 01/12/14.
 */
var http = require('http');


exports.JSONRequestPost = function (host, port, path, obj, callback) {
    var postdata = JSON.stringify(obj);
    var options = {
        host: host,
        port: port,
        path: path,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postdata.length
        }
    }

    console.log("Postdata: " + postdata);
    console.log("You are in error JSONRequest");

    var request = http.request(options, function (response) {
        console.log("You are in error JSONRequest request");
        var result = "";
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            result += chunk;
        });

        response.on('end', function () {
            callback(null, JSON.parse(result));
        })

        response.on('error', function (e) {

            callback(e);
        })
    })

    request.write(postdata);
    request.end();
}

exports.JSONRequestPut = function (host, port, path, obj, callback) {
    var postdata = JSON.stringify(obj);
    var options = {
        host: host,
        port: port,
        path: path,
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postdata.length
        }
    }

    console.log("Postdata: " + postdata);


    var request = http.request(options, function (response) {
        var result = "";
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            result += chunk;
        });

        response.on('end', function () {
            callback(null, JSON.parse(result));
        })

        response.on('error', function (e) {
            console.log("Test in error");
            callback(e);
        })
    })

    request.write(postdata);
    request.end();
}

exports.JSONRequestDelete = function (host, port, path, obj, callback) {
    var postdata = JSON.stringify(obj);
    var options = {
        host: host,
        port: port,
        path: path,
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postdata.length
        }
    }

    console.log("Postdata: " + postdata);


    var request = http.request(options, function (response) {
        var result = "";
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            result += chunk;
        });

        response.on('end', function () {
            callback(null, JSON.parse(result));
        })

        response.on('error', function (e) {
            console.log("Test in error");
            callback(e);
        })
    })

    request.write(postdata);
    request.end();
}
global.TEST_DATABASE = "mongodb://localhost/pointsystem";
global.SKIP_AUTHENTICATION = true;  //Skip security

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var Students = mongoose.model("Students");
var username = 'MadsJeppesen';
var localHostPort = 8080;

describe('REST API for /user', function () {
    //Start the Server before the TESTS
    before(function (done) {

        testServer = app.listen(testPort, function () {
            console.log("Server is listening on: " + testPort);
            done();
        })
            .on('error', function (err) {
                console.log(err);
            });
    })

    beforeEach(function (done) {
        Students.remove({}, function () {
            var array = [{
                id: "1",
                name: "Frederik Olesen",
                points: "10",
                class: "Datamatiker",
                semester: "Third"
            }, {id: "2", name: "Allan Pilotsen", points: "10", class: "Datamatiker", semester: "Third"}];
            Students.create(array, function (err) {
                done();
            });
        });
    })

    after(function () {  //Stop server after the test
        //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
        //mongoose.connection.db.dropDatabase();
        testServer.close();
    })

    it("Should return two students", function (done) {
        http.get("http://localhost:" + testPort + "/adminApi/students", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.equal(2);
                done();
            });
        })
    });

    it("Should return true if names equals the right thing", function (done) {
        http.get("http://localhost:" + testPort + "/adminApi/students", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.equal(2);
                n[0].name.should.equal("Frederik Olesen");
                n[1].name.should.equal("Allan Pilotsen");
                done();
            });
        })
    });


});

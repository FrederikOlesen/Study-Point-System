var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = mongoose.model('User');
var JSONrequest = require('../model/jsonrequest');

var students = require('../model/studentInterface');

/* GET A User From The DataBase */
router.get('/user', function (req, res) {
    if (typeof global.mongo_error !== "undefined") {
        res.status(500);
        res.end("Error: " + global.mongo_error + " To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    user.find({}, function (err, users) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(users));
    });
});


router.get('/students', function (req, res) {

    students.getAllStudents(function (err, student) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        //res.header("Content-type", "application/json");
        res.json(student);
    });
});


router.post('/students', function (req, res) {
    students.updateStudentPoints(req.body, function (err) {
    });
    res.send("");

})

router.put('/addtostudent', function (req, res) {
    students.addtostudent(req.body, function (err) {
    });
    console.log(req.body);
    res.send("");
})

router.post('/addusers', function (req, res) {

    JSONrequest("localhost", 8080, '/login', req.body, function (error, data) {
        console.log("Data: " + JSON.stringify(data));
        console.log("Error: " + error);
        res.send("");
    })
});

module.exports = router;

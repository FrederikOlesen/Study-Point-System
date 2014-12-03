var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = mongoose.model('User');
var JSONrequest = require('../model/jsonrequest');

var students = require('../model/studentInterface');
var teachers = require('../model/studentInterface');

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

router.delete('/students', function (req, res)
{
    students.deleteStudent(req.body, function (err)
    {

    });
    res.send("");
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

router.put('/addtoteacher', function (req, res) {
    teachers.addtoteacher(req.body, function (err) {
    });
    console.log(req.body);
    res.send("");
})

router.post('/addusers', function (req, res) {

    JSONrequest.JSONRequestPost("137.135.179.157", 8080, '/login', req.body, function (error, data) {
    if (error) {
        console.log("You are inside error")
        res.status(error.status || 500);
        res.send(JSON.stringify({error: error.toString()}));
        return;
    }
        console.log("Data: " + JSON.stringify(data));
        console.log("Error: " + error);
        res.send("");
    })
});

router.put('/changepassword', function (req, res) {
    var username = req.body.username;
    JSONrequest.JSONRequestPut("137.135.179.157", 8080, '/login/' + username, req.body, function (error, data) {
        if (error) {
            console.log("You are inside error")
            res.status(error.status || 500);
            res.send(JSON.stringify({error: error.toString()}));
            return;
        }
        console.log("Data: " + JSON.stringify(data));
        console.log("Error: " + error);
        res.send("");
    })
});

module.exports = router;

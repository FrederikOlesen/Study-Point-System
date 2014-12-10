var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = mongoose.model('User');
var JSONrequest = require('../model/jsonrequest');

var students = require('../model/studentInterface');
var studentsnew = require('../model/studentInterface');
var teachers = require('../model/studentInterface');
var semesterclass = require('../model/studentInterface');

var host = "137.135.179.157";

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

router.get('/checkusername/:user', function (req, res) {
        var user = req.params.user;
        students.getuser(user, function (err, username) {
                if (err) {
                    res.status(err.status || 400);
                    res.end(JSON.stringify({error: err.toString()}));
                    return;
                }
                teachers.getuserteacher(user, function (err, username1) {
                        if (err) {
                            res.status(err.status || 400);
                            res.end(JSON.stringify({error: err.toString()}));
                            return;
                        }
                        if (username != null || username1 != null) {
                            res.end("true")
                        }
                        else {
                            res.end("false");
                        }

                    }
                )

            }
        )

    }
)


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

router.delete('/students', function (req, res) {
    students.deleteStudent(req.body, function (err) {

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

    JSONrequest.JSONRequestPost(host, 8080, '/login', req.body, function (error, data) {
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
    JSONrequest.JSONRequestPut(host, 8080, '/login/' + username, req.body, function (error, data) {
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

router.delete('/deleteperson/:username', function (req, res) {

    var username = req.params.username;

    JSONrequest.JSONRequestDelete(host, 8080, '/login/' + username, req.params.username, function (error, data) {
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

    //teachers.deleteStudent(username);
});
//---------------------------------NEW DATABASE---------------------------------------------

router.put('/addtostudentnew', function (req, res) {
    studentsnew.addtostudentnew(req.body, function (err) {
    });
    console.log(req.body);
    res.send("");
})

router.put('/addtosemesterclassnew', function (req, res) {
    semesterclass.addtosemesterclassnew(req.body, function (err) {
    });
    console.log(req.body);
    res.send("");
})

router.get('/semesterclassnew', function (req, res) {

    semesterclass.getAllSemesterclass(function (err, semesterclass) {
        if (err) {
            res.status(err.status || 500);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        //res.header("Content-type", "application/json");
        res.json(semesterclass);
    });
});

router.post('/semesterclassnew', function (req, res) {
    semesterclass.updateClassSemester(req.body, function (err) {
    });
    res.send("");

})

module.exports = router;

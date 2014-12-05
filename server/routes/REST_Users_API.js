var express = require('express');

var router = express.Router();
var students = require('../model/studentInterface');


router.get('/test', function(req, res) {
    res.header("Content-type","application/json");
    res.end('{"msg" : "Test Message, You are logged on as a User since you could fetch this data"}');
});

router.get('/findone/:username', function(req, res) {

    var username = req.params.username;

    students.getuser(username, function(err, user) {
        if(err) {
            console.log(err);
        }
        res.send(user);
    })
})

module.exports = router;

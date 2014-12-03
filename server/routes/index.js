var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var request = require('request');


/* GET home page. */
router.get('/', function (req, res) {
    res.redirect("app/index.html")
});


router.post('/authenticate', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    request.get(
        '137.135.179.157:8080/login/' + username,
        function (error, response, body) {
            var obj = JSON.parse(body);

            if (obj != null) {

                if (username === obj.username && password === obj.password) {

                    var profile = {
                        username: obj.username,
                        role: obj.role
                    };

                    var token = jwt.sign(profile, require("../security/secrets").secretTokenUser, {expiresInMinutes: 60 * 5});
                    res.json({token: token});
                } else {
                    res.status(401).send('Wrong user or password');
                }
            }
            else {
                res.status(401).send('Wrong user or password');
            }
        })
});

//Get Partials made as Views
router.get('/partials/:partialName', function (req, res) {
    var name = req.params.partialName;
    res.render('partials/' + name);
});

module.exports = router;

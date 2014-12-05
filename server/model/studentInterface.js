var mongoose = require('mongoose');
var students = mongoose.model('Students');
var teachers = mongoose.model('Teachers');

function getAllStudents(callback) {
    students.find({}, function (err, student) {
        if (err) {
            return callback(err);
        }
        callback(null, student);
    });
}

function getAllUsernames(callback) {
    students.username.find({}, function (err, student) {
        if (err) {
            return callback(err);
        }
        callback(null, student);
    });
}

function getuser(user, callback) {
    students.findOne({username: user}, function (err, student) {
        if (err) {
            return callback(err);
        }
        callback(null, student);
    });
}

function getuserteacher(user, callback) {
    teachers.findOne({username: user}, function (err, teacher) {
        if (err) {
            return callback(err);
        }
        callback(null, teacher);
    });
}


function updateStudentPoints(body) {
    students.update({username: body.username}, {
        $set: {
            points: body.points
        }
    }, {multi: true}).exec();

}

function deleteStudent(username) {
    students.remove({username: username}, function (err, docs) {
        if (err) {
            console.log("You are in delete person");
        } else {
            console.log("Succesfully");
        }

    });

}
function addtostudent(data) {
    var student = new students(data);
    student.save(function () {
        console.log(student);
    });

}
function addtoteacher(data) {
    var teacher = new teachers(data);
    teacher.save(function () {
        console.log(teacher);

    });

}


module.exports = {
    getAllStudents: getAllStudents,
    updateStudentPoints: updateStudentPoints,
    addtostudent: addtostudent,
    addtoteacher: addtoteacher,
    deleteStudent: deleteStudent,
    getallUsernames: getAllUsernames,
    getuser: getuser,
    getuserteacher: getuserteacher
};
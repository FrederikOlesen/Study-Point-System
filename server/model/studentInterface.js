var mongoose = require('mongoose');
var teachers = mongoose.model('Teachers');
var students = mongoose.model('Students');
var semesterclassnew = mongoose.model('SemesterClass');


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

    function addtostudentnew(data) {
        var student = new students(data);
        student.save(function () {
            console.log(student);
        });

}

    function addtosemesterclassnew(data) {
        var semesterclass = new semesterclassnew(data);
        semesterclass.save(function () {

        });
    }

function getAllSemesterclass(callback) {
    semesterclassnew.find({}, function (err, semesterclass) {
        if (err) {
            return callback(err);
        }
        callback(null, semesterclass);
    });
}

function updateClassSemester(body) {
    semesterclassnew.update({semesterclassname: body.semesterclass}, {
        $addToSet: {
            students: body.student
        }
    }, {multi: true}).exec();

}

module.exports = {
    getAllStudents: getAllStudents,
    updateStudentPoints: updateStudentPoints,
    addtostudent: addtostudent,
    addtoteacher: addtoteacher,
    deleteStudent: deleteStudent,
    getallUsernames: getAllUsernames,
    getuser: getuser,
    getuserteacher: getuserteacher,
    addtostudentnew: addtostudentnew,
    addtosemesterclassnew: addtosemesterclassnew,
    getAllSemesterclass: getAllSemesterclass,
    updateClassSemester: updateClassSemester
};
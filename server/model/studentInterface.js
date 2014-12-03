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


function updateStudentPoints(body) {
    students.update({username: body.username}, {
        $set: {
            points: body.points
        }
    }, {multi: true}).exec();

}

function deleteStudent(data){
    students.delete(data);
}
function addtostudent(data){
    var student = new students(data);
    student.save(function() {
        console.log(student);

    });

}
function addtoteacher(data){
    var teacher = new teachers(data);
    teacher.save(function() {
        console.log(teacher);

    });

}


module.exports = {
    getAllStudents: getAllStudents,
    updateStudentPoints: updateStudentPoints,
    addtostudent: addtostudent,
    addtoteacher: addtoteacher
};
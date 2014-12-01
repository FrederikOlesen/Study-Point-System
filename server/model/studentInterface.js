var mongoose = require('mongoose');
var students = mongoose.model('Students');

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
function addtostudent(data){
    var student = new students(data);
    student.save(function() {
        console.log(student);

    });
}


module.exports = {
    getAllStudents: getAllStudents,
    updateStudentPoints: updateStudentPoints,
    addtostudent: addtostudent
};
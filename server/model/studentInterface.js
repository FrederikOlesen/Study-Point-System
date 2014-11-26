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


function updateStudentPoints(body, callback) {
    students.update({id: body.id}, {
        $set: {
            points: body.points
        }
    }, {multi: true}).exec();

}


module.exports = {
    getAllStudents: getAllStudents,
    updateStudentPoints: updateStudentPoints
}
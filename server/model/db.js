var mongoose = require( 'mongoose' );

/*

Note:
To this test project as it is:

Start your MongoDB database.
Start mongo.exe and do:
  use testdb
  db.testusers.insert({userName : "Lars", email :"lam@cphbusiness.dk",pw: "test",created : new Date()})
  db.testusers.insert({userName : "Henrik", email :"hsty@cphbusiness.dk",pw: "test",created : new Date()})
  db.testusers.insert({userName : "Tobias", email :"tog@cphbusiness.dk",pw: "test",created : new Date()})
  db.testusers.insert({userName : "Anders", email :"aka@cphbusiness.dk",pw: "test",created : new Date()})

*/
var dbURI;

//This is set by the backend tests
if( typeof global.TEST_DATABASE != "undefined" ) {
  dbURI = global.TEST_DATABASE;
}
else{
  dbURI = 'mongodb://abekat:abekat@ds063180.mongolab.com:63180/studypointdb';
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  global.mongo_error = "Not Connected to the Database";
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});


/** User SCHEMA **/
/** Replace this Schema with your own(s) **/
var usersSchema = new mongoose.Schema({
  userName : String,
  email: {type: String, unique: true},
  pw: String,
  created: { type: Date, default: new Date() }
});

mongoose.model( 'User', usersSchema,"testusers" );

var studentSchema = new mongoose.Schema({
  username: String,
  name: String,
  points: Number
});

var semesterclassSchema = new mongoose.Schema({
  semesterclassname: String,
  students: Array,
  periods: Array
});

var teacherSchema = new mongoose.Schema({
  name: String,
  username: String
});

var periodSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  maxPoint: Number,
  requiredPoint: Number,
  tasks: Array
});

var taskSchema = new mongoose.Schema({
  name: String,
  maxpoint: Number
});

mongoose.model('Students', studentSchema, "students");
mongoose.model('SemesterClass', semesterclassSchema, "semesterclass");

mongoose.model('Teachers', teacherSchema, "teachers");
mongoose.model('Period', periodSchema, "periods");
mongoose.model('Task', taskSchema, "tasks");

module.exports.studentModel = mongoose.model('testStudent',studentSchema);
module.exports.semesterclassModel = mongoose.model('testSemesterclass',semesterclassSchema);

module.exports.teacherModel = mongoose.model('testTeacher',teacherSchema);
module.exports.periodModel = mongoose.model('testPeriod' , periodSchema);
module.exports.taskModel = mongoose.model('testTask' , taskSchema);
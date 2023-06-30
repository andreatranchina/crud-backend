//declaring associations here
const Campus = require('./campus');
const Student = require('./student');

//one to many: student can have one campus WHILE campus can have many students
Campus.hasMany(Student, {
    foreignKey: 'campusId',
    as: 'student',
    });

Student.belongsTo(Campus, {
    foreignKey: 'campusId',
    as: 'campus'
    });

module.exports = {
    Student,
    Campus
}
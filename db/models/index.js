//declaring associations here
const Campus = require('./campus');
const Student = require('./student');

//one to many: student can have one campus WHILE campus can have many students
Campus.belongsToMany(Student, {foreignKey: 'campusId'});
Student.hasOne(Campus, {foreignKey: 'campusId'});

module.exports = {
    Student,
    Campus
}
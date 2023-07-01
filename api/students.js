const express = require ('express');
const router = express.Router();

const { Student } = require('../db/models');

// root: http://localhost/8080/api/students

//get all students from the students tabel (SELECT * FROM students)
router.get('/', async (req, res, next) => {
    try{
        const allStudents = await Student.findAll();
        allStudents? res.status(200).json(allStudents): res.status(404).send('Student Listing Not Found');

    }
    catch(error){
        // console.log(error.message);
        next(error);
    }
})

//get a single student by id/pk (SELECT * FROM students WHERE id = pk)
router.get('/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        const student = await Student.findByPk(id);
        student? res.status(200).json(student): res.status(404).send('Student Not Found');

    } catch (error){
        next(error);
    }
});

//add a new student record to the students table (INSERT INTO...VALUES)
router.post('/', async(req, res, next) => {
    try{
        const {firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
        const newStudent= Student.build({firstName, lastName, email, imageUrl, gpa, campusId});
        await newStudent.save();
        res.json(newStudent);
    }
    catch(error){
        next(error);
    }
})

//update student record
router.put('/:id', async(req, res, next) => {
    try{
        const { id } = req.params;
        const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;

        const oldStudent = await Student.findByPk(id);
        firstName? null: firstName === oldStudent.firstName;
        lastName? null: lastName === oldStudent.lastName;
        email? null: firstName === oldStudent.email;
        imageUrl? null: firstName === oldStudent.imageUrl;
        gpa? null: firstName === oldStudent.gpa;
        campusId? null: campusId === oldStudent.campusId;

        const updatedStudent = await Student.update({firstName, lastName, email, imageUrl, gpa, campusId}, {where: {id: id}});
        res.send("Success");
    }
    catch(error){
        next(error);
    }
})

//delete a record by id (pk)
router.delete('/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        const studentToDelete = await Student.findByPk(id);
        await studentToDelete.destroy();
        res.json(studentToDelete);

    } catch (error){
        next(error);
    }
});

module.exports = router;
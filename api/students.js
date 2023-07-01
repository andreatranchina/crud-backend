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
        const {firstName, lastName, email, imageUrl, gpa } = req.body;
        const newStudent= Student.build({firstName, lastName, email, imageUrl, gpa});
        await newStudent.save();
        res.json(newStudent);
    }
    catch(error){
        next(error);
    }
})


module.exports = router;
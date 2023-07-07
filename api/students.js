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
//Get the campuses by descending order
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

// Endpoint to get students sorted in alphabetical order (A-Z)
router.get('/sortedStudent/ascending', async (req, res,next) => {
  try {
    const sortedStudents = await Student.findAll({
      order: [['lastName', 'ASC']],
    });
    res.json(sortedStudents);
  } catch (error) {
    console.error(error);
    next(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to get students sorted in alphabetical order (Z-A)
router.get('/sortedStudent/descending', async (req, res,next) => {
  try {
    const sortedStudents = await Student.findAll({
      order: [['lastName', 'DESC']],
    });
    res.json(sortedStudents);
  } catch (error) {
    console.error(error);
    next(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//get all the students and sort by highest gpa
router.get('/sortedStudent/gpaHigh', async(req,res,next) => {
    try {
        const sortedStudents = await Student.findAll({
            order: [['gpa','DESC']],
        });
        res.json(sortedStudents);
    } catch (error){
        console.error(error);
        next(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    }
)

//this allows to get all the students from one campus in descending order by id
router.get('/byCampus/:campusId', async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const students = await Student.findAll({
      where: {
        campusId: campusId
      },
      order: [['id', 'DESC']], // Sort by 'id' in descending order (modify the column name as needed)
    });
    students ? res.status(200).json(students) : res.status(404).send('Students Not Found for the Campus');

  } catch (error) {
    next(error);
  }
});

//add a new student record to the students table (INSERT INTO...VALUES)
router.post('/', async(req, res, next) => {
    try{
        const {firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
        const newStudent= Student.build({firstName, lastName, email, imageUrl, gpa, campusId});
        await newStudent.save();
        // const newStudent = await Student.create(req.body);
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
        let { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
        console.log(req.body)
        console.log(req.params);

        const oldStudent = await Student.findByPk(id);
        //null - nothing changed, move on

        firstName? oldStudent.firstName = firstName: null
        lastName? oldStudent.lastName = lastName : null
        email? oldStudent.email = email : null
        imageUrl? oldStudent.imageUrl = imageUrl : null
        gpa? oldStudent.gpa = gpa : null
        campusId? oldStudent.campusId = campusId : null
        //oldStudent has now been updated
        await oldStudent.save();    
        res.send(oldStudent);
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

// Get students by campusId
router.get('/byCampus/:campusId', async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const students = await Student.findAll({
      where: {
        campusId: campusId
      }
    });
    students ? res.status(200).json(students) : res.status(404).send('Students Not Found for the Campus');

  } catch (error) {
    next(error);
  }
});

router.get('/byName/:firstName/:lastName', async(req, res, next)=>{
    try{
        const {firstName,lastName} = req.params;
        const student = await Student.findOne({ 
            where: {
                firstName: firstName,
                lastName: lastName,
            } 
        });
        student ? res.status(200).json(student) : res.status(404).send('Students Not Found');
    }
    catch(error){
        next(error);
    }
})

module.exports = router;
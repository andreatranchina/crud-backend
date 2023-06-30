const express = require ('express');
const router = express.Router();

const { Student } = require('../db/models');

// root: http://localhost/8080/api/students

router.get('/', async (req, res, next) => {
    try{
        const allStudents = await Student.findAll();
        allStudents? res.status(200).json(allShoes): res.status(404).send('Student Listing Not Found');

    }
    catch(error){
        // console.log(error.message);
        next(error);
    }
})


module.exports = router;
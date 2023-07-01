const express = require ('express');
const router = express.Router();

const { Campus } = require('../db/models');

// root: http://localhost/8080/api/campuses

//get all campuses from the campuses tabel (SELECT * FROM campuses)
router.get('/', async (req, res, next) => {
    try{
        const allCampuses = await Campus.findAll();
        allCampuses? res.status(200).json(allStudents): res.status(404).send('Campus Listing Not Found');

    }
    catch(error){
        // console.log(error.message);
        next(error);
    }
})



module.exports = router;
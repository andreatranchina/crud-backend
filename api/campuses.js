const express = require ('express');
const router = express.Router();

const { Campus } = require('../db/models');

// root: http://localhost/8080/api/campuses

//get all campuses from the campuses tabel (SELECT * FROM campuses)
router.get('/', async (req, res, next) => {
    try{
        const allCampuses = await Campus.findAll();
        allCampuses? res.status(200).json(allCampuses): res.status(404).send('Campus Listing Not Found');

    }
    catch(error){
        // console.log(error.message);
        next(error);
    }
})

//get a single campus by id/pk (SELECT * FROM campuses WHERE id = pk)
router.get('/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        const campus = await Campus.findByPk(id);
        campus? res.status(200).json(campus): res.status(404).send('Campus Not Found');

    } catch (error){
        next(error);
    }
});

//add a new student record to the students table (INSERT INTO...VALUES)
router.post('/', async(req, res, next) => {
    try{
        const {name, imageUrl, address, description} = req.body;
        const newCampus= Campus.build({name, imageUrl, address, description});
        await newCampus.save();
        res.json(newCampus);
    }
    catch(error){
        next(error);
    }
})

module.exports = router;
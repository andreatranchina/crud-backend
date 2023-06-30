const express = require ('express');
const router = express.Router();

// root here : http://localhost/8080/api/

//middleware
router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));

//404 Handling
router.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
})

module.exports = router;


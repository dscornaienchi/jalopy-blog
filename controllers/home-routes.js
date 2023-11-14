const router = require('express').Router();
const { getHomePage, searchCars, viewCarDetails } = require('../models'); // import all of the models (might need to adjust this)

// Render the homepage with the search form 
router.get('/', getHomePage);

// Render the search results after user enters criteria
router.post('/search', searchCars);

// Render the car details page after the user clicks on a car
router.get('/car/:id', viewCarDetails);

module.exports = router;

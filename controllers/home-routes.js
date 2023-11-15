const router = require('express').Router();
const { User, Car, Review } = require('../models');

// Render the homepage with the search results after user makes selection
router.get('/', async (req, res) => {
    try {
        const postReview = await Review.findAll({
        include: [{ model: User, attributes: ['username'] }, { model: Car, attributes: ['make', 'model', 'year'] }],
        });
    
        const reviews = postReview.map((review) => review.get({ plain: true }));
        console.log("REVIEWS", reviews);
        res.render('home', { reviews });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// create a post route where the homepage displays the car results after user makes selection based on year, make, and model
router.post('/search', async (req, res) => {
    try {
        const carData = await Car.findAll({
            where: {
                year: req.body.year,
                make: req.body.make,
                model: req.body.model,
            },
        });
        const cars = carData.map((car) => car.get({ plain: true }));
        res.render('home', { cars });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;

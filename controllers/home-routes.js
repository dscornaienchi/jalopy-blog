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
  
module.exports = router;

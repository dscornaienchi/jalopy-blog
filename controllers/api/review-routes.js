const router = require('express').Router();
const { Review, Car, User } = require('../../models');

// GET all reviews
router.get('/review', async (req, res) => {
  try {
    const reviewData = await Review.findAll();
    console.log(reviewData);
    const reviews = reviewData.map((review) =>
      review.get({ plain: true })
    );
    res.render('all-reviews', {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/review/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: [
            'id',
            'title',
            'body',
            'user_id',
            'car_id',
          ],
        },
      ],
    });

    const review = reviewData.get({ plain: true });
    res.render('review', { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get All reviews for One CAR
router.get('/car/:id', async (req, res) => {
    try {
      const carData = await Car.findByPk(req.params.id);
      const car = carData.get({ plain: true });

      const reviewData = await Review.findAll({
        include: [{ model: Car }, { model: User }],
        where: { car_id: req.params.id }
      });
  
      const reviews = reviewData.map((review) =>
        review.get({ plain: true })
      );
      res.render('reviews', {
        reviews,
        car,
        logged_in: req.session.logged_in});

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;

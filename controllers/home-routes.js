const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Render the homepage with the search results after user makes selection
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        include: [{ model: User, attributes: ['username'] }, { model: Comment }],
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log("POSTS", posts);
        res.render('homepage', { posts });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;

const express = require('express');
const router = express.Router();

// Post route
router.get('/post/:postId', (req, res) => {
  const postId = req.params.postId;
  // Add your logic to retrieve and render a specific post
  res.send(`Post Page - ID: ${postId}`);
});

module.exports = router;

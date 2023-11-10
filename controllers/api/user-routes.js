const express = require('express');
const router = express.Router();

// User profile route
router.get('/user/:userId', (req, res) => {
  const userId = req.params.userId;
  // Add your logic to retrieve and render user profile
  res.send(`User Profile Page - ID: ${userId}`);
});

module.exports = router;

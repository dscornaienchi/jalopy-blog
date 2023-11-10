const express = require('express');
const router = express.Router();

// Logout route
router.get('/logout', (req, res) => {
  // Add your logic for user logout
  res.send('Logout Page');
});

module.exports = router;

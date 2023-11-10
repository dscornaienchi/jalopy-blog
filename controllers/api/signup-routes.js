const express = require('express');
const router = express.Router();

// Signup route
router.get('/signup', (req, res) => {
  // Add your logic to render the signup page
  res.send('Signup Page');
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Login route
router.get('/login', (req, res) => {
  // Add your logic to render the login page
  res.send('Login Page');
});

module.exports = router;

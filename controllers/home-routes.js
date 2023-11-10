const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  // Add your logic to render the home page
  res.send('Home Page');
});

module.exports = router;

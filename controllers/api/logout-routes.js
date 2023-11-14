const router = require('express').Router();

// GET route for logging out
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      // Redirect to the homepage after logging out
      res.status(204).end();
      res.redirect('/homepage');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

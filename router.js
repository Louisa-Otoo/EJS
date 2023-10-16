const router = require('express').Router();

// Import the staff data module
const staffMembers = require('./staffData');



// Add a route for the about page
router.get('/about', (req, res) => {
    const pageTitle = 'About Cuisine Cafe';
    const pageDescription = 'Lorem20'
    res.render('about', { pageTitle, pageDescription })
});


// Add a route for the menu page
router.get('/menu', (req, res) => {
    // You can fetch menu data from a database or other source here
    const pageTitle = 'Ready To enjoy?';
    const menuItems =  []; /* initialise menuItems as an emty array */
    res.render('menu', { pageTitle, menuItems });
});


// route for the sign in page
router.get('/login', (req, res) => {
    res.render('sign in'); // Use the name of your "Sign In" view
});

router.post('/login', (req, res) => {
    if (authenticationIsSuccessful(req.body.username, req.body.password)) {
      req.session.authenticated = true;
  
      res.redirect('/staff');
    } else {
      res.redirect('/signin'); 
    }
  });


// router for the staff page 
router.get('/staff', (req, res) => {
    const pageTitle = 'Meet Our Team';
    res.render('staff', { pageTitle, staffMembers });
});    


module.exports = router;




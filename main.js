const express = require('express');
const router = require('./router');
const session = require('express-session');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


const staffMembers = require('./staffData'); // Import the staff data module


// Define the text you want to display on the image
const pageTitle = 'Welcome to Cuisine Cafe';
const pageDescription = 'Discover the finest flavors in town.';


app.get('/', (req, res) => {
    res.render('index', { pageTitle, pageDescription});
});
  
  
  // Configure express-session
// app.use(
//   session({
//     secret: 'your-secret-key', // Replace with a strong secret key
//     resave: true,
//     saveUninitialized: true,
//   })
// );
 

// function isAuthenticated(req, res, next) {
//   if (req.session && req.session.authenticated) {
//     return next(); 
//   } else {
//     return res.redirect('/login'); 
//   }
// }
  
  

app.use(router);

const PORT = process.env.PORT || 5410

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));
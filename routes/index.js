let express = require('express');

// like a private variable
let myVariable = "WEBD6201";

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Welcome to WEBD6201',
    nameString: myVariable
  }
  );
});

module.exports = router;

let express = require('express');
let router = express.Router();

// connect the contactsController
let contactController = require('../controllers/contact');

/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

module.exports = router;
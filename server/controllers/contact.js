let express = require('express');
let router = express.Router();

// create a reference to the DB Schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req, res, next) =>{
    contactModel.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
        }
    });
};
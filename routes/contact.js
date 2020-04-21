var express = require("express"),
    router  = express.Router(),
    Contact = require("../models/contact");
//ROUTES

//Home page--Works
router.get("/", function(req ,res){
    res.send("The Home page");
});
//Get all contacts list--works
router.get("/contacts",getAllContacts);

//New contact form --Works
router.get("/contacts/new", function(req ,res){
    res.send("The new contact creation form");
});

//Add contact to database
router.post("/contacts" , addContact);

//View a specific contact full info
router.get("/contacts/:id", viewContact);

//Delete contact -- works
router.delete("/contacts/:id", deleteContact);

//Delete all -- works
router.delete("/contacts/deleteall",deleteAll);

//Updtae contact
router.put("/contacts/:id", updateContact);


module.exports = router;
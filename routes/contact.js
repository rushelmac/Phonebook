var express = require("express"),
    router  = express.Router(),
    Contact = require("../models/contact"),
    controller = require("../controllers/contact");
//ROUTES

//Home page--Works
router.get("/", function(req ,res){
    res.send("The Home page");
});
//Get all contacts list--works
router.get("/contacts",controller.getAllContacts);

//New contact form --Works
router.get("/contacts/new", function(req ,res){
    res.send("The new contact creation form");
});

//Add contact to database
router.post("/contacts" , controller.addContact);

//View a specific contact full info
router.get("/contacts/:id", controller.viewContact);

//Delete contact -- works
router.delete("/contacts/:id", controller.deleteContact);

//Delete all -- works
router.delete("/contacts/deleteall",controller.deleteAll);

//Updtae contact
router.put("/contacts/:id", controller.updateContact);


module.exports = router;
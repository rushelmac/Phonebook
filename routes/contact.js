var express = require("express"),
    router  = express.Router(),
    Contact = require("../models/contact");
//ROUTES

//Home page--Works
router.get("/", function(req ,res){
    res.send("The Home page");
});
//Get all contacts list--works
router.get("/contacts",function(req , res){
//Finding and rearranging the contacts by ascending order of names
    Contact.find().sort('name').exec(function(err, contacts) {
        if(err){
            console.log("Finding contacts error" + err);
            res.json({"error": err});
        }else{
            res.json({"contacts": contacts});
            // contacts.forEach(function(contact){
            //     // res.send(contact.name , contact.number);
            //     res.send("All the contacts");
            // });
        }
      });
});

//New contact form --Works
router.get("/contacts/new", function(req ,res){
    res.send("The new contact creation form");
});

//Add contact to database
router.post("/contacts" , function(req , res){
    var newContact = new Contact ({
        name : req.body.name,
        number : req.body.number,
        email : req.body.email
    });

    newContact.save(function(err , contact ){
        if(err){
            console.log(err);
            res.send("not submitted");
        }
        res.send("submitted");
        // res.redirect("/phonebook/contacts");
    });
    // Contact.create(newContact , function(err ,createdContact ){
    //     if(err){
    //         console.log("Couldn't Create Contact " + err);
    //     }
    //     res.redirect("/contacts");
    // });
});

//View a specific contact full info
router.get("/contacts/:id", function(req ,res){
    Contact.findById(req.params.id , function(err , foundContact){
        if(err){
            console.log("Couldn't find Contact"+ err);
            res.redirect("/contacts");
        }else{
            res.send(foundContact);
        }
    });
});

//Delete contact
router.delete("/contacts", function(req , res){
    Contact.findByIdAndDelete(req.params.id , function(err){
        if(err){
            console.log("Couldn't delete" + err);
        }
        res.redirect("/contacts");
    });
    res.redirect("/contacts");
});

//Updtae contact
router.put("/contact", function(req ,res){
//The request contains contact info as an object of key calue pairs in the body
    Contact.findByIdAndUpdate(req.params.id, req.body.contact , function(err , updatedContact){
        if(err){
            console.log("Couldn't update" + err);
        }
        res.redirect("/contacts");
    });
});

module.exports = router;
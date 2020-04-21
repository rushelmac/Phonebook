var getAllContacts = function(req , res){
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
    }
var addContact = function(req , res){
    // var newContact = new Contact ({
    //     name : req.body.name,
    //     number : req.body.number,
    //     email : req.body.email
    // });

    // newContact.save(function(err , contact ){
    //     if(err){
    //         console.log(err);
    //         res.send("not submitted");
    //     }
    //     res.send("submitted");
    //     // res.redirect("/phonebook/contacts");
    // });
    Contact.create(req.body.contact , function(err ,createdContact ){
        if(err){
            console.log("Couldn't Create Contact " + err);
        }
        console.log(req.body);
        res.redirect("/contacts");
    });
    }
var viewContact = function(req ,res){
    Contact.findById(req.params.id , function(err , foundContact){
        if(err){
            console.log("Couldn't find Contact"+ err);
            res.redirect("/contacts");
        }else{
            res.send(foundContact);
        }
    });
}
var deleteContact = function(req , res){
    Contact.findByIdAndDelete(req.params.id , function(err){
        if(err){
            console.log("Couldn't delete" + err);
        }
        res.redirect("/contacts");
    });
}
var deleteAll =  function(req, res){
    Contact.deleteMany({},function(err){
        if(err){
            res.send(err);
        }
        res.redirect("/contacts");
    });
}
var updateContact =  function(req ,res){
    //The request contains contact info as an object of key calue pairs in the body
        Contact.findByIdAndUpdate(req.params.id, req.body.contact , function(err , updatedContact){
            if(err){
                console.log("Couldn't update" + err);
                res.send("Couln't update");
            }
            // res.redirect("/contacts");
            res.send("updated successfully");
        });
    }
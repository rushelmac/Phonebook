//Dependancies
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    methodOverride = require("method-override"),
    Contact     = require("./models/contact"),
    contactRoutes  = require("./routes/contact");
    
//Connecting database
mongoose.connect("mongodb://localhost/phonebook",{useUnifiedTopology : true, useNewUrlParser : true});

//App setup
//For parsing the request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Connecting the route module
app.use("/",contactRoutes);
//Method Override for PUT and DELETE requests
app.use(methodOverride("_method"));

Contact.create(
    {
        name    : "Second User",
        number  : "9438365923",
        email   : "someotherone@something.com"
    },function(err , contact){
        if(err){
            console.log(err);
        }else{
            console.log(contact);
        }
    }
);


app.listen(5600 , function(){
    console.log("Server has been started");
});



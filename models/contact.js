var mongoose = require("mongoose");

//Schema
var contactsSchema = new mongoose.Schema({
    name : String, 
    // {
    //     type : String,
    //     required : true
    // },

    number : String, 
    // {
    //     type : [String],
    //     required : true
    // },

    email : String,

    history : [{
        date : String,
        type : String,
        description : String
    }]
});

//Model
module.exports = mongoose.model("Contact" , contactsSchema);

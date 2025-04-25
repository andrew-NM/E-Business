const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://andrewnaeem7:whJ2K0DiyaSOmCzz@ebusiness.tcdzz06.mongodb.net/users?retryWrites=true&w=majority&appName=eBusiness')
.then(()=> {
    console.log("Connected to DB")
})
.catch(()=> {
    console.log("Unable to connect")
})
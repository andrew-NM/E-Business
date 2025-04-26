// const mongoose = require("mongoose");
const { default: mongoose, mongo } = require("mongoose");
const db = require("./db");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let students = [];
let doctors = [];

//Start-Students methods

//Add student hardcoded
app.post("/add-student-hardcoded", (req,res) => {
    const student = {
        name : "Andrew",
        age : 20,
        level: "Two",
        address: "Ismailia"
    };
    
    students.push(student);
    res.send("Student has been added successfully!");
});

//add student using request body
app.post("/add-student",(req,res) => {
    const student = {
        name: req.body.name,
        age: Number(req.body.age),
        level: String(req.body.level),
        address: req.body.address
    };

    students.push(student);
    res.send("Student has been added successfully!");
});

//delete a student with specific name using query params
app.delete("/delete-student", (req,res) => {
    const name = req.query.name;
    students = students.filter(student => student.name !== name);
    res.send("The student has been successfully deleted!");
});

//fetch all students
app.get("/fetch-students", (req,res) => {
    res.send(students);
});


//End-students methods


//Start-doctors methods

//Add new doctor via query params
app.post("/add-doctor", (req,res) => {
    const doctor = {
        name: req.query.name,
        age: req.query.age,
        phone: String(req.query.phone)
    };

    doctors.push(doctor);
    res.send("Doctor has been successfully added!");
});

//update a doctor by name via query params
app.put("/update-doctor", (req,res) => {
    const oldName = req.query.oldName;
    const newName = req.query.newName;
    for (let i = 0; i < doctors.length; i++ ) {
        if(doctors.at(i).name == oldName)
            doctors.at(i).name = newName;
    }

    res.send("Doctor's name has been successfully updated!");
});

//fetch all doctors
app.get("/fetch-doctors", (req,res) => {
    res.send(doctors);
});
//End-doctors methods

//Fetch both Lists
app.get("/fetch-students-doctors", (req,res) => {
    const data = {
        students : students,
        doctors : doctors
    };

    res.send(data);
});

//=================================================MongoDB=================================================
//start-students collection
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    level : String,
    address : String
});

let studentModel = new mongoose.model("student", studentSchema);
//end-students collection

//start-mongoDB methods
app.post("/save-students-to-db", (req,res) => {
    for (let i = 0; i < students.length; i++) {
        let newStudent = new studentModel(students.at(i)).save();
    }
    res.send("Fetched successfully!");
});

app.get("/return-students-from-db", (req,res) => {
    studentModel.find()
    .then((stds) => {
        res.json(stds)
    })
    .catch((err) => {
        console.log(err)
    })
});
//end-mongoDB methods
//=================================================MongoDB=================================================

app.listen(port, () => {
    console.log("Listening.................................");
});

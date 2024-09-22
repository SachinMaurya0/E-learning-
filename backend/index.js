const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentModel = require('./models/students')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://sachinmauryae91:sachinmauryae91@dios.jjn5f2d.mongodb.net/DIOS?retryWrites=true&w=majority&appName=DIOS').then(()=>{console.log("Database connection successfull")});

app.post('/register',(req,res) => {
    let response = studentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
    return {"message": "succ"}  
})

app.listen(7000, () =>{
    console.log("server is running");
})
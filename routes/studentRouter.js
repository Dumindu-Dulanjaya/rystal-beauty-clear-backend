import express from 'express';
import Student from '../models/student.js';

const studentRouter = express.Router();

// GET all students
studentRouter.get("/", (req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((error) => {
        res.status(500).json({
            message: "Error retrieving students",
            error: error.message
        });
    });
});

// POST - Save new student
studentRouter.post("/", (req, res) => {
    const newStudent = new Student(req.body);
    
    newStudent.save().then(() => {
        res.json({ message: "Student saved successfully" });
    }).catch((error) => {
        res.status(500).json({
            message: "Error saving student",
            error: error.message
        });
    });
});

export default studentRouter;


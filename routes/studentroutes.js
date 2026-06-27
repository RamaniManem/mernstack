const express = require("express");
const router = express.Router();

const Student = require("../models/Student");


// Add Student
router.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);

        const savedStudent = await student.save();

        res.status(201).json(savedStudent);

    } catch (error) {

        console.log(error);

        res.status(400).json({
            message: error.message
        });
    }
});


// Get All Students
router.get("/students", async (req, res) => {
    try {

        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Count Total Students
router.get("/students/count", async (req, res) => {
    try {

        const result = await Student.aggregate([
            {
                $group: {
                    _id: null,
                    totalStudents: { $sum: 1 }
                }
            }
        ]);

        res.json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Average CGPA by Department
router.get("/students/average-cgpa", async (req, res) => {
    try {

        const result = await Student.aggregate([
            {
                $group: {
                    _id: "$department",
                    averageCGPA: { $avg: "$cgpa" }
                }
            }
        ]);

        res.json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Get Student By ID
router.get("/students/:id", async (req, res) => {
    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Update Student
router.put("/students/:id", async (req, res) => {
    try {

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedStudent);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
});


// Delete Student
router.delete("/students/:id", async (req, res) => {
    try {

        await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;
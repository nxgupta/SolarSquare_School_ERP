const Student = require("../models/Student")
const User = require("../models/User")

const addStudent = async (req, res, next) => {
    try {
        const student = await Student.create({
            name: req.body.name,
            dob: req.body.dob,
            academicYear: req.body.academicYear,
            parent: req.body.parent,
            className: req.body.className,
            section: req.body.section,
            fees: req.body.fees
        })

        res.status(200).json({
            success: true,
            message: "Admission successfully done",
            student
        })

    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find()

        if (!students) {
            return res.status(404).json("Students not found");
        }

        res.status(200).json({ students });

    } catch (error) {
        res.status(500).json(error);
    }
}

const getSingleStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.studentId)

        if (!student) {
            return res.status(404).json("Student not found");
        }

        res.status(200).json({ student });

    } catch (error) {
        res.status(500).json(error);
    }
}

const getParentChildren = async (req, res, next) => {
    try {
        const { parentEmail } = req.query
        const student = await Student.find({ 'parent.email': parentEmail })
        if (!student) {
            return res.status(404).json("Student not found");
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(500).json(error);
    }
}

const feePay = async (req, res, next) => {
    try {
        const { studentId } = req.params
        console.log(studentId)
        const body  ={
            isFeesPaid: req.body.isFeesPaid
        }
        const student = await Student.findByIdAndUpdate({ _id: studentId }, body , {
            new: true,
            runValidators: true,
            useFindAndModify:false
        })
        if (!student) {
            return res.status(404).json("Student not found");
        }
        res.status(201).json({ student });
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateStudentByAdmin = async (req, res, next) => {
    try {
        const { studentId } = req.params
       
        const student = await Student.findByIdAndUpdate({ _id: studentId }, req.body , {
            new: true,
            runValidators: true,
            useFindAndModify:false
        })
        if (!student) {
            return res.status(404).json("Student not found");
        }
        res.status(201).json({ student });
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteStudentByAdmin = async (req, res, next) => {
    try {
        const { studentId } = req.params

       
        const student = await Student.findOneAndDelete({ _id: studentId })
        if (!student) {
            return res.status(404).json("Student not found");
        }
        res.status(201).json("Student has removed");
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    addStudent,
    getAllStudents,
    getSingleStudent,
    getParentChildren,
    feePay,
    updateStudentByAdmin,
    deleteStudentByAdmin
}
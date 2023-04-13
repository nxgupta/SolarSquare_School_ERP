const mongoose = require("mongoose")
// Name, DOB, Academic Year, Class
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: String,
        trim: true,
        required: true
    },
    academicYear: {
        type: Number,
        trim: true,
        required: true
    },
    className: {
        type: String,
        required: true,
        trim: true,
    },
    section: {
        type: String,
        trim: true,
        required: true
    },
    fees: Number,
    isFeesPaid: {
        type: Boolean,
        default: false
    },
    parent: {
        name: String,
        email: String,
        mobile: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Student", studentSchema)
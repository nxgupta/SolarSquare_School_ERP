const express = require("express");

const { addStudent, getAllStudents, getSingleStudent, getParentChildren, feePay, updateStudentByAdmin, deleteStudentByAdmin } = require("../controllers/student.controller");
const { auth, authorizeRoles } = require("../middlewares/auth")

const router = express.Router();

router.get("/parentChildren", auth, getParentChildren);
router.post("/", auth, authorizeRoles("admin"), addStudent);
router.get("/", auth, authorizeRoles("admin"), getAllStudents);
router.get("/:studentId", auth, authorizeRoles("admin"), getSingleStudent);
router.patch("/:studentId", auth, feePay);
router.patch("/:studentId/update", auth, authorizeRoles("admin"), updateStudentByAdmin);
router.delete("/:studentId", auth, authorizeRoles("admin"), deleteStudentByAdmin);

module.exports = router
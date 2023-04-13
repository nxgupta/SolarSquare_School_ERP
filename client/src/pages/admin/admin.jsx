import { Box, Card, CardContent,Typography } from "@mui/material"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
    const navigate=useNavigate();
    return (
        <Box sx={{display:'flex', justifyContent:"center", alignItems:"center", gap:5, mt:5}}>
            <Box>
            <Card sx={{maxWidth:275}}>
            <CardContent onClick={()=>navigate('/addStudent')}>
                <Typography >
                    Add new Student
                </Typography>
            </CardContent>
            </Card>
            </Box>
            <Box sx={{maxWidth:275}}>
            <Card>
            <CardContent onClick={()=>navigate('/viewStudents')}>
                <Typography>
                   View All Student
                </Typography>
            </CardContent>
            </Card>
            </Box>
        </Box>
    )
}
export default Admin
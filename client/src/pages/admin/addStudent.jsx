import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { addStudent } from '../../redux/actions/studentAction';


export default function AddStudent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );
  const [parentData,setParentData]=useState({
      name:"",
      email:"",
      mobile:""
  })
  const [formData, setFormData] = useState({
    name:"",
    dob:"",
    academicYear:"",
    className:"",
    section:"",
    fees:""
  });



  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleParentChange = (event) => {
    setParentData({
      ...parentData,
      [event.target.name]: event.target.value,
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, dob, academicYear, className, section, fees } = formData;


    const studentData = {
      name, 
      dob,
      academicYear, className,
      section,
      fees,
      parent: {
        name: parentData.name,
        email: parentData.email,
        mobile: parentData.mobile
      }
    };

    dispatch(addStudent(studentData))
    navigate('/')
  };

 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add Student
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                id="name"
                label="Student Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="dob"
                type="date"
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                name="academicYear"
                
                value={formData.academicYear}
                onChange={handleChange}
                label="Academic Year"
                id="academicYear"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="className"
                value={formData.className}
                onChange={handleChange}
                label="Class"
                id="className"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="section"
                value={formData.section}
                onChange={handleChange}
                label="Section"
                id="section"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                label="Fee"
                id="fees"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="name"
                value={parentData.name}
                onChange={handleParentChange}
                label="Parent's Name"
                id="pname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="email"
                value={parentData.email}
                onChange={handleParentChange}
                label="Parent's Email"
                id="pemail"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="mobile"
                value={parentData.mobile}
                onChange={handleParentChange}
                label="Parent's Mobile"
                id="pmobile"
              />
            </Grid>
          </Grid>
          <Button
           
            variant="contained"
            type="submit"
            sx={{
              padding: "10px",
              cursor: "pointer",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
              color: "white",
              width: "100%",mt: 3, mb: 2
            }}
          >
            {isLoading ? <CircularProgress /> : "Add Student"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
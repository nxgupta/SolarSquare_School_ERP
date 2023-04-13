import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { reset } from '../redux/reducers/userSlice';
import { CircularProgress } from '@mui/material';
import { register } from '../redux/actions/userAction';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }

    if (isSuccess) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      return;
    }

    const userData = {
      name: username,
      email,
      password,
    };

    dispatch(register(userData));

  };

  const onSave = formData.username && formData.email && formData.password;

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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                fullWidth
                id="name"
                label="User Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            disabled={!onSave}
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
            {isLoading ? <CircularProgress /> : "Sign Up"}
          </Button>
          
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="p" textAlign="center" sx={{ width: "100%"}}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
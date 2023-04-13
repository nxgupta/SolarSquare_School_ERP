import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/reducers/userSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { login } from '../redux/actions/userAction';


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let path = "/";
  if (location.state) {
    path = location.state.path;
  }

  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }

    if (isSuccess || user) {
      navigate(path);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch, path]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      return;
    }
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  
  };

  const onSave = formData.email && formData.password;

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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
            mt: 3, mb: 2,
            width: "100%"
          }}
        >
          {isLoading ? <CircularProgress /> : "Log In"}
        </Button>
            
            <Grid container justifyContent="center">
              <Grid item>
              <Typography variant="p" textAlign="center">
          Create a new Account?{" "}
          <Link to="/register" style={{ color: "blue" }}>
            Sign Up
          </Link>
        </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
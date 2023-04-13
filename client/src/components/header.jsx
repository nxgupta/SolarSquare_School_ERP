import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Stack, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userSlice';
import { useEffect, useState } from 'react';



function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, fontSize: 20, }}
                onClick={() => navigate('/')}
              >
                Solar Square
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent:'flex-end'  }}>
              {user ? (
                <Stack direction="row" justifyContent='center' alignItems="center" gap="20px">
                  <Typography sx={{ fontWeight: 600 }}>{user?.name}</Typography>
                  <Button onClick={logOut} variant="contained" >
                    Log out
                  </Button>
                </Stack>
              ) : (
                <Stack direction="row" alignItems="center" gap="20px">
                  <Button onClick={() => navigate("/login")} variant="contained">
                    Login
                  </Button>
                  <Button onClick={() => navigate("/register")} variant="contained">
                    Sign Up
                  </Button>
                </Stack>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

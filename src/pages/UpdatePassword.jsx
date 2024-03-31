import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../Provider/AuthProvider';
const defaultTheme = createTheme();

export const  UpdatePassword=()=> {
  const {BASE_URL}=useAuth();
  const navigate=useNavigate();
  const [passwords,setPasswords]=React.useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:""
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setPasswords({...passwords,[name]:value});
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const response = await fetch(`${BASE_URL}/updatePassword`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(passwords),
  });
console.log(response);
  const data = await response.json();
  if(response.ok){
    alert(data.message);
    navigate("/home");
  }
  else{
    alert(data.message);
  }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="oldPassword"
              value={passwords.oldPassword}
              onChange={handleInput}
              label="Old Password"
              type="password"
              id="oldPassword"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleInput}
              label="New Password"
              type="password"
              id="newPassword"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleInput}
              label="Confirm New Password"
              type="password"
              id="confirmPassword"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

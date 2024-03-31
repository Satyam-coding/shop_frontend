import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

export  const ForgotPassword = () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleVerifyOTP = async (event) => {
    event.preventDefault();
    
   const response = await fetch('http://localhost:7000/forgotPassword', {  
  method: 'POST',
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify({ email }) // Corrected line
});


const data=await response.json();
if (response.ok){
  alert(data.message);
  navigate('/resetPassword');
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
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleVerifyOTP} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              continue to  Verify OTP
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

import React from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography, Link } from "@mui/material";
import { Footer } from "../Footer/Footer";
import Logo from "../../assets/LogoLoginPage.svg";
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  return (
    <>
      <Box className="loginPage">
        {/* Logo */}
        <Box className="logoContainer">
          <img src={Logo} alt="Logo" className="logo" />
        </Box>

        {/* Title */}
        <Typography variant="h5" gutterBottom>
          Sign in
        </Typography>

        {/* Form elements */}
        <Box className="formContainer">
          <TextField
            id="email"
            label="Email address"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <FormGroup className="checkboxContainer">
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the Terms and Conditions"
            />
          </FormGroup>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="signInButton"
          >
            SIGN IN
          </Button>
        </Box>

        {/* New user and Forgot Password */}
        <Box className="linkContainer">
          <Link href="#" variant="body2" className="no-underline" style={{ color: 'gray' }}>
            New user?
          </Link>
          {' '} {/* Only way I found to add an space between the pieces of text */}
          <Link href="#" variant="body2" className="coralLink no-underline">
            Create an account
          </Link>
          <br />
          <Link href="#" variant="body2" className="no-underline">
            Forgot Password?
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
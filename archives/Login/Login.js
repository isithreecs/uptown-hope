import React, { useState } from "react";
import {
  Paper,
  Container,
  Box,
  TextField,
  FormControlLabel,
  Button,
  Link,
  Grid2,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Formik, Form } from "formik";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("username", username);
    }

    if (!username || !password) {
      alert(
        "One or more fields are empty! Please enter username and password to continue!"
      );
    }

    try {
      const response = await fetch("https://www.uptownhope.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/Employees");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
    console.log("Username:", username, "Password:", password);
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          flexGrow: 1,
          "@media (max-width:600px)": { maxWidth: "90%" },
        }}
      >
        <Paper elevation={12} sx={{ mt: 8, padding: 2 }}>
          <Container maxWidth="sm" sx={{ mb: 5 }}>
            <a href="https://www.uptownhope.com/">
              <img
                src="../images/uptownhope_logo.jpeg"
                alt="Uptown Hope logo"
                width="240"
                height="180"
              />
            </a>
          </Container>
          {/* <Typography component="h1" variant="h5" sx={{
                        textAlign: "center", 
                        fontSize: "1.75rem",
                        mb: 5, }}>
                            Log In 
                        </Typography> */}
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <Formik>
              {(props) => (
                <Form>
                  <TextField
                    label="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter Username"
                    fullWidth
                    required
                    autoFocus
                    sx={{ mb: 4 }}
                    aria-label="Username"
                  />
                  <TextField
                    label="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Password"
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                    type="password"
                    aria-label="Password"
                  />
                  <FormControlLabel
                    control={
                      <CheckBox
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                        value="rememberMe"
                        color="primary"
                      />
                    }
                    label="Remember me"
                    sx={{
                      mb: 4,
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mb: 3, padding: 1.5, borderRadius: 2 }}
                  >
                    <LoginRoundedIcon sx={{ mr: 2 }} />
                    Log In
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Grid2 container justifyContent="space-between" sx={{ mt: 1 }}>
            <Grid2 item>
              <Link component={RouterLink} to="/forgot">
                Forgot password?
              </Link>
            </Grid2>
            <Grid2 item>
              <Link component={RouterLink} to="/register">
                Sign Up
              </Link>
            </Grid2>
          </Grid2>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;

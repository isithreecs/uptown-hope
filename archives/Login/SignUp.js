import React from "react";
import {
  Avatar,
  Button,
  Container,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid2,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Formik, Field, Form } from "formik";

const SignUp = () => {

  const initialValues = { 
    chooseCompany: false,
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
  }

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <Grid2
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        display: "flex",
        flexGrow: 1,
        mt: 2,
      }}
    >
      <Paper
        elevation={20}
        sx={{ padding: "30px 20px", width: 600, margin: "5% auto" }}
      >
        <Grid2 align="center">
          <Avatar sx={{ backgroundColor: "rgba(230, 115, 14, 1)" }}>
            <WavingHandIcon />
          </Avatar>
          <h1 sx={{ margin: 0 }}>Sign Up</h1>
          <Typography variant="caption" sx={{ mb: "2px" }} gutterBottom>
            Fill out this form for access to account
          </Typography>
        </Grid2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}> 
          {(props) =>(
            <Form>
              <form>
          <FormLabel
            component="legend"
            sx={{
              margin: "10px auto",
            }}
          >
            Choose Company
          </FormLabel>
          <Field as={RadioGroup}
            aria-label="company-name"
            name="chooseCompany"
            style={{ display: "initial" }}
          >
            <FormControlLabel
              value="ISI"
              control={<Radio />}
              label="Innovative Services, Inc. (ISI)"
            />
            <FormControlLabel
              value="Uptown Hope"
              control={<Radio />}
              label="Uptown Hope"
            />
          </Field>
          <Container sx={{ justifyContent: "center", mt: 1 }}>
            <Field as={TextField} fullWidth name="fullName" label="First and Last Name" />
            <Divider sx={{ mt: 1 }} />
            <Field as={TextField} fullWidth name="email" label="Email" />
            <Divider sx={{ mt: 1 }} />
            <Field as={TextField} fullWidth name="phoneNumber" label="Phone Number" />
            <Divider sx={{ mt: 1 }} />
            <Field as={TextField} fullWidth name="password" label="Password" />
            <Divider sx={{ mt: 1 }} />
            <Field as={TextField} fullWidth name="confirmPassword" label="Confirm Password" />
          </Container>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Sign Up
          </Button>
        </form>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid2>
  );
};

// "rgba(230, 115, 14, 1)"
export default SignUp;

import React from 'react';
import { Box, Grid2, Paper, Typography, Button } from '@mui/material';
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

const Services2 = () => {
  
  let navigate = useNavigate();
  
  function handleClick() {
    navigate('/contact');
  }

  return (
    <div>
      {/* Parallax Section */}
      <Parallax
        bgImage={require("../coverImages/Servicespage_image.jpg")}
        strength={300}
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
        alt="Services Background"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "60px 0",
            textAlign: "center",
            color: "white",
            fontSize: "32px",
            height: "60vh",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "rgba(230, 115, 14, 1)",
            }}
          >
            Services We Provide
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              marginTop: "10px",
            }}
          >
            We provide a number of different services to fit your staffing or
            assistance needs!
          </Typography>
        </div>
      </Parallax>

      {/* Page Content Section */}
      <Box>
        <Grid2 container spacing={3} justifyContent="center">
          <Grid2 item xs={12}>
            <Paper
              elevation={8}
              sx={{
                height: "95vh",
                width: "75vw",
                marginBottom: "40px",
                marginTop: "40px",
                padding: 3,
                borderRadius: "10px",
                background: "rgba(218, 220, 226, .6)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "rgba(230, 115, 14, 1)",
                }}
              >
                Need Assistance with your business?
              </Typography>
              <Grid2 item xs={12}>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "80px" }}
                >
                  Health Care staff agency providing temporary staff support or
                  assistance to the following facilities:
                </Typography>
              </Grid2>

              <Grid2
                container
                spacing={4}
                textAlign={"left"}
                justifyContent={"center"}
              >
                {/* Bullet Points (Left Side) */}
                <Grid2 item xs={12} sm={6}>
                  <ul style={{ paddingLeft: "0" }}>
                    <li>Addiction Treatment Centers</li>
                    <li>Adult and Medical Day Care Centers</li>
                    <li>Assisted Living Centers</li>
                    <li>Behavioral Health Facilities/Centers</li>
                    <li>
                      Development Disability Administration
                      <br />
                      Providers
                      <ul>
                        <li>
                          Residential Settings/Group Homes for
                          <br />
                          Adults and Youth with IDD
                        </li>
                        <li>
                          Group Homes for Children with
                          <br />
                          Behavioral Health challenges
                        </li>
                        <li>Self-Directed Services Participants</li>
                        <li>Community Pathways Waiver</li>
                        <li>Autism Waiver</li>
                        <li>
                          Other vocational day programs, including
                          <br />
                          Community Development Services
                        </li>
                        <li>Employment Support Programs</li>
                      </ul>
                    </li>
                  </ul>
                </Grid2>

                <Grid2
                  item
                  xs={12}
                  sm={6}
                  container
                  rowSpacing={4}
                  sx={{
                    justifyContent: "flex-end",
                    alignContent: "space-evenly",
                    display: "flex",
                    position: "relative",
                    bottom: "2.25em",
                    left: "1.5em",
                  }}
                >
                  <img
                    alt="Direct Support and Client"
                    src="../images/healthcarePhoto.png.jpg"
                    height="350rem"
                    width="435rem"
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      borderRadius: "5%",
                    }}
                  />
                </Grid2>

                {/* Bullet Points (Right Side) */}
                <Grid2
                  item
                  xs={12}
                  sm={6}
                  sx={{ position: "relative", left: "5em", bottom: ".5em" }}
                >
                  <ul style={{ paddingLeft: "0" }}>
                    <li>Domiciliary Care Settings</li>
                    <li>Family Support Programs</li>
                    <li>Family and Child Welfare Services Agencies</li>
                    <li>
                      Government Agencies (child welfare,
                      <br />
                      aging services, juvenile justice)
                    </li>
                    <li>Group Homes</li>
                    <li>Hospitals</li>
                    <li>
                      Long Term Care and Rehabilitation
                      <br />
                      Facilities/Centers
                    </li>
                    <li>Nursing Home/Care</li>
                    <li>Personal Care Homes/Settings</li>
                    <li>Private Duty</li>
                    <li>School Systems</li>
                    <li>Skilled Nursing Facilities</li>
                    <li>Title V Schools</li>
                    <li>Community Agencies</li>
                    <li>Treatment and Transitional Housing</li>
                  </ul>
                </Grid2>
              </Grid2>

              {/* Bottom Text */}
              <Box sx={{ marginTop: "60px" }}>
                <Typography variant="body1">
                  If you are interested in our services, feel free to get in
                  touch with us through the contact form or email below.
                </Typography>
              </Box>

              {/* Contact Us Button */}
              <Box sx={{ marginTop: 3, textAlign: "center" }}>
                <Button
                  variant="outlined"
                  onClick={handleClick}
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "30px",
                    padding: "10px 30px",
                    fontSize: "16px",
                    color: "rgba(230, 115, 14, 1)",
                    "&:hover": {
                      backgroundColor: "rgba(230, 115, 14, 0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default Services2;

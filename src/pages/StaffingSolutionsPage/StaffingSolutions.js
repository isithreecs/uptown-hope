import React, { useState } from "react";
import { Box, Button, Grid2, Typography, Paper, Collapse } from "@mui/material";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import "./StaffingSolutions.css"


const HoverDropdown = ({ title, children, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        marginBottom: 2,
        cursor: "pointer",
        width: "fit-content",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        style={{ fontWeight: "bold", 
        listStyle: "none", 
        marginBottom: "6px",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        textAlign: "center", 
        color: "#0b2ca3",
      }}
      >
        {title && icon && (
          <>
            {title}
            <Box component="span" style={{ ml: 2 }}>
              {icon}
            </Box>
          </>
        )}
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box component="div" style={{ pl: 2, mt: 1, textAlign: "center", width: "100%" }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

const StaffingSolutions = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/contact');
  }


  return (
    <div>
      {/* Parallax Section */}

      <Parallax
        className="parallax-section"
        bgImage={require("../coverImages/corporate1.jpg")}
        strength={300}
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
        alt="Staffing Solutions Background"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "60px 0",
            textAlign: "center",
            color: "white",
            fontSize: "4vw",
            height: "60vh",
          }}
        >
          <div
            className="header-title-and-text"
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: "35%",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "rgba(230, 115, 14, 1)" }}
            >
              Staffing Solutions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "white",
                marginTop: "20px",
                fontSize: "1.5rem",
              }}
            >
              Short on Staff?
            </Typography>
          </div>
        </div>
      </Parallax>

      {/* Content Section Below Parallax */}

      <div
        className="below-parallax"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "50px 0",
          minHeight: "calc(100vh - 60vh)", // Content doesn't overlap the footer
        }}
      >
        <Grid2
          container={true}
          spacing={4}
          sx={{ justifyContent: "center", padding: "0 20px" }}
        >
          <Grid2>
            <Paper
              className="main-card"
              elevation={8}
              sx={{
                padding: 3,
                borderRadius: "10px",
                background: "rgba(218, 220, 226, 0.6)",
                alignItems: "center",
                flexDirection: "column",
                width: "75vw",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "rgba(230, 115, 14, 1)" }}
              >
                Is your business short on staff?
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", marginBottom: "30px", color: "#555" }}
              >
                Are you looking for staff to help jumpstart a new business
                venture?
                <br />
                Or are you just looking to shake things up in an unconventional
                way? Whatever your staffing need, Uptown Hope can help!
              </Typography>

              <Grid2
                container={true}
                spacing={4}
                textAlign={"left"}
                justifyContent={"center"}
                className="staffing-solutions-columns"
              >
                {/* Bullet Points (Left Side) */}
                <Box
                  className="bullet-points-left"
                  style={{ flexDirection: "column", alignItems: "flex-start" }}
                >
                  <ul style={{ paddingleft: "0" }}>
                    <li>Addiction Treatment Centers</li>
                    <li>Adult and Medical Day Care Centers</li>
                    <li>Assisted Living Centers</li>
                    <li>Behavioral Health Facilities/Centers</li>
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
                  </ul>
                </Box>

                <Grid2
                  className="image-container"
                  container
                  rowspacing={4}
                  sx={{
                    justifyContent: "center",
                    alignContent: "space-evenly",
                    display: "flex",
                  }}
                >
                  <img
                    alt="Corporate Card"
                    id="corporate-card-image"
                    src="../images/corporate_staff.png"
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
                <Box className="bullet-points-right">
                  <ul style={{ paddingleft: "0" }}>
                    <li>Personal Care Homes/Settings</li>
                    <li>
                      Development Disability Administration
                      <br />
                      Providers
                      <ul>
                        <li>Community Agencies</li>
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
                </Box>
              </Grid2>

              {/* Drowpdown Section */}
              <Grid2
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  marginTop: "20px",
                  overflowX: "hidden", 
                }}
              >
                <Box
                  sx={{
                    display: "flex", 
                    justifyContent: "center", 
                  }}>
                  <HoverDropdown
                    title="Healthcare Staff Support"
                    icon={
                      <i
                        className="fas fa-hospital"
                        style={{ marginLeft: "5px" }}
                      ></i>
                    }
                  >
                      <div>
                        {" "}
                        UH provides qualified healthcare practitiioners to
                        variety of Health (short-term or long-term temporary,
                        permanent full-time or part-time, or associates).{" "}
                      </div>
                  </HoverDropdown>
                </Box>
                <Box>
                  <HoverDropdown
                    title="Administrative Support"
                    icon={
                      <i
                        className="fas fa-briefcase"
                        style={{ marginLeft: "5px" }}
                      ></i>
                    }
                  >
                    <div> 
                      {" "}
                      UH provides qualified administrative support staff (Receptionists, 
                      Administrative Assistants, File Clerks, Office Manager/Coordinator) to a 
                      variety of organizations (short-term or long-term temporary, permanent
                      full-time or part-time, or associates).{" "}  
                    </div>
                  </HoverDropdown>
                </Box>
                <Box>
                  <HoverDropdown
                    title="Accounting and Finance Support"
                    icon={
                      <i
                        className="fas fa-calculator"
                        style={{ marginLeft: "5px" }}
                      ></i>
                    }
                  >
                    <div> 
                      {" "}
                      UH provides qualified Accounting and Finance support to a variety of 
                      organizations (short-term or long-term temporary, permanent full-time or 
                      part-time, or associates).{" "}  
                    </div>
                  </HoverDropdown>
                </Box>
                <Box>
                  <HoverDropdown
                    title="Nursing Referral Service Support"
                    icon={
                      <i
                        className="fas fa-user-nurse"
                        style={{ marginLeft: "5px" }}
                      ></i>
                    }
                  >
                    <div> 
                      {" "}
                      UH provides qualified licensed or certified health professionals or care 
                      providers to provide nursing services, home health aid services, or other 
                      home health care services to variety of Health Care facilities, including 
                      hopsitals, clinics and other related medical facilities and institutions 
                      (short-term or long-term temporary, permanent full-time or part-time, or 
                      associates).{" "}  
                    </div>
                  </HoverDropdown>
                </Box>
              </Grid2>

              <Typography
                variant="body2"
                sx={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}
              >
                Click the button below to get in touch with us and discuss your
                staffing needs or click the categories below for more info!
              </Typography>

              <Box sx={{ marginTop: 3, textAlign: "center", marginBottom: 2.5 }}>
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
      </div>
    </div>
  );
};

export default StaffingSolutions;

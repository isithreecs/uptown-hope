import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Typography, Box, Grid2, Paper, Collapse } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './About2.css';



const HoverDropdown = ({ title, children, icon }) => {
    const [open, setOpen] = useState(false);

    return (

      <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{ marginBottom: 2, cursor: 'pointer', width: 'fit-content' }}
    >
      <Typography sx={{ fontWeight: 'bold', listStyle: 'none', marginBottom: '6px' }}>
        {title && icon && <Box sx={{ mr: 1 }}>{title}{icon}</Box>}
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
          {children}
        </Box>
      </Collapse>
    </Box>
    );
  };


    const About2 = () => {

  

  return (
    <div className="background">
      {/* Parallax Section */}
      <Parallax
        bgImage={require("../coverImages/group_photo.jpg")}
        strength={300}
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "110vh",
          width: "100%",
        }}
        alt="About Us Background"
      >
        <div className="parallax-text-container">
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", color: "rgba(230, 115, 14, 1)" }}
          >
            Learn More About Us!
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "white", marginTop: "20px" }}
          >
            Discover our mission, vision, and values at Uptown Hope!
          </Typography>
        </div>
      </Parallax>

      {/* H.O.P.E. Section */}
      <Box className="hope-section">
        <Grid2 container spacing={3} justifyContent="center">
          <Grid2 xs={12}>
            <Paper
              elevation={8}
              sx={{
                height: "145vh",
                width: "80vw",
                marginBottom: "40px",
                marginTop: "40px",
                padding: 3,
                borderRadius: "10px",
                background: "rgba(218, 220, 226, .6)",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "rgba(230, 115, 14, 1)",
                  }}
                >
                  H.O.P.E.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(230, 115, 14, 1)",
                  }}
                >
                  (Holistic, Opportunity, Preparation, Empowerment)
                </Typography>
              </Box>

              {/* Dual Grid for Motto and Mission */}
              <Box
                className="motto-and-mission-section"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "50px",
                }}
              >
                <Grid2
                  sx={{ position: "relative", right: "155px", top: "30px" }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Motto
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic" }}>
                    Positive Outlook, Open and Healthy Mind <br /> are the keys
                    to success. Ability and <br /> Opportunity begin with
                    Preparation and Availability.
                  </Typography>
                </Grid2>
                <Grid2
                  sx={{ position: "relative", left: "155px", top: "30px" }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Mission
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic" }}>
                    The mission of Uptown Hope is to take a holistic <br />{" "}
                    approach in delivering quality service, leveraging the{" "}
                    <br /> unique opportunity to enhance clients' productivity{" "}
                    <br /> through effective staff augmentation with
                    well-trained, <br /> qualified, and empowered staff and
                    associates.
                  </Typography>
                </Grid2>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "50px",
                }}
              >
                <Grid2
                  sx={{ position: "relative", right: "155px", top: "30px" }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Vision
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic" }}>
                    Uptown Hope is dedicated to delivering high-quality <br />{" "}
                    staffing services that foster a positive experience <br />{" "}
                    through open, collaborative relationships with <br />{" "}
                    clients, staff, and associates. Our goal <br /> is to
                    consistently offer cost-effective and <br /> efficient
                    staffing solutions, utiliziing our holistic <br /> approach
                    to add value to our clients' processes.
                  </Typography>
                </Grid2>
                <Grid2
                  sx={{ position: "relative", left: "155px", top: "40px" }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Values
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic" }}>
                    Our fundamental beliefs and principles revolve around <br />{" "}
                    building relationships with our clients, employees, <br />{" "}
                    and associates which go beyond financial gains, but focus{" "}
                    <br /> on a culture of involvement, partnership,
                    collaboration, <br /> and personal, professional, and
                    financial growth.
                  </Typography>
                </Grid2>
              </Box>

              <Grid2
                item
                xs={12}
                sm={7}
                md={7}
                sx={{
                  position: "relative",
                  bottom: "25em",
                  right: "10px",
                }}
              >
                <img
                  alt="Direct Support and Client"
                  src="../images/Hands_together_Diversity_hero.jpg"
                  height="450rem"
                  width="535rem"
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
              </Grid2>

              <Grid2
                sx={{
                  position: "relative",
                  bottom: "22rem",
                  right: "1em",
                  margin: 4,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "rgba(230, 115, 14, 1)", mb: "6px" }}
                >
                  Leadership Credentials
                </Typography>
                <Typography sx={{ color: "gray", fontStyle: "italic" }}>
                  Our administrative and management staff have extensive and
                  relevant experience as well as proven success managing and
                  ensuring growth and productivity of organizations in different
                  industries. We can do the same for your organization by
                  supplying you with well-trained, highly skilled, and qualified
                  staff that will positively contribute to the growth of your
                  organization.
                </Typography>

                <br />
                <br />
                <Box sx={{ textAlign: "left" }}>
                  <HoverDropdown
                    title="Uptown Hope, LLC - Founder and CEO"
                    icon={<KeyboardArrowDownIcon />}
                  >
                    <li>
                      Extensive background, achievements, and effectiveness in
                      the following areas:
                      <br />
                      Business Planning, Development, Operation and
                      Administration, Financial management and oversight,
                      Leadership.
                    </li>
                    <li>
                      Over 40 years of administrative, financial, management and
                      leadership experience in the financial, healthcare,
                      insurance, and human service industries.
                    </li>
                    <li>
                      Proven success in providing effective overall leadership
                      and oversight within the agency and between agencies and
                      external constituencies.
                    </li>
                    <li>
                      Strategic planner responsible for assuming that the agency
                      has a long-range strategy and makes consistent and timely
                      progress to achieve its mission.
                    </li>
                    <li>
                      A focused leader who can develop and implement strategic
                      plans and promote active and broad participation by
                      employees and associates to provide the necessary support
                      for the growth and success of our clients.
                    </li>
                  </HoverDropdown>

                  <HoverDropdown
                    title="Uptown Hope, LLC - CFO"
                    icon={<KeyboardArrowDownIcon />}
                  >
                    <li>
                      A meticulous, dedicated high-energy professional and
                      administrator.
                    </li>
                    <li>
                      Proven ability and extensive background and experience in
                      financial management.
                    </li>
                    <li>
                      More than 40 years combined financial experience in the
                      financial, insurance and human services industries.
                    </li>
                  </HoverDropdown>
                </Box>
              </Grid2>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default About2;

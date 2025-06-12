import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Typography, Box, Grid2, Paper, Collapse, List, ListItem, Divider } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './About.css';

const HoverDropdown = ({ title, children, icon }) => {
    const [open, setOpen] = useState(false);

    return (

      
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ marginBottom: 2, cursor: 'pointer', width: 'fit-content' }}
    >
      {/* {component="div"} renders the Typography tag as a <div> instead of <p> to avoid nesting issues */}
      
      <Typography component="div" style={{ fontWeight: 'bold', listStyle: 'none', marginBottom: '6px' }}>
        {title && icon && <Box style={{ mr: 1 }}>{title}{icon}</Box>}
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box component="div" style={{ pl: 2, mt: 1 }}>
          {children}
        </Box>
      </Collapse>
    </Box>
    );
  };

  const About = () => {

  // This component renders the About page with a parallax background and sections for H.O.P.E., mission, vision, values, and leadership credentials.
  
  return (
    
    <Box className="background">
      {/* Parallax Section */}
      <Parallax
      className="parallax-background"
        blur={0}
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
        <Box className="parallax-text-container">
        <Box className="header-title-and-text-container"
          style={{justifyContent: "center", alignItems: "center", position: "relative", top: "25%"}}>
          <Typography
            className="header-title"
            variant="h2"
            style={{ fontWeight: "bold", color: "rgba(230, 115, 14, 1)" }}
          >
            Learn More About Us!
          </Typography>
          <Typography
            className="header-text"
            variant="body1"
            style={{ fontWeight: "bold", color: "white", marginTop: "20px", fontSize: "1.5rem" }}
          >
            Discover the mission, vision, and values at Uptown Hope!
          </Typography>
          </Box>
        </Box>
      </Parallax>

      {/* H.O.P.E. Section */}

      <Box className="hope-section">
        <Grid2 container spacing={3} justifyContent="center">
          <Grid2>
            <Paper
            className="main-div"
              elevation={8}
              style={{
                height: "145vh",
                width: "80vw",
                marginBottom: "40px",
                marginTop: "40px",
                padding: 3,
                borderRadius: "10px",
                background: "rgba(218, 220, 226, .6)",
              }}
            >
              <Box style={{ textAlign: "center" }}>
                <Typography
                  className="hope-title"
                  variant="h2"
                  style={{
                    marginBottom: "10px",
                    color: "rgba(230, 115, 14, 1)",
                  }}
                >
                  H.O.P.E.
                </Typography>
                <Typography
                  className="hope-text"
                  variant="body1"
                  style={{
                    fontWeight: "bold",
                    color: "rgba(230, 115, 14, 1)",
                  }}
                >
                  (Holistic, Opportunity, Preparation, Empowerment)
                </Typography>
              </Box>

              {/* Motto, Mission, Vision, Values */}
              <Grid2 className="main-content"
              container 
              spacing={4}
              justifyContent={"center"}
              alignItems="center">
              <Grid2 className="content-block">
                <Box className="text-block top-left-block">
                  <Typography
                    className="motto-title"
                    variant="h4"
                    style={{ color: "rgba(230, 115, 14, 1)"}}
                    >
                    Motto
                  </Typography>
                  <Typography 
                  className="text"
                  style={{ color: "gray", fontStyle: "italic" }}>
                    Positive Outlook, Open and Healthy Mind are the keys
                    to success. Ability and Opportunity begin with
                    Preparation and Availability.
                  </Typography>
                </Box>

                <Box className="text-block top-right-block">
                  <Typography
                    className="mission-title"
                    variant="h4"
                    style={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Mission
                  </Typography>
                  <Typography 
                  className="text"
                  style={{ color: "gray", fontStyle: "italic" }}>
                    The mission of Uptown Hope is to take a holistic 
                    approach in delivering quality service, leveraging the
                    unique opportunity to enhance clients' productivity
                    through effective staff augmentation with
                    well-trained, qualified, and empowered staff and
                    associates.
                  </Typography>
                </Box>

                <img
                  id="image-1"
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

                <Box className="text-block bottom-left-block">
                  <Typography
                    className="vision-title"
                    variant="h4"
                    style={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Vision
                  </Typography>
                  <Typography 
                  className="text"
                  style={{ color: "gray", fontStyle: "italic" }}>
                    Uptown Hope is dedicated to delivering high-quality
                    staffing services that foster a positive experience
                    through open, collaborative relationships with
                    clients, staff, and associates. Our goal is to
                    consistently offer cost-effective and efficient
                    staffing solutions, utiliziing our holistic approach
                    to add value to our clients' processes.
                  </Typography>
                </Box>
                
                
                <Box className="text-block bottom-right-block">
                  <Typography
                    className="values-title"
                    variant="h4"
                    style={{ color: "rgba(230, 115, 14, 1)" }}
                  >
                    Values
                  </Typography>
                  <Typography className="text" style={{ color: "gray", fontStyle: "italic" }}>
                    Our fundamental beliefs and principles revolve around
                    building relationships with our clients, employees,
                    and associates which go beyond financial gains, but focus
                    on a culture of involvement, partnership,
                    collaboration, and personal, professional, and
                    financial growth.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>

            {/* Added divider for visual separation for smaller screens when layout 
                changes to vertical format */}

            <Box display="flex" justifyContent="center">
              <Divider sx={{ width: "90%", backgroundColor: "rgba(230, 115, 14, 1)", height: "2px" }} />
            </Box>

              <Grid2
              className="leadership-container"
              container 
              spacing={4}
              justifyContent={"center"}
              alignItems="center"
              style={{ marginTop: "5.5em" }}>
              <Grid2
                className="leadership-block"
              >
                <Typography
                  className="leadership-title"
                  variant="h4"
                  style={{ color: "rgba(230, 115, 14, 1)", mb: "6px" }}
                >
                  Leadership Credentials
                </Typography>
                <Typography 
                className="leadership-text"
                style={{ color: "gray", fontStyle: "italic", marginBottom: "2em" }}>
                  Our administrative and management staff have extensive and
                  relevant experience as well as proven success managing and
                  ensuring growth and productivity of organizations in different
                  industries. We can do the same for your organization by
                  supplying you with well-trained, highly skilled, and qualified
                  staff that will positively contribute to the growth of your
                  organization.
                </Typography>

                {/* HoverDropdowns for CEO, CFO */}

                <Box style={{ textAlign: "left" }}>
                  <HoverDropdown
                    title="Uptown Hope, LLC - Founder and CEO"
                    icon={<KeyboardArrowDownIcon />}
                  >
                    <List>
                      <ListItem>
                        <ArrowRightIcon />
                        Extensive background, achievements, and effectiveness in
                        the following areas:
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon />
                        Business Planning, Development, Operation and
                        Administration, Financial management and oversight,
                        Leadership.
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon />
                        Over 40 years of administrative, financial, management and
                        leadership experience in the financial, healthcare,
                        insurance, and human service industries.
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon />
                        Proven success in providing effective overall leadership
                        and oversight within the agency and between agencies and
                        external constituencies.
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon />
                        Strategic planner responsible for assuming that the agency
                        has a long-range strategy and makes consistent and timely
                        progress to achieve its mission.
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon />
                        A focused leader who can develop and implement strategic
                        plans and promote active and broad participation by
                        employees and associates to provide the necessary support
                        for the growth and success of our clients.
                      </ListItem>
                    </List>
                  </HoverDropdown>

                  <HoverDropdown
                    title="Uptown Hope, LLC - CFO"
                    icon={<KeyboardArrowDownIcon />}
                  >
                    <List>
                    <ListItem>
                      <ArrowRightIcon />
                      A meticulous, dedicated high-energy professional and
                      administrator.
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Proven ability and extensive background and experience in
                      financial management.
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      More than 40 years combined financial experience in the
                      financial, insurance and human services industries.
                    </ListItem>
                    </List>
                  </HoverDropdown>
                </Box>
              </Grid2>
              </Grid2>

            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default About;

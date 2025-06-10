import React from "react";
import { Box, Typography, Grid2, Card, CardContent, CardMedia, Button, keyframes } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace, faSun, faHourglass2, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './Home2.css';


const scaleUp = keyframes`
  0% {
    transform: scale(1);
    color: inherit;
  }
    100% { 
    transform: scale(1.2);
    color: rgba(230, 115, 23, 0.8);
    }
`;



const Home2 = () => {
  
  let navigate = useNavigate();
  
  return (
      <div>

        {/* Landing Page Background Image */}

        {/* 'sx={{}}' is used for styling in Material UI. It's a shorthand for 
        defining styles directly on components. */}
        {/* CSS properties are written in camelCase in the 'sx' 
        prop (e.g., 'backgroundImage' instead of 'background-image'). */}

        <Box
          className="homepage-background-photo"
          sx={{
            height: "135vh",
            backgroundImage: `url(${require("../coverImages/uptownhope_bkgrd.png")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            px: 2,
          }}
        >
        </Box>
        <div 
        className="about-company-card-container"
        style={{display: "flex", height: "20vh", justifyContent: "center", alignItems: "center"}}>
        <Typography variant="body2" sx={{ fontSize: "1.1em", m: 3, color: "#0b2ca3"}}>
            <strong style={{fontSize: "23px"}}>Uptown Hope (UH) </strong>  
            is a privately held limited liability company organized under the laws of the
            State of Maryland. Uptown Hope offers staff support to organizations for a wide variety of
            positions to cover staff shortages due to PTO, sickness, leave of absence, vacancies,
            or to support sudden increase in workload due to growth and increased productivity needs.
            </Typography>
        </div>
        <Box
          className="clickable-cards-container">
          {/* '<Grid>' is deprecated in Material UI v5, and '<Grid2>' is the new replacement 
          for layout control (like a <div> but with built-in grid functionality). */}
          {/* By default, <Grid2> uses CSS layout (display: grid). */}

          {/* Mapping over an array of services to render service cards dynamically. */}
          <Grid2 className="clickable-cards" container spacing={4} justifyContent="center">
            {[
              {
                icon: faPeace,
                color: "rgba(240, 119, 19, 0)",
                title: "Holistic",
                description: "approach to quality service provision for clients and associates",
                path: '/about2',
              },
              {
                icon: faSun,
                color: "#f39c12",
                title: "Opportunity",
                description:
                  "to help improve clients' productivity through effective staff augmentation",
                path: '/career-opportunities',
              },
              {
                icon: faHourglass2,
                color: "#16a085",
                title: "Preparation",
                description: "and commitment to achieve positive outcome for clients and associates",
                path: '/StaffingSolutions2',
              },
              {
                icon: faHandsHelping,
                color: "#e74c3c",
                title: "Empowerment",
                description: "of staff and associates to confidently provide superior support to clients",
                path: '/contact'
              },
            ].map((service, index) => (
              <Grid2 key={index}>
                <Card
                className="card"
                elevation={8}
                onClick={() => navigate(service.path)}
                  sx={{
                    cursor: 'pointer',
                    height: "20vh",
                    width: "20vw",
                    marginTop: "25px",
                    marginBottom: "10px",
                    padding: "30px 10px",
                    justifyContent: "center",
                    borderRadius: "5%",
                    background: "linear-gradient(175deg, lightgray, #ffffff)",
                    '&:hover': {
                      animation: `${scaleUp} 0.3s forwards`,
                    }
                  }}
                >
                  <CardMedia>
                    <FontAwesomeIcon
                      icon={service.icon}
                      size="3x"
                      sx={{ color: "rgba(230, 115, 14, 1)", paddingTop: 2, transition: 'transform 0.3s ease-in-out', }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "rgba(230, 115, 14, 1)" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: "#0b2ca3"}}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Box
          className="homepage-footer"
          sx={{
            backgroundColor: "linear-gradient(175deg, lightgray, #ffffff)",
            color: "rgba(230, 115, 14, 1)",
            py: 3,
            textAlign: "center",
            mt: 5
          }}
        >
            <Typography variant="body2" sx={{ fontSize: "1.1em"}}>
            For a full list of positions we fill, please visit the{" "}
            <strong><a href="/StaffingSolutions2" target="_self" alt="Services page" style={{color: "rgba(230, 115, 14, 1)", fontSize: "1.5em"}}>Staffing Solutions</a></strong> page.
          </Typography>
        </Box>

        {/* Contact Section */}

        <Box
          className="contact-section"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 5,
            backgroundColor: "#ffffff",
          }}
        >
          <Grid2
            container={true}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid2>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  overflow: "hidden",
                  borderRadius: "50%"
                }}
              >
                <Grid2>
              <Typography 
              className="contact-section-text"
              variant="body1" sx={{mt: 2, fontSize: "17px"}} >
                300 Redland Ct., Suite 309 <br />
                Owings Mills, MD 21117 <br />
                (410) 363-9495 <br />
                <Button
                  href="mailto:info.uptownhope@gmail.com"
                  sx={{
                    color: "#0b2ca3",
                    textDecoration: "none",
                    mt: 1,
                    "&:hover": {
                      color: "#1abc9c",
                    },
                  }}
                >
                  info.uptownhope@gmail.com
                </Button>
              </Typography>
            </Grid2>
                <img
                  src="../images/sunshine.jpg"
                  alt="Sunshine"
                  style={{ width: "25rem", height: "10rem" }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        
        
      </div>
    );
}

export default Home2;

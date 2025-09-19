import { Box, Typography, Grid2, Card, CardContent, CardMedia, Button, keyframes } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace, faSun, faHourglass2, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './Home.css';


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

const Home = () => {
  
  let navigate = useNavigate();

  function handleClickSS() {
    navigate("/staffing-solutions");
  }

  function handleClickCar() {
    navigate("/career-opportunities");
  }
  
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
            height: { xs: "95vh", sm: "100vh", md: "125vh", lg: "125vh", xl: "130vh" },
            mt: 0, 
            backgroundImage: `url(${require("../coverImages/open_door.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: { xs: "0%", sm: "20%", md: "30%", lg: "35%", xl: "38%" },
            backgroundRepeat: "no-repeat",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
          className="background-content-container"
            sx={{ 
              padding: { xs: "2rem 1rem", sm: "5rem 2rem", md: "3rem 3rem", lg: "4rem 18rem", xl: "6.5rem 22rem" },
            }}>
            <div>
              <Box
                component="img"
                id='home-logo'
                src="../images/uptownhope_logo.jpeg"
                alt="Uptown Hope logo"  
                sx={{ 
                  width: {xs: "65vw", sm: "40vw", md: "42vw", lg: "35vw", xl: "35vw"}, 
                  height: "auto", 
                  display: "block", 
                  margin: "auto", 
                  marginTop: "0", 
                  padding: "1rem"
                }} 
            />
            </div>
            <Box className="header-title-and-text-container"
              sx={{ px: { xs: 2, sm: 3, md: 5 } }}
              >
              <Typography
                className="header-title"
                variant="h2"
                sx={{ 
                  fontWeight: "bold", 
                  color: "rgb(45, 48, 152)", 
                  fontSize: { 
                    xs: "1.45rem", 
                    sm: "2rem", 
                    md: "2.25rem", 
                    lg: "2.5rem",
                    xl: "3rem" 
                  }, 
                  textAlign: "center"
                }}
              >
                Staffing done right. 
              </Typography>
              <Typography
                className="header-text"
                variant="body1"
                sx={{ 
                  fontWeight: "bold", 
                  color: "rgb(45, 48, 152)", 
                  fontSize: {
                    xs: "1.2rem", 
                    sm: "1.2rem", 
                    md: "1.21rem", 
                    lg: "1.22rem", 
                    xl: "1.22rem"
                  },  
                  mt: { xs: "2em", sm: "2em", md: "5em", lg: "6em", xl: "7em" },
                  mx: { xs: "5em", sm: "7.7em", md: "10.5em", lg: "4em", xl: "5em" },
                  textAlign: "center" 
                }}
              >
                We connect the most qualified individuals to the companies that need them.
              </Typography>
              <br />
              <Grid2
                container
                direction={{ xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid2
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row", lg: "row", xl: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1, md: 4, lg: 4, xl: 8 },
                }}
                >
                <Button 
                  variant="outlined"
                  onClick={handleClickCar}
                  sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(230, 115, 23, .9)',
                      margin: '1em 0',
                      fontWeight: 'bold',
                      borderRadius: '60px',
                      padding: '10px 40px', 
                      fontSize: {
                        xs: ".9rem", 
                        sm: ".9rem", 
                        md: ".95rem", 
                        lg: ".96rem", 
                        xl: ".97rem"
                      }, 
                      borderColor: 'rgba(15, 3, 196, 1)',
                      textTransform: 'uppercase',
                      transition: 'transform 80ms ease-in',
                      cursor: 'pointer',  
                    // right: "20px", 
                    color: "rgb(45, 48, 152)"
                  }}>
                  Explore Careers 
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClickSS}
                  sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(230, 115, 23, .9)',
                      margin: '1em 0',
                      fontWeight: 'bold',
                      borderRadius: '60px',
                      padding: '10px 40px', 
                      fontSize: '16px', 
                      borderColor: 'rgba(15, 3, 196, 1)',
                      textTransform: 'uppercase',
                      transition: 'transform 80ms ease-in',
                      cursor: 'pointer',  
                      // left: "20px", 
                      color: "rgb(45, 48, 152)"
                  }}>
                      Find Staff
                </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
      </Box>

      <Box 
        className="about-company-card-container"
        sx={{display: "flex", 
                height: { xs: "20vh", sm: "20vh", md: "20vh", lg: "15vh", xl: "10vh" }, 
                justifyContent: "center", 
                alignItems: "center",
                marginTop: {xs: 5, sm: 5, md: 0, lg: 0, xl: 0},
                }}>
          <Typography variant="body2" sx={{ fontSize: "1.1em", m: 3, color: "#0b2ca3", 
            // pt: { xs: 2, sm: 2, md: 0, lg: 0, xl: 0}
            }}>
              <strong style={{fontSize: "23px"}}>Uptown Hope (UH) </strong>  
                is a privately held limited liability company organized under the laws of the
                State of Maryland. Uptown Hope offers staff support to organizations for a wide variety of
                positions to cover staff shortages due to PTO, sickness, leave of absence, vacancies,
                or to support sudden increase in workload due to growth and increased productivity needs.
          </Typography>
        </Box>

        <Box
          className="clickable-cards-container">
          {/* Mapping over an array of services to render service cards dynamically. */}
          <Grid2 className="clickable-cards" 
           sx={{
             display: "flex",
             flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
             justifyContent: "center", 
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 2, sm: 2, md: 2, lg: 4, xl: 4 },
            padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2em", xl: "2em" }, 
            height: { xs: "auto", sm: "auto", md: "auto", lg: "30vh", xl: "40vh" },           
          }}>
            {[
              {
                icon: faPeace,
                color: "rgba(240, 119, 19, 0)",
                title: "Holistic",
                description: "approach to quality service provision for clients and associates",
                path: '/about'
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
                path: '/staffing-solutions'
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
                    height: "25vh",
                    width: { xs: "70vw", sm: "70vw", md: "60vw", lg: "20vw", xl: "20vw" },
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
                      sx={{ 
                        color: "rgba(230, 115, 14, 1)", 
                        paddingTop: 2, 
                        transition: 'transform 0.3s ease-in-out', 
                      }}
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
            <strong><a href="/staffing-solutions" target="_self" alt="Staffing Solutions page" style={{color: "rgba(230, 115, 14, 1)", fontSize: "1.5em"}}>Staffing Solutions</a></strong> page.
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
                className="contact-section-info-and-image"
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
              variant="body1" 
              sx={{
                  mt: 4, 
                  fontSize: { xs: 14, sm: 15, md: 17, lg: 17, xl: 17 }
                  }} >
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
                <Box 
                  className="sunshine-image"
                  component="img"
                  src="../images/sunshine.jpg"
                  alt="Sunshine"
                  style={{ 
                    width: {xs: "3.5rem", sm: "35rem", md: "35rem", lg: "25rem", xl: "25rem"}, 
                    height: "10rem" }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </div>
    );
}

export default Home;

import React, { useState } from "react";
import { Button, Box, Typography, Grid2, Paper, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./CareerOpportunities.css";

const CareerOpportunities = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }

   const modalContent = {
      healthCare: {
        cardTitle: "Health Care Staff Support",
        title: "Healthcare",
        content: (
          <Box>
            Uptown Hope provides qualified healthcare practitioners to variety of Health
            Care facilities, including hospitals, clinics, and other related medical facilities
            and institutions (short-term or long-term temporary, permanent full-time or part-time, or
            associates). Typical positions are: 
            <br />
            <br />
            <strong>
          <ul>
            <li>CMA</li>
            <li>CNA</li>
            <li>GNA</li>
            <li>Direct Support Professional/CMT</li>
            <li>Medical Records Clerk</li>
            <li>Personal Care Assistant</li>
            <li>Therapeutic Support Staff</li>
          </ul>
          </strong>
          </Box>
        ),
        backgroundImage: require("../coverImages/background_image.jpg"),
      },
      nursing: {
        cardTitle: "Nursing Referral Service Support", 
        title: "Nursing",
        content: (<Box>
          Uptown Hope provides qualified licensed or certified health professionals or care
          providers to provide nursing services, home health aid services, or other home 
          health care services to variety of Health Care facilities, including hospitals, 
          clinics and other related medical facilities and institutions (short-term or 
          long-term temporary, permanent full-time or part-time, or associates). Typical 
          positions are: 
          <br />
          <br />
          <strong>
          <ul>
            <li>LPN</li>
            <li>RN</li>
          </ul>
          </strong>
        </Box>),
        backgroundImage: require("../coverImages/background_image.jpg"),
      },
      administration: {
        cardTitle: "Administrative and other Clerical Support", 
        title: "Administration",
        content: (<Box>
          Uptown Hope provides qualified administrative support staff to a 
          variety of organizations (short-term or long-term temporary, permanent full-time
          or part-time, or associates). Typical positions are: 
          <br /> 
          <br />
          <strong>
            <ul>
              <li>Receptionist</li>
              <li>Administrative Assistants</li>
              <li>File Clerks</li>
              <li>Office Manager/Coordinator</li>
            </ul>
          </strong>
          </Box>
        ),
        backgroundImage: require("../coverImages/background_image.jpg"),
      },
      finance: {
        cardTitle: "Accounting and Finance Support",
        title: "Finance",
        content: (<Box>
          Uptown Hope provides qualified Accounting and Finance support to a variety of 
          organizations (short-term or long-term temporary, permanent full-time or part-time,
          or associates). Typical positions are: 
          <br />
          <br />
          <strong>
            <ul>
              <li>Bookkeeper</li>
              <li>Accounts payable/Receivable staff</li>
              <li>Junior Accountant</li>
              <li>Staff Accountant</li>
              <li>Senior Accountant</li>
            </ul>
          </strong>
        </Box>),
        backgroundImage: require("../coverImages/background_image.jpg"),
      },
    };
  
    const paperStyling = {
      padding: 10,
      textAlign: "center",
      height: "15.5rem",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
    };
  
    const [openModal, setOpenModal] = useState(null);
  
    const handleOpenModal = (category) => setOpenModal(category);
    const handleCloseModal = () => setOpenModal(null);
  
   
    const renderModal = (category) => (
      <Modal
        open={openModal === category}
        onClose={handleCloseModal}
        sx={{ alignItems: "left", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: '90vw', sm: "400px" }, // media styling
            bgcolor: "white",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 2 }}>
            {modalContent[category].cardTitle}
          </Typography>
  
          <Box 
            sx={{
              width: "100%",
              height: "2px", 
              backgroundColor: "rgba(40, 39, 161, 0.93)",
              marginBottom: 2, 
            }}></Box>
  
          <Typography component="div" sx={{ mt: 2 }}>
            {modalContent[category].content}
          </Typography>
  
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexDirection: "row",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(40, 39, 161, 0.83)",
                borderRadius: "10px",
                padding: "10px 30px",
                fontSize: "10px",
                color: "white",
                height: "60px",
                width: "90px",
                mt: 3,
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onClick={handleClick}
            >
              Contact us here!
            </Button>
          </Box>
  
          <Button onClick={handleCloseModal} sx={{ mt: 2, alignItems: "flex-start", position: "absolute", left: "10px", bottom: "10px" }}>
            Close
          </Button>
        </Box>
      </Modal>
    );
  
   
    const renderPaper = (category) => (
      <React.Fragment key={category}>
      <Grid2 
      container={true}
      key={category}  
      sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          className="staffing-card"
          elevation={14}
          sx={{
            ...paperStyling,
            backgroundImage: `url(${modalContent[category].backgroundImage})`,
            backgroundSize: "cover",
            color: "rgba(40, 39, 161, 0.93)",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Typography variant="h4">{modalContent[category].title}</Typography>
          <Button
            variant="contained"
            onClick={() => handleOpenModal(category)}
            sx={{
              backgroundColor: "lightgray",
              width: "200px",
              borderRadius: "20px",
              mt: 6,
              color: "rgba(230, 115, 14, 1)",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "0.3s",
                color: "rgba(230, 115, 14, 1)",
              },
              padding: "8px 16px",
            }}
          >
            ADDITIONAL INFO
          </Button>
        </Paper>
      </Grid2>
        {renderModal(category)}
      </React.Fragment>
    );

  return (
    <Box>
      <Parallax
        bgImage={require("../coverImages/application.jpg")}
        strength={300}
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "95vh",
        }}
      >
        <div className="parallax-section">
          <div className="header-content">
            <Typography variant="h2" className="page-title">
              Careers at Uptown Hope
            </Typography>
            <Typography variant="body1" className="page-subtitle">
              As an Associate at Uptown Hope, you'll have the freedom to work
              when you want, where you want!
            </Typography>
          </div>
        </div>
      </Parallax>

      <Box sx={{ flexGrow: 1 }}>
        <Grid2
          className="main-page"
          container={true} 
          spacing={3}
          justifyContent="center"
        >
          <Grid2>
            <Paper className="content-main" elevation={14}>
              <Box className="main-header">
                <Typography variant="h5" className="highlight-text">
                  Looking for a fresh start or a new Career?
                </Typography>
              </Box>

              <Box className="main-description">
                <Typography variant="body1">
                  If you are interested in any of our positions email us via the
                  email address listed below or simply click the "Contact Us"
                  button at the bottom of this page. Including a pdf copy of
                  your resume, if applicable, would be greatly appreciated.
                </Typography>
              </Box>

              <Box className="image-container">
                <Grid2 className="image-box">
                  <img
                    src="../images/direct_care.jpg"
                    alt="Direct Support"
                    className="image-style"
                  />
                </Grid2>
                <Grid2 className="image-box">
                  <img
                    src="../images/holding_hands_nursing_care.jpg"
                    alt="Holding Hands"
                    className="image-style"
                  />
                </Grid2>
              </Box>
            </Paper>

            <Grid2 className="modals-container" container={true} spacing={12}>
              {["healthCare", "nursing", "administration", "finance"].map(
                (category) => renderPaper(category)
              )}
            </Grid2>
          </Grid2>
        </Grid2>

        <Box className="contact-container">
          <Button
            variant="outlined"
            onClick={handleClick}
            className="contact-button"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerOpportunities;

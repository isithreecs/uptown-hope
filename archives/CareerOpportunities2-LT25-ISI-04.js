import React, { useState } from "react";
import { Button, Box, Typography, Grid2, Paper, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./CareerOpp2.css";

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
        <div>
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
        </div>
      ),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
    nursing: {
      cardTitle: "Nursing Referral Service Support",
      title: "Nursing",
      content: (
        <div>
          <strong>
            <ul>
              <li>LPN</li>
              <li>RN</li>
            </ul>
          </strong>
        </div>
      ),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
    administration: {
      cardTitle: "Administrative and other Clerical Support",
      title: "Administration",
      content: (
        <div>
          <strong>
            <ul>
              <li>Receptionist</li>
              <li>Administrative Assistants</li>
              <li>File Clerks</li>
              <li>Office Manager/Coordinator</li>
            </ul>
          </strong>
        </div>
      ),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
    finance: {
      cardTitle: "Accounting and Finance Support",
      title: "Finance",
      content: (
        <div>
          <strong>
            <ul>
              <li>Bookkeeper</li>
              <li>Accounts payable/Receivable staff</li>
              <li>Junior Accountant</li>
              <li>Staff Accountant</li>
              <li>Senior Accountant</li>
            </ul>
          </strong>
        </div>
      ),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
  };

  const paperStyling = {
    padding: 10,
    textAlign: "center",
    height: "250px",
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
          width: { xs: 300, sm: 400 }, // media styling
          bgcolor: "white",
          borderRadius: "10px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 2 }}
        >
          {modalContent[category].cardTitle}
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "rgba(40, 39, 161, 0.93)",
            marginBottom: 2,
          }}
        ></Box>

        <Typography sx={{ mt: 2 }}>{modalContent[category].content}</Typography>

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
              fontSize: "12px",
              color: "white",
              height: "60px",
              width: "60px",
              mt: 3,
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={handleClick}
          >
            Apply Now
          </Button>
        </Box>

        <Button
          onClick={handleCloseModal}
          sx={{
            mt: 2,
            alignItems: "flex-start",
            position: "absolute",
            left: "10px",
            bottom: "10px",
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );

  const renderPaper = (category) => (
    <Grid2 item xs={12} sm={6} md={3}>
      <Paper
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
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            color: "rgba(230, 115, 14, 1)",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "0.3s",
              color: "rgba(230, 115, 14, 1)",
            },
            padding: "8px 16px",
          }}
        >
          Click for info
        </Button>
      </Paper>
      {renderModal(category)}
    </Grid2>
  );

  return (
    <div>
      {/* Parallax Section */}
      <Parallax
        bgImage={require("../coverImages/application.jpg")}
        strength={300}
        bgImageStyle={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
        alt="Career Opportunities Background"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "60px 0",
            textAlign: "center",
            color: "white",
            fontSize: "32px",
            height: "60vh",
          }}
        >
          <div className="header-title-and-text"
          style={{justifyContent: "center", alignItems: "center", position: "relative", top: "25%"}}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "rgb(238, 123, 23)",
            }}
          >
            Careers at Uptown Hope
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              marginTop: "10px",
              fontSize: "1.5rem", 
              fontWeight: "bold"
            }}
          >
            As an Associate at Uptown Hope, you'll have the freedom to work when
            you want, where you want!
          </Typography>
          </div>
        </div>
      </Parallax>

      {/* Page Content Section */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={3} justifyContent="center">
          <Grid2 item xs={12}>
            <Paper
              elevation={8}
              sx={{
                height: "80vh",
                width: "60vw",
                marginBottom: "40px",
                marginTop: "40px",
                padding: 3,
                borderRadius: "10px",
                background: "rgba(218, 220, 226, .6)",
              }}
            >
              {/* Title */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "rgba(230, 115, 14, 1)",
                  }}
                >
                  Looking for a fresh start or a new Career?
                </Typography>
                {/* First Text */}
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "20px" }}
                >
                  Take a look at the positions we offer down below!
                </Typography>
              </Box>

              <Box sx={{ marginTop: 2, padding: "2px" }}>
                <Typography variant="body1">
                  If you are interested in any of the positions email us via the
                  email address listed below or simply click the "Contact Us"
                  button at the bottom of this page. Including a pdf copy of
                  your resume, if applicable, would be greatly appreciated.
                </Typography>
              </Box>

              {/* Content Layout */}
              <Box
                sx={{
                  padding: "1rem",
                  maxWidth: "100%",
                  height: "55vh",
                  display: "flex",
                }}
              >

                {/* Left Side (Image) */}
                <Grid2 item xs={12} sm={7} md={7} sx={{ margin: 2 }}>
                  <img
                    alt="Direct Support and Client"
                    src="../images/direct_care.jpg"
                    height="450rem"
                    width="535rem"
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      borderRadius: "5%",
                    }}
                  />
                </Grid2>

                {/*Right Side Image */}
                <Grid2 item xs={12} sm={7} md={7} sx={{ margin: 2 }}>
                  <img
                    alt="Holding Hands - Direct Support"
                    src="../images/holding_hands_nursing_care.jpg"
                    height="450rem"
                    width="535rem"
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                      borderRadius: "5%",
                    }}
                  />
                </Grid2>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
        <Grid2
          container
          spacing={12}
          sx={{
            height: "30vh",
            marginTop: "25px",
            marginBottom: "110px",
            padding: "30px 10px",
            justifyContent: "center",
          }}
        >
          {["healthCare", "nursing", "administration", "finance"].map(
            (category) => renderPaper(category)
          )}
        </Grid2>

        <Box sx={{ marginTop: 3, textAlign: "center" }}>
          <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
              fontWeight: "bold",
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "16px",
              marginBottom: "10px",
              color: "rgba(230, 115, 14, 1)",
              "&:hover": {
                backgroundColor: "rgba(230, 115, 14, 0.1)",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CareerOpportunities;

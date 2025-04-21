import React, { useState } from "react";
import { Box, Button, Grid2, Typography, Paper, Modal, Collapse } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";


const StaffingSolutions2 = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/contact');
  }


  const HoverDropdown = ({ title, children, icon }) => {
    const [open, setOpen] = useState(false);

    return (
      <Box
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{ marginBottom: 1, cursor: "pointer", width: "fit-content" }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            marginBottom: "4px",
          }}
          aria-expanded={open}
          aria-controls={`dropdown-${title}`}
        >
          {title && icon && (
            <Box sx={{ mr: 1 }}>
              {title}
              {icon && (
                <KeyboardArrowDown
                  sx={{
                    transition: "transform 1.5s",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              )}
            </Box>
          )}
        </Typography>
        <Collapse in={open} timeout="auto"> {/* 'unmountOnExit' shifts the text to center and then to the left when hovered */}
          <Box
            component="ul"
            sx={{
              pl: 2,
              mt: 1,
              listStyle: "none",
              paddingLeft: 0,
              marginTop: 1,
            }}
            id={`dropdown-${title}`}
          >
            {children}
          </Box>
        </Collapse>
      </Box>
    );
  };

  const modalContent = {
    healthCare: {
      cardTitle: "Health Care Staff Support",
      title: "Healthcare",
      content: (
        <div>
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
        </div>
      ),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
    nursing: {
      cardTitle: "Nursing Referral Service Support", 
      title: "Nursing",
      content: (<div>
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
      </div>),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
    administration: {
      cardTitle: "Administrative and other Clerical Support", 
      title: "Administration",
      content: (<div>
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
      </div>),
      backgroundImage: require("../coverImages/background_image.jpg"),
    },
    finance: {
      cardTitle: "Accounting and Finance Support",
      title: "Finance",
      content: (<div>
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
      </div>),
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

        <Typography sx={{ mt: 2 }}>
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

        <Button onClick={handleCloseModal} sx={{ mt: 2, alignItems: "flex-start", position: "absolute", left: "10px", bottom: "10px" }}>
          Close
        </Button>
      </Box>
    </Modal>
  );

 
  const renderPaper = (category) => (
    <Grid2 item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "60px 0",
            textAlign: "center",
            color: "white",
            fontSize: "4vw",
            height: "60vh",
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
            sx={{ fontWeight: "bold", color: "white", marginTop: "20px" }}
          >
            We provide tailored staffing solutions to meet your healthcare
            needs!
          </Typography>
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
          container
          spacing={4}
          sx={{ justifyContent: "center", padding: "0 20px" }}
        >
          <Grid2 item xs={12} sm={6} md={6}>
            <Paper
              elevation={6}
              sx={{
                padding: 3,
                borderRadius: "10px",
                background: "rgba(218, 220, 226, 0.6)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                alignItems: "center",
                flexDirection: "column",
                width: "60vw",
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
                sx={{ marginTop: "20px", color: "#555" }}
              >
                Are you looking for staff to help jumpstart a new business
                venture?
                <br />
                Or are you just looking to shake things up in an unconventional
                way? Whatever your Health Care staffing need, Uptown Hope can
                help.
              </Typography>
              <br />

              <Typography
                variant="body1"
                sx={{ marginTop: "20px", color: "#555", textAlign: "center" }}
              >
                We currently provide staffing for the following:
                <ul
                  style={{
                    color: "#555",
                    marginTop: "10px",
                    listStyle: "none",
                    textAlign: "left"
                  }}
                >
                  <strong>
                    <HoverDropdown
                      title="Healthcare"
                      icon={<KeyboardArrowDown />}
                    >
                      UH provides qualified healthcare practitioners to variety of Health Care facilities, 
                      including hospitals, clinics, and other related medical facilities and institutions
                      (short-term or long-term temporary, permanent full-time or part-time, associates).
                      Typical positions include: 
                      <ul style={{ textAlign: "left" }}>
                        <li>CMA</li>
                        <li>CNA</li>
                        <li>GNA</li>
                        <li>Direct Support Professional/CMT</li>
                        <li>Medical Records Clerk</li>
                        <li>Personal Care Assistant</li>
                        <li>Therapeutic Support Staff</li>
                      </ul>
                    </HoverDropdown>
                    <HoverDropdown
                      title="Nursing"
                      icon={<KeyboardArrowDown />}
                    >
                      UH provides qualified licensed or certified health professionals or care providers to
                      provide nursing services, home health aid services, or other home health care services 
                      to variety of Health Care facilities, including hospitals, clinics and other related 
                      medical facilities and institutions (short-term or long-term temporary, permanent full
                      -time or part-time, or associates). Typical positions are: 
                      <ul style={{ textAlign: "left" }}>
                        <li>RN</li>
                        <li>LPN</li>
                      </ul>
                    </HoverDropdown>
                    <HoverDropdown
                      title="Administration"
                      icon={<KeyboardArrowDown />}
                    >
                    UH provides qualified administrative support staff to a variety of organizations (short-term or long
                    -term temporary, permanent full-time or part-time, or associates).
                      <ul style={{ textAlign: "left" }}>
                        <li>Receptionist</li>
                        <li>Aministrative Assistants</li>
                        <li>File Clerks</li>
                        <li>Office Manager/Coordinator</li>
                      </ul>
                    </HoverDropdown>
                    <HoverDropdown
                      title="Finance"
                      icon={<KeyboardArrowDown />}
                      >
                      UH provides qualified Accounting and Finance support to a variety of organizations (short
                      -term or long-term temporaray, permanent full-time or part-time, or associates). Typical 
                      positions are: 
                      <ul style={{ textAlign: "left" }}>
                        <li>Bookkeeper</li>
                        <li>Accounts payable/Recievable staff</li>
                        <li>Junior Accountant</li>
                        <li>Staff Accountant</li>
                        <li>Senior Accountant</li>
                      </ul>
                    </HoverDropdown>
                  </strong>
                </ul>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                  position: "relative",
                  left: "10px",
                }}
              >
                <div>
                  <img
                    alt="Corporate Card"
                    src="../images/corporate_staff.png"
                    height="290rem"
                    width="435rem"
                    style={{ borderRadius: "10%" }}
                  />
                </div>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}
              >
                Click the button below to get in touch with us and discuss your
                staffing needs or click the categories below for more info!
              </Typography>

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
        </Grid2>
      </div>
    </div>
  );
};

export default StaffingSolutions2;

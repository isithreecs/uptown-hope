import React, { useState } from 'react';
import './Contact.css';
import { Button } from "react-bootstrap";
import { Box, Grid2, Paper } from "@mui/material";
import Map from '../../components/Map/Map'; 
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  const [isContractorActive, setIsContractorActive] = useState(false);

  const location = {
    address: 'Uptown Hope',
    lat: 39.42452,
    lng: -76.81139
  };

  const handleAssociateClick = (e) => {
    e.preventDefault();
    setIsContractorActive(false);
  };

  const handleContractorClick = (e) => {
    e.preventDefault();
    setIsContractorActive(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex'  }}>
      <Map location={location} zoomLevel={17} className="map" />

            <Paper className="contact-info-box" elevation={3} sx={{ width: '25%', height: '30vh', borderRadius: '15px', alignContent: 'center', }}>
              <div className="uptown-hope">
                <p style={{ color: "rgba(230, 115, 14, 1)", fontWeight: "500" }}>
                  Uptown Hope, LLC
                </p>
                <p>
                  300 Redland Court, Suite 215
                  <br />
                  Owings Mills, MD 21117
                </p>
                <p>410-363-9495</p>
                <a href="mailto: info.uptownhope@gmail.com">info@uptownhope.com</a>
              </div>
            </Paper>
      </Box>
      
      <Grid2 className="all-content" justifyContent={"center"}>
        <Grid2>
          <Box className="direction-button-container">
            <Button
              className="direction-button"
              variant="outlined-primary"
              target="_blank"
              href="https://goo.gl/maps/Vw2s6sVSfVeaSy4v9"
              style={{ width: "250px", position: "relative", top: '10px' }}
            >
              Get Directions
            </Button>
          </Box>

          {/* <Paper
            className="contact-main-paper"
            elevation={8}
            sx={{
              height: "auto",
              width: "80vw",
              marginTop: "10px",
              marginBottom: "80px",
              padding: 3,
              borderRadius: "10px",
              // background: "rgba(218, 220, 226, .6)",
            }}
          > */}
            

            {/* Sliding Form Box */}
            <div className={`box-main ${isContractorActive ? 'right-panel-active' : 'left-panel-active'}`}>
              
              {/* Contractor Form */}
              <div className="main-box-form contractor-box">
                <div className="form-container">
                  <h1>Looking For Staff?</h1>
                  <span className="subtitle">Contact us here for staffing!</span>
                  
                  <ContactForm />                  
 
                </div>
              </div>

              {/* Associate Form */}
              <div className="main-box-form associate-box">
                <div className="form-container">
                  <h1>Employment!</h1>
                  <span className="subtitle">Contact us here if you're looking for a job!</span>
                  
                  <ContactForm />

                </div>
              </div>

              {/* Overlay Box */}
              <div className="overlay-box">
                <div className="overlay">
                  <div className="overlay-panel overlay-right">
                    <h1 className="overlay-title">Need Staffing?</h1>
                    <p className="paragraph-subtitle">Contact us here for your staffing needs!</p>
                    <button type="button" className="ghost" onClick={handleContractorClick}>
                      Click Here!
                    </button>
                  </div>
                  <div className="overlay-panel overlay-left">
                    <h1 className="overlay-title">Need Info on Openings?</h1>
                    <p className="paragraph-subtitle">Contact us here if you're looking for a job!</p>
                    <button type="button" className="ghost" onClick={handleAssociateClick}>
                      Click Here!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* </Paper> */}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Contact;


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
      <Map location={location} zoomLevel={17} className="map" />
      
      <Grid2 className="all-content" justifyContent={"center"}>
        <Grid2>
          <Box className="direction-button-container">
            <Button
              className="direction-button"
              variant="outlined-primary"
              target="_blank"
              href="https://goo.gl/maps/Vw2s6sVSfVeaSy4v9"
              style={{ width: "250px" }}
            >
              Get Directions
            </Button>
          </Box>

          <Paper
            className="contact-main-paper"
            elevation={8}
            sx={{
              height: "auto",
              width: "80vw",
              marginTop: "10px",
              marginBottom: "80px",
              padding: 3,
              borderRadius: "10px",
              background: "rgba(218, 220, 226, .6)",
            }}
          >
            <h2 id="title">Contact Us</h2>

            <div className="contact-info-box">
              <div className="uptown-hope">
                <p style={{ color: "rgba(230, 115, 14, 1)", fontWeight: "500" }}>
                  Uptown Hope, LLC
                </p>
                <p>
                  300 Redland Court, Suite 309
                  <br />
                  Owings Mills, MD 21117
                </p>
                <p>410-363-9495</p>
                <a href="mailto: info.uptownhope@gmail.com">info.uptownhope@gmail.com</a>
              </div>
            </div>

            {/* Sliding Form Box */}
            <div className={`box-main ${isContractorActive ? 'right-panel-active' : 'left-panel-active'}`}>
              
              {/* Contractor Form */}
              <div className="main-box-form contractor-box">
                <div className="form-container">
                  <h1>Contractor Contact</h1>
                  <span className="subtitle">Contact us here if you're a contractor!</span>
                  
                  <ContactForm />                  
 
                </div>
              </div>

              {/* Associate Form */}
              <div className="main-box-form associate-box">
                <div className="form-container">
                  <h1>Associate Contact</h1>
                  <span className="subtitle">Contact us here if you're an associate!</span>
                  
                  <ContactForm />

                </div>
              </div>

              {/* Overlay Box */}
              <div className="overlay-box">
                <div className="overlay">
                  <div className="overlay-panel overlay-right">
                    <h1 className="overlay-title">Contractor?</h1>
                    <p className="paragraph-subtitle">Contact us here if you're a Contractor!</p>
                    <button type="button" className="ghost" onClick={handleContractorClick}>
                      Click Here!
                    </button>
                  </div>
                  <div className="overlay-panel overlay-left">
                    <h1 className="overlay-title">Associate?</h1>
                    <p className="paragraph-subtitle">Contact us here if you're an Associate!</p>
                    <button type="button" className="ghost" onClick={handleAssociateClick}>
                      Click Here!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Contact;


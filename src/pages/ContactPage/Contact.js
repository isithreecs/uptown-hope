import './Contact.css';
import { Button } from "react-bootstrap";
import { Box } from "@mui/material";
import Map from '../../components/Map/Map'; 
import ContactForm from '../../components/ContactForm';

const Contact = () => {

  const location = {
    address: 'Uptown Hope',
    lat: 39.42452,
    lng: -76.81139
  };

  return (
    <Box sx={{ paddingTop:'75px' }}>
      <h2 id="title">Contact Us</h2>
      <Box sx={{ display: 'flex', margin: '0 4em' }}>
      <Box>
        <Map location={location} zoomLevel={17} className="map" />
         <div className="contact-info-box">
            <div className="uptown-hope">
              <p>
                300 Redland Court, Suite 215
                <br />
                Owings Mills, MD 21117
              </p>
              <p>410-363-9495</p>
              <a href="mailto: info@uptownhope.com">info@uptownhope.com</a>
            </div>
          </div>
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
      </Box>
      <Box className="all-content" 
          sx={{ backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
          position: 'relative',
          overflow: 'hidden',
          width: '55vw',
          margin: '5em 1em 5.5em 9.5em', 
          justifyContent: "center" }}
          >
          <Box sx={{ margin: '3em 3em 1em 3em' }}>
            <ContactForm formType="contact" className="form" />
          </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Contact;


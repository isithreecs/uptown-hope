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
      <Box sx={{ 
        display: 'flex', 
        margin: { xs: '0 1em', sm: '0 2em', md: '0 4em' }, 
        flexDirection: { xs: 'column', lg: 'row' } 
        }}
        >
      <Box className="map-and-info">
        <Map location={location} zoomLevel={17} className="map"
        sx={{
          height: { xs: '300px', sm: '300px', md: '300px', lg: '400px', xl: '400px' },
          borderRadius: '10px',
        }}
        />
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
          width: {
            xs: '80vw', 
            sm: '85vw',
            md: '90vw',
            lg: '50vw', 
            xl: '50vw'
          },
          margin: { xs: '2em auto', sm: '2em auto', md: '2em auto', lg: '2em auto', xl: 'auto' }, 
          alignItems: "center" }}
          >
          <Box sx={{ margin: '2em auto' }}>
            <ContactForm formType="contact" className="form" />
          </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Contact;
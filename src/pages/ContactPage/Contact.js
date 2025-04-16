import React from "react";
import Map from '../../components/Map/Map';
import './Contact.css';
import ContactForm from "../../components/ContactForm";
import { Button } from "react-bootstrap";
import { Box, Grid2, Paper } from "@mui/material";


const Contact = () => {
    const location = {
        address: 'Uptown Hope',
        lat: 39.42452,
        lng: -76.81139
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Map location={location} zoomLevel={17} className="map"/>
            <Button className="float-end" variant="outline-success" target="_blank" href="https://goo.gl/maps/Vw2s6sVSfVeaSy4v9">Get Directions</Button>
            <Grid2 container spacing={3} justifyContent={"center"}>
                <Grid2 xs={12}>
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
                        position: "relative", 
                        left: "6em"
                     }}
                    >   
                       <h2 id="title">Contact Us</h2>
                    <div className="contact_info">
                        <div className="uptown-hope">
                            <p style={{color: "rgba(230, 115, 14, 1)", fontWeight: "750"}}>Uptown Hope, LLC</p>
                            <p>300 Redland Court, Suite 309 
                            <br/>Owings Mills, MD 21117</p>
                            <p>410-363-9495 (office)</p>
                            <p>443-326-5069 (cell)</p>
                            <p>410-363-9498 (fax)</p>
                            <a href = "mailto: info.uptownhope@gmail.com">info.uptownhope@gmail.com</a>
                        </div>
                        <ContactForm />
                    </div> 
                    </Paper>
                </Grid2>
            </Grid2>          
        </Box>
    );
}

export default Contact;



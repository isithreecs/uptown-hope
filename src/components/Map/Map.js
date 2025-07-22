import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import './Map.css';
import { Box } from "@mui/material";

// A marker component rendered at a lat/lng

const LocationPin = ({ text }) => (
  <div className="marker">
    <p className="title">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => {
  const mapRef = useRef(null);


  const handleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
  };

  return (

    // Changed the height from '100vh' to '80vh' so the 'Get Directions' button is visible when the
    // user clicks on the page. Adjust as necessary.

    <Box className="map" sx={{ height: '80vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCwNXLxVSXuq_2Gy3pUY6XZWxNjuVbkmYs' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address || "Uptown Hope"}
        />
      </GoogleMapReact>
    </Box>
  );
};

export default Map;

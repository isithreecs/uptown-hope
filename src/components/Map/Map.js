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
  const mapContainerRef = useRef(null);


  const handleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
  };

  return (
    <div className="map-container" ref={mapContainerRef}>
    <Box className="map" sx={{ height: '100vh', width: '100%' }}>
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
    </div>
  );
};

export default Map;

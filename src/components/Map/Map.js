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

  // Optional: callback when map is loaded
  const handleApiLoaded = ({ map, maps }) => {
    // You can do things here like add markers, info windows, etc., if needed.
    // No need for findDOMNode.
    mapRef.current = map;

    // Example: center the map (can be done outside if not needed here)
    // map.setCenter(location);
  };

  return (
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
  );
};

export default Map;

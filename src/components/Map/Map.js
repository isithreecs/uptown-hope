import { useRef } from "react";
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


  const handleApiLoaded = ({ map }) => {
    mapRef.current = map;
  };

  return (

    <Box className="map" sx={{ height: '60vh', 
    width: { xs: '70vw', sm: '70vw', md: '70vw', lg: '35vw', xl: '35vw' }, 
    marginTop: '5em'}}>
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

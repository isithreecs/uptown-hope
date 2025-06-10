
import { faPeace, faSun, faHourglass2, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import {useTheme} from "@mui/material";


const HomeMediaStyling = () => { 

    const theme = useTheme(); 

    const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    
    const mobileStyle = { 
        backgroundImage: `url(${require("../coverImages/uptownhope_bkgrd.png")})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "120vh",
    };

    const tabletStyle = { 
        backgroundImage: `url(${require("../coverImages/uptownhope_bkgrd.png")})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "130vh",
    };

    const desktopStyle = { 
        backgroundImage: `url(${require("../coverImages/uptownhope_bkgrd.png")})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "135vh",
    };

    const backgroundStyle = mobileDevice 
    ? mobileDevice
    : isTablet
    ? tabletStyle
    : desktopStyle

    const cardsStyle = { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        padding: mobileDevice ? 2 : 5, 
    };

    const serviceData = [
        {
            icon: faPeace,
            color: "rgba(240, 119, 19, 0)",
            title: "Holistic",
            description: "approach to quality service provision",
            path: '/contact',
          },
          {
            icon: faSun,
            color: "#f39c12",
            title: "Opportunity",
            description:
              "to help improve clients' productivity through effective staff augmentation",
            path: '/contact',
          },
          {
            icon: faHourglass2,
            color: "#16a085",
            title: "Preparation",
            description: "and commitment to achieve positive outcome for clients and associates",
            path: '/contact',
          },
          {
            icon: faHandsHelping,
            color: "#e74c3c",
            title: "Empowerment",
            description: "of staff and associates to confidently provide superior support to clients",
            path: '/contact',
          },
    ];

    const cardGridStyle = {
        container: {
            spacing: 4, 
            justifyContent: "center", 
        }, 
        item: {
            xs: 12, 
            sm: 6, 
            md: 3, 
        }
    };

    const footerStyle = {
        backgroundColor: "linear-gradient(175deg, lightgray, #ffffff)", 
        color: "rgba(230, 115, 14, 1)", 
        py: 3, 
        textAlign: "center", 
    }

    return {
    isTablet,
    isDesktop,
    mobileDevice,
    mobileStyle,
    tabletStyle,
    desktopStyle,
    cardsStyle,
    serviceData,
    cardGridStyle,
    footerStyle,
  };
};


export default HomeMediaStyling;
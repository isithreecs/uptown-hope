import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import './MainNav.css';
import { AppBar, IconButton, Slide, Toolbar, Zoom, Typography, Fab, MenuIcon, KeyboardArrowUpIcon } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// import useScrollTrigger from '@mui/material';


const MainNav2 = () => {


    
    // Adds fade effect to the Navbar when scrolling down

    // let lastScrollTop = 0; // Track the last scroll position

    // window.addEventListener("scroll", function () {
    //   let currentScroll =
    //     window.pageYOffset || document.documentElement.scrollTop;
    //   let navbar = document.querySelector(".navbar");

    //   if (currentScroll > lastScrollTop) {

    //     // Scrolling down
    //     navbar.classList.add("hidden"); // Add 'hidden' class to hide the navbar
    //   } else {

    //     // Scrolling up
    //     navbar.classList.remove("hidden"); // Remove 'hidden' class to show the navbar
    //   }

    //   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
    // });

    function HideOnScroll(props) { 
        const trigger = useScrollTrigger();

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {props.children}
            </Slide>
        );
    }

    function ScrollTop(props) { 
        const trigger = useScrollTrigger({
            target: props.window ? window : undefined, 
            disableHysteresis: true, 
            threshold: 100,
        });

        const handleClick = (event) => {
            const anchor = (event.target.ownerDocument || document).querySelector(
                '#back-to-top-anchor'
            );

            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };

        return (
            <Zoom in={trigger}>
                <div 
                    onClick={handleClick}
                    role="presentation"
                    style={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                    {props.children}
                </div>
            </Zoom>
        );
    }

    function ElevationScroll(props) { 
        const trigger = useScrollTrigger ({
            disableHysteresis: true, 
            threshold: 0, 
        });

        return React.cloneElement(props.children, {
            elevation: trigger ? 4 : 0, 
        });
    }


    return(
        <div>
        <ElevationScroll>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Scroll App Bar
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </ElevationScroll>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop> 
            <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>


        {/* <Navbar collapseOnSelect bg="light" expand="xxl">
            <Navbar.Brand href="/">
                <div className="nav-logo">
                    <img
                        src="../images/uptownhope_logo.jpeg"
                        alt="Uptown Hope logo" 
                        width="100"
                        height="60"
                    />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/services">
                        <Nav.Link>Services</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/employment">
                        <Nav.Link>Career Opportunities</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/staffing-solutions">
                        <Nav.Link>Staffing Solutions</Nav.Link>
                    </LinkContainer>        
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/career-opportunities">
                        <Nav.Link>Career Opportunities2</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about2">
                        <Nav.Link>About2</Nav.Link>
                    </LinkContainer>    
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}
    </div>
    );
}

export default MainNav2;

// Added Employee Page
//                     <LinkContainer to="/Employees">
//                         <Nav.Link>Employees</Nav.Link>
//                     </LinkContainer>



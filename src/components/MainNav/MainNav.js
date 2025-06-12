import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MainNav.css';

const MainNav = () => {

    // Adds fade effect to the Navbar when scrolling down

    let lastScrollTop = 0; // Track the last scroll position

    window.addEventListener("scroll", function () {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      let navbar = document.querySelector(".navbar");

      if (currentScroll > lastScrollTop) {

        // Scrolling down
        navbar.classList.add("hidden"); // add.('hidden') class to hide the navbar
      } else {

        // Scrolling up
        navbar.classList.remove("hidden"); // remove.('hidden') class to show the navbar
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
    });


    return(
        <Navbar collapseOnSelect bg="light" expand="xxl">
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
                    <LinkContainer to="/career-opportunities">
                        <Nav.Link>Careers</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/staffing-solutions">
                        <Nav.Link>Staffing Solutions</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;





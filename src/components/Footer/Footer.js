import React from "react";
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
      <footer className="footer-distributed">
        <div className="footer-top-links">
          <p className="footer-links">
            <a href="/" className="link-1">
              Home
            </a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/employment">Careers</a>
            <a href="/staffing-solutions">Staffing Solutions</a>
            <a href="/contact">Contact</a>
            {/*Added Login Page*/}
            {/* <a href="/Login">Login</a>
            <a href="/SignUp">SignUp</a> */}
          </p>
        </div>

        <div className="footer-content">
          
			<div className="footer-left">
				<div className="logo">
				<img
					src="../images/uptownhope_logo.jpeg"
					width="240"
					height="200"
					paddingLeft="1"
					className="logo"
					alt="Uptown Hope logo"
				/>
				</div>
			</div>
			

			<div className="footer-center">
			<div>
				<i className="fa fa-map-marker"></i>
				<p>
				<span>300 Redland Ct., Suite 309</span>{" "}
				<br />
				<span>Owings Mills, MD 21117</span>
				</p>
			</div>
			<div>
				<i className="fa fa-phone"></i>
				<p>
				<span>(410) 363-9495</span>
				</p>
			</div>
			<div>
				<i className="fa fa-envelope"></i>
				<p>
				<span>
					<a href="mailto:info.uptownhope@gmail.com">
					info.uptownhope@gmail.com
					</a>
				</span>
				</p>
			</div>
			</div>

			<div className="footer-right">
				<p className="footer-company-about">
					<span>Connect with us on social media</span>
				</p>
				<div className="footer-icons">
					<div className="social-icons">
					<SocialIcon
						className="linkedin"
						url="https://linkedin.com/company/uptown-hope-llc/"
						network="linkedin"
					/>
					</div>
					<div className="social-icons">
					<SocialIcon className="facebook" url="" network="facebook" />
				</div>
			</div>
</div>
        </div>
        <br />
        <br />
        <span className="footer-copyright">
          © 2017 Uptown Hope. All Rights Reserved
        </span>

      </footer>
    );
}

export default Footer;
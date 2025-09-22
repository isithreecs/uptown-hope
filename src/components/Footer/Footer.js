import React from "react";
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
      <footer className="footer-distributed">
        <div className="footer-top-links">
          <p className="footer-links">
            <a href="/home" className="link-1">
              Home
            </a>
            <a href="/about">About</a>
            <a href="/career-opportunities">Careers</a>
            <a href="/staffing-solutions">Staffing Solutions</a>
            <a href="/contact">Contact</a>
          </p>
        </div>

        <div className="footer-content">
          
			<div className="footer-left">
				<div className="logo">
					<a href="/" className="footer-logo-link">
          <img
            src="../images/uptownhope_logo.jpeg"
            width="240"
            height="200"
            paddingleft="1"
            className="logo"
            alt="Uptown Hope logo"
          /></a>
				</div>
			</div>
			

			<div className="footer-center">
			<div>
				<p>
				<span>300 Redland Ct., Suite 215</span>{" "}
				<br />
				<span>Owings Mills, MD 21117</span>
				</p>
			</div>
			<div>
				<p>
				<span>(410) 363-9495</span>
				</p>
			</div>
			<div>
				<p>
				<span className="footer-email-link">
					<a href="mailto:info@uptownhope.com">
					info@uptownhope.com
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
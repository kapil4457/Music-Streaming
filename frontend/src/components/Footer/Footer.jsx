import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main_footer">
      <div className="heading">Maje Karo 😄</div>
      <div className="icons">
        <a href="https://www.instagram.com/kapilsoni4457/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/kapil-soni-2b25981ab/">
          <LinkedInIcon />
        </a>
        <a href="mailto:kapilsoni54768161@gmail.com">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;

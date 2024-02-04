import React from "react";
import { FaHeart, FaRegCopyright } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      Created By
      <FaHeart className="fh-icon" />
      <a href="https://www.linkedin.com" target="_blank">
        Rahul Khullar
      </a>
      <FaRegCopyright className="fc-icon" />
      {year}
      <strong>
        Food<span>Fiesta</span>
      </strong>
    </div>
  );
};

export default Footer;

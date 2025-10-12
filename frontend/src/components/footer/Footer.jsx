import React from 'react';
import classes from './Footer.module.css';
import footer_logo from '../Assets/Frontend_Assets/logo_big.png';
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png';
import pinster_icon from '../Assets/Frontend_Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_top}>
        {/* Logo Section */}
        <div className={classes.footer_logo}>
          <img src={footer_logo} alt="footer logo" />
          <p>SHOPPER</p>
        </div>

          {/* Links Section */}
          <ul className={classes.menu_list}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* Social Icons Section */}
          <div className={classes.footer_socailMedia_icon}>
            <div>
            <img src={instagram_icon} alt="Instagram" /></div>
          <div>
            <img src={pinster_icon} alt="Pinterest" />
          </div>
          <div>
            <img src={whatsapp_icon} alt="WhatsApp" /></div>
          </div>
       </div>
       <hr />
      {/* Copyright Section */}
      <div className={classes.footer_copyright}>
        Copyright @ 2025 - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

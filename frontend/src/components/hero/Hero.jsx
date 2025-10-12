import React from 'react';
import classes from './Hero.module.css';
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png';
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'; 
import hero_image from '../Assets/Frontend_Assets/hero_image.png'; 

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroLeft}>
        <div>
        <h1>NEW ARRIVALS ONLY</h1>
        <div className={classes.handHandIcon}>
            <p>NEW</p>
            <img src={hand_icon} alt="Hand Icon" />
        </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className={classes.heroLatestBtn}> 
            <div>Hero latest Collections</div>
            <img src={arrow_icon} alt="arrow image" />
        </div>
      </div>

      <div className={classes.heroRight}>
        <img src={hero_image} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;

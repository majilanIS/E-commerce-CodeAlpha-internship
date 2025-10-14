import React from 'react';
import classes from './Description.module.css';

const DescriptionBox = () => {
  return (
    <div className={classes.descriptionBox}>
      {/* Navigation Section */}
      <div className={classes.descriptionboxNavigation}>
        <div className={classes.descriptionboxNavBox}>
          Description
        </div>
        <div className={`${classes.descriptionboxNavBox} ${classes.fade}`}>
          Reviews (122)
        </div>
      </div>

      {/* Description Section */}
      <div className={classes.descriptionboxDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
          et perspiciatis rem. Impedit dolorum illum dolorem similique, cupiditate
          quisquam, veniam quam corrupti voluptatum sequi consequuntur nobis,
          eveniet quas repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          libero. Id odio eum aspernatur vel velit, dignissimos porro facilis ad
          hic officia qui tempora assumenda nulla illum aperiam! Voluptates, fuga?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

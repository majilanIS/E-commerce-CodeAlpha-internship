import React, { useState } from 'react';
import classes from './LoginSignup.module.css'; 

const LoginSignup = () => {
  return (
    <div className={classes.login_signup}>
      <div className={classes.login_signup_container}> 
        <h1>Sign Up</h1>

        <div className={classes.loginSignup_signup}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Continue</button>

        <p>
          Already have an Account? <span>Login here</span>
        </p>

        <div className={classes.loginSignup_agree}>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the terms & conditions</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

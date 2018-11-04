import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Login.css";
import Navbar from "./Navbar";

class Login extends Component {
  render() {
    return (
      <div className="Create-login">
        <Navbar />
        <div className="Create-login-wrapper">
          <h1 className="Create-login-title">
            This page for create account or fill form {this.props.LoginId}
          </h1>
          <div className="Create-login-content">
            <form className="Create-login-form" method="post">
              <label for="Create-login-form_name">Name</label>
              <input type="text" id="Create-login-form_name" className="Create-login-form_name" />
              
              <label for="Create-login-form_email">E-mail</label>
              <input type="email" id="Create-login-form_email" className="Create-login-form_email" />

              <label for="Create-login-form_email">Link to LinkedIn, personal website or portfolio<span className="require">*</span></label>
              <input type="text" id="Create-login-form_sites" className="Create-login-form_sites" />

              <label for="Create-login-form_goal">Why are you the next Upbeater in your field ?< span className ="require">*</span></label>
              <textarea className="Create-login-form_goal" id="Create-login-form_goal" />

              <label for="Create-login-form_nomination">Who nominated you?</label>
              <input type="text" id="Create-login-form_nomination" className="Create-login-form_nomination" />
              <p>
              By submitting this form you allow Upbeater to store 
              and process your personal data for the purpose of evaluating and communicating potential 
              employer-employee relationship now and within the next 12 months. 
              We won't use your information for any other purpose unless you give us consent to send other updates and relevant information:
              </p>

              <label for="agreement">
                I agree to receive other communications from Upbeater.
                <input type="checkbox" id="agreement" />
              </label>

              <p>
              You may unsubscribe from these communications at any time.
              For more information on how to unsubscribe, our privacy practices,
              and how we are committed to protecting and respecting your privacy, 
              please review our Privacy Policy or contact
              <a href="mailto:contact@upbeater.com">contact@upbeater.com</a>
              </p>
              <input type="submit" value="Submit" />
            </form>
          </div>     
        </div>
      </div>
    );
  }
}

export default Login;

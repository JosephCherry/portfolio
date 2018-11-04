import React, { Component } from "react";
import "./Login.css";
import UserTextInput from "../../components/UserTextInput/UserTextInput";
import UserButton from "../../components/UserButton/UserButton";
import UserLink from "../../components/UserLink/UserLink";
import Server from "../../common/Server.js";
import { navigate } from "@reach/router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      submitDisabled: true,
      displayLoginError: false,
      loginErrorMessage: ''
    };
  };

  handleChangeEmail = (e) => {
    let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
    let submitValid = this.state.passwordValid && emailValid
    this.setState({
      email: e.target.value,
      emailValid: emailValid,
      submitDisabled: !submitValid
    });
  };

  handleChangePassword = (e) => {
    let passwordValid = e.target.value.length > 6 ? true : false;
    let submitValid = this.state.emailValid && passwordValid;
    this.setState({
      password: e.target.value,
      passwordValid: passwordValid,
      submitDisabled: !submitValid
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //TODO:
    // 1. Construct a correct Request
    // 2. Send request to server
    // 3. Handle server response:
    //   3a. If login granted and user logged in for the first time (server knows and should provide this in the response)
    //       redirect to EditPortfolio
    //   3b. If login granted and user logged in before redirect to the "Dashboard" (dashboard will fill itself with data for this user)
    //   3c. If access denied: show error message.

    const { email, password } = this.state;
    const serverResponse = Server.sendData('/api/login', { email, password });

    serverResponse.then(data => {
      console.log(`Server responded with this data`, data);
      if (data.message === 'Redirect user to Edit Porfolio') {
        console.log('If met');
        navigate('./EditPortfolio')
      }

      if (data.message === 'Redirect user to Dashboard') {
        navigate('./Dashboard')
      }

      if (data.error === 'Login information was incorrect') {

        this.setState({
          loginErrorMessage: data.error,
          displayLoginError: true

        })
      }
    }).catch(err => {
      console.log(`Error`, err);
      this.setState({
        loginErrorMessage: 'Error has occurred trying to log in',
        displayLoginError: true

      })

    });

    console.log(serverResponse);

  }


  render() {
    return (
      <div >
        <div className="login-page">
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <div >
                <UserTextInput type="email" label="Email" id="login-form-email" value={this.state.email} onChange={this.handleChangeEmail} />
              </div>
              <div>
                <UserTextInput type="password" label="Password" id="login-form-password" value={this.state.password} onChange={this.handleChangePassword} />
              </div>
              <div className="login-form-submit">
                <UserButton type="submit" text="Login" value="Login" disabled={this.state.submitDisabled} />
                {this.state.loginErrorMessage && <h3>{this.state.loginErrorMessage}</h3>}
              </div>
            </form>

            <div className="">
              <UserLink href="/login/forgotpassword" value="forgot your password"></UserLink>
            </div>
            <div className="">
              <UserLink href="/login/becomeupbeater" value="become an upbeater"></UserLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

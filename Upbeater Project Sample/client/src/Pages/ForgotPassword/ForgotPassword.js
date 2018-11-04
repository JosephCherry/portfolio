import React, { Component } from "react";
import UserLink from "../../components/UserLink/UserLink";

import "./ForgotPassword.css";
import UserTextInput from "../../components/UserTextInput/UserTextInput";
import UserButton from "../../components/UserButton/UserButton";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddr: '',
            emailValid: false,
        };
        // This binding is necessary to make `this` work in the callback
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSendLink = this.handleSendLink.bind(this);
    }

    /*
    This is a email validation basic logic
    */
    validateField(value) {
        let emailValid = this.state.emailValid;
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.setState({
            emailValid: emailValid
        });
    }

    /* This function is called when input field is changed */
    updateInputValue(evt) {
        const name = evt.target.name;
        const value = evt.target.value;

        this.setState({ [name]: value },
            () => {
                this.validateField(value)
            });
    }

    /* TODO: Currently implemented as a alert message.
    Need to connect to the server so the server can:
    1. verify if there's a user with this email 
    2. send email to this address
    3. respond that email has been sent 
    OR
    1. notice that no user with this email exists in db
    2. respond to client about the error.
    3. error from server has to be shown. HOW? */
    handleSendLink = (evt) => {
        alert('A email was sent to : ' + this.state.emailAddr);
        evt.preventDefault();
    }

    render()
     {
        return (
            <div>
                <form onSubmit={this.handleSendLink}>
                    <div className="emailbox">
                        <UserTextInput type="email" label="Email" placeholder="username@domain.com" defaultValue={this.state.emailAddr} onChange={this.updateInputValue} />
                    </div>

                    <div className="mdc-button">
                        <UserButton type="submit" text="Send Link" value="Send link" disabled={!this.state.emailValid} /> {/* If invalid email address provided, button will not be enabled */}
                    </div>
                </form>

                <div className="loginbox">
                    <UserLink href="/login" value="login" />
                </div>
                <div className="upbeaterbox">
                    <UserLink href="/login/becomeupbeater" value="become an upbeater" />
                </div>
            </div>
        );

    }
}

export default ForgotPassword;
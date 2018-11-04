import React, { Component } from "react";
import UserLink from "../../components/UserLink/UserLink";
import UserButton from "../../components/UserButton/UserButton";
import UserTextInput from "../../components/UserTextInput/UserTextInput";

class BecomeUpbeater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            emailValid: false,
            nameValid: false,
            submitDisabled: true
        };
    };

    handleChangeEmail = (e) => {
        let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        let submitValid = this.state.nameValid && emailValid
        this.setState({
            email: e.target.value,
            emailValid: emailValid,
            submitDisabled: !submitValid
        })
    };

    handleChangeName = (e) => {
        let nameValid = e.target.value.match(/^[a-z0-9 .-]+$/i) ? true : false;
        let submitValid = this.state.emailValid && nameValid
        this.setState({
            name: e.target.value,
            nameValid: nameValid,
            submitDisabled: !submitValid
        })
    };

    handleSendLink = (e) => {
        alert('A email was sent to : ' + this.state.email);
        e.preventDefault();
    };

    render() {
        return (
            <div className="upbeater">
                <form onSubmit={this.handleSendLink}>
                    <div className="upbeater_element">
                        <UserTextInput
                            label="Full Name"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                        />
                    </div>
                    <div className="upbeater_element">
                        <UserTextInput
                            type="email"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                        />
                    </div>
                    <div className="upbeater_element">
                        <UserTextInput
                            label="Linkedin or website"
                        />
                    </div>
                    <div className="upbeater_button">
                        <UserButton
                            type="submit"
                            text="Submit Request"
                            name="submitRequest"
                            value="submit request"
                            disabled={this.state.submitDisabled}
                        />
                    </div>
                </form>

                <div className="login_link">
                    <UserLink href="/login" value="already have an account" />
                </div>
            </div>
        );
    }
}

export default BecomeUpbeater;

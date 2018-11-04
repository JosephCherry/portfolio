import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";

import Home from "./components/Home";
import Project from "./components/Project";
import Login from "./Pages/Login/Login";
import Navbar from "./components/Navbar";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import BecomeUpbeater from "./Pages/BecomeUpbeater/BecomeUpbeater";
import EditPortfolio from "./Pages/EditPortfolio/EditPortfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import InputForm from "./Pages/LoginFormik/InputForm";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Navbar />
          <Router>
            <Home path="/" />
            <Project path="project/:projectId" />
            <Login path="login" />
            <BecomeUpbeater path="login/becomeupbeater" />
            <ForgotPassword path="login/forgotpassword" />
            <EditPortfolio path="EditPortfolio" />
            <Dashboard path="Dashboard" />
            <InputForm path="login/loginformik" />
          </Router>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Link from "./NavLink";

import "./Navbar.css";

const links = [
  { path: "/", name: "Home" },
  { path: "/project/27", name: "Project 27" },
  { path: "/login", name: "Login" },
  { path: "/login/becomeupbeater", name:"Become Upbeater"},
  { path: "/login/forgotpassword", name:"Forgot Password"},
  { path: "login/loginformik", name:"Login Formik"}
];

class Navbar extends Component {
  render() {
    return (
      <ul className="Navbar">
        {links.map((link, i) => {
          return (
            <li className="Navbar-item" key={i}>
              <Link
                className="Navbar-link"
                to={link.path}
                activeClass="Navbar-linkActive"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Navbar;
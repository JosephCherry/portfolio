import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="Project-wrapper">
          <h1 className="Project-title">
            This is the page for Project {this.props.projectId}
          </h1>
          <div className="Project-content">
            <p>We could have some text and pictures here</p>
            <p>See how the title depends on what url you have</p>
            <h2>Other projects</h2>
            <ul>
              <li>
                <Link to="../52">Project 52</Link>
              </li>
              <li>
                <Link to="../operation-ola">Operation Ola</Link>
              </li>
              <li>
                <Link to="../tester">Project test</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

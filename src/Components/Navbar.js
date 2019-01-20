import React, { Component } from 'react';
import '../App.css';

export default class Navbar extends Component {
    render() {
      return (
          <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
    aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                </ul>

            </div>
        </nav>

      </div>
      )
    }
}
import React, { Component } from 'react';
import '../App.css';

export default class Navbar extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
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
      )
    }
}
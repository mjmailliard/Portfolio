import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";

class Layout extends Component {
  render() {
    return (
      <div className="divMain clouds">
        <header>
          <Navbar />
        </header>

        {this.props.children}

        {/* <!-- Footer --> */}
        <footer className="page-footer font-small special-color-dark pt-4">
          {/* <!-- Footer Elements --> */}
          <div className="container">
            {/* <!-- Social buttons --> */}
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a
                  href="https://github.com/mjmailliard/"
                  target="_blank"
                  className="btn-floating btn-tw mx-1"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-lg"> </i>
                  &nbsp; mjmailliard &nbsp;
                </a>
              </li>

              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/mikemailliard/"
                  target="_blank"
                  className="btn-floating btn-li mx-1"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-lg"> </i>
                  &nbsp; mikemailliard
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;

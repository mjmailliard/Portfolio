import React, { Component } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import NameTag from "./Components/NameTag";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qod: "",
      credit: ""
    };
  }
  componentDidMount() {
    fetch(`https://quotes.rest/qod`, {
      method: "GET",
      mode: "cors",
      headers: { Accept: "application/json" }
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          qod: data.contents.quotes[0],
          credit: data.contents.copyright
        });
      });
  }
  render() {
    const quotes = this.state.qod;

    return (
      <div className="mainDiv">
        <Layout>
          <NameTag />
          <br />
          <h1>Full Stack Web Developer</h1>
          <br />
          <h4 className="techList">
            React.js, React Native, HTML, CSS, Bootstrap, REST, Hapi.js, LoopBack, PostgreSQL,
            MongoDB
          </h4>
          <div className="streak grey lighten-3 dailyQuote">
            <div className="flex-center">
              <ul className="mb-0 list-unstyled">
                <li>
                  <h2 className="h2-responsive">
                    <i className="fas fa-quote-left" aria-hidden="false" />{" "}
                    &nbsp; {quotes.quote} &nbsp;{" "}
                    <i className="fas fa-quote-right" aria-hidden="true" />
                  </h2>
                </li>
                <li className="mb-0">
                  <h5 className="text-center font-italic mb-0">
                    ~ {quotes.author}
                  </h5>
                </li>
              </ul>
              <div className="copyright">
                ©
                <a
                  href="https://theysaidso.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.state.credit}
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </Layout>
      </div>
    );
  }
}

export default App;

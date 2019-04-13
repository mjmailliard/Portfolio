import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Projects.css";
import Layout from "../Components/Layout";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* <!-- Section heading --> */}
          <h1 className="h1-responsive font-weight-bold my-5">Projects</h1>
          {/* <!-- Section description --> */}
          <h3 className="grey-text w-responsive mx-auto mb-5">
            Take a look at some of my creations and collaborations!
          </h3>
          {/* <!-- Grid row --> */}
          <div className="row text-center">
            {/* <!-- Grid column --> */}
            <div className="col-lg-4 col-md-6">
              {/* <!--Featured image--> */}
              <div className="view overlay rounded z-depth-1">
                <a
                  href="https://adoring-knuth-8e3ec6.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/wishlist.png"
                    className="img-fluid"
                    alt="Wishlists"
                  />
                </a>
                <div className="mask rgba-white-slight" />
              </div>
              {/* <!--Excerpt--> */}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">Wishlists</h4>
                <p className="techsUsed">
                  React.js, Hapi.js, Monk, MongoDB, CSS
                </p>
                <p className="grey-text">
                  This was my first real full-stack application. <br />
                  If you dip into the code, you'll be able to follow the roadmap
                  of my learning process.
                </p>

                <a
                  href="https://adoring-knuth-8e3ec6.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-link left" /> View project
                </a>{" "}
                &nbsp;
                <a
                  href="https://github.com/mjmailliard/wishlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-code left" /> View code
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}
            {/* <!-- Grid column --> */}
            <div className="col-lg-4 col-md-6">
              {/* <!--Featured image--> */}
              <div className="view overlay rounded z-depth-1">
                <a href="/" rel="noopener noreferrer">
                  <img
                    src="/img/portfolio.png"
                    className="img-fluid"
                    alt="My Portfolio Site"
                  />
                </a>
                <div className="mask rgba-white-slight" />
              </div>
              {/* <!--Excerpt--> */}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">My Portfolio Site</h4>
                 <p className="techsUsed">
                  React.js, REST API's, Bootstrap, CSS
                </p>               
                <p>
                  Look Familiar? I hope so... I had a lot of fun building this,
                  Don't forget to check out the Dad Jokes API on the About page.
                </p>

                <Link to="/" className="btn btn-dark btn-sm">
                  <i className="fas fa-link left" /> View project
                </Link>{" "}
                &nbsp;
                <a
                  href="https://github.com/mjmailliard/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-code left" /> View code
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}
            {/* <!-- Grid column --> */}
            <div className="col-lg-4 col-md-6">
              {/* <!--Featured image--> */}
              <div className="view overlay rounded z-depth-1">
                <a
                  href="https://amazing-mcclintock-d2b830.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/potluckPlanner.png"
                    className="img-fluid"
                    alt="css menu"
                  />
                </a>
                <div className="mask rgba-white-slight" />
              </div>
              {/* <!--Excerpt--> */}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">Potluck Planner</h4>
                <p className="techsUsed">React.js, Firebase, CSS</p>                
                <p className="grey-text">
                  This was a nice little tutorial that I used as an introduction
                  to Firebase, React state and responsive web design.
                </p>

                <a
                  href="https://amazing-mcclintock-d2b830.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-link left" /> View project
                </a>{" "}
                &nbsp;
                <a
                  href="https://github.com/mjmailliard/fun-food-friends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-code left" /> View code
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}
            {/* <!-- Grid column --> */}
            <div className="col-lg-4 col-md-6">
              {/* <!--Featured image--> */}
              <div className="view overlay rounded z-depth-1">
                <a href="/projects/nametag" rel="noopener noreferrer">
                  <img
                    src="/img/nameTagCSS.png"
                    className="img-fluid"
                    alt="Nametag"
                  />
                </a>
                <div className="mask rgba-white-slight" />
              </div>
              {/* <!--Excerpt--> */}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">CSS Name Tag</h4>
                <p className="techsUsed">CSS, HTML</p>
        
                <p className="grey-text">
                  You might recognize this from the front page. <br />
                  I went a little further afterwards.
                  <br />
                  Check it out!
                </p>
                <a href="/projects/nametag" className="btn btn-dark btn-sm">
                  <i className="fas fa-link left" /> View project
                </a>{" "}
                &nbsp;
                <a
                  href="https://github.com/mjmailliard/Name-Tag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-code left" /> View code
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}
            {/* <!-- Grid column --> */}
            <div className="col-lg-4 col-md-6">
              {/* <!--Featured image--> */}
              <div className="view overlay rounded z-depth-1">
                <a href="/projects/cssmenu" rel="noopener noreferrer">
                  <img
                    src="/img/cssMenu.gif"
                    className="img-fluid"
                    alt="css menu"
                  />
                </a>
                <div className="mask rgba-white-slight" />
              </div>
              {/* <!--Excerpt--> */}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">CSS Menu</h4>
                <p className="techsUsed">CSS, HTML</p>
                <p className="grey-text">
                  I designed and created this menu as part of an intern
                  experience. Coming soon, to a major sports website near you!
                  (I hope.)
                </p>
                <Link to="/projects/cssmenu" className="btn btn-dark btn-sm">
                  <i className="fas fa-link left" /> View project
                </Link>{" "}
                &nbsp;
                <a
                  href="https://github.com/mjmailliard/css-menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  <i className="fas fa-code left" /> View code
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          <br />
          <br />
          <br />
        </Layout>
      </div>
    );
  }
}

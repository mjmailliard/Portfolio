import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import Layout from '../Components/Layout'

export default class Projects extends Component {
    render() {
      return (
          <div>
              <Layout>
              {/* <h1>Projects</h1>
              <Link to="/projects/nametag">NameTag</Link><br/>
              <Link to="/projects/cssmenu">CSS Menu</Link><br/>
              fun food friends
               Wishlists
              class project? */}
{/* <!-- Section heading --> */}
<h2 className="h1-responsive font-weight-bold my-5">Projects</h2>
{/* <!-- Section description --> */}
<h4 className="grey-text w-responsive mx-auto mb-5">Take a look at some of my creations and collaborations!
</h4>

{/* <!-- Grid row --> */}
<div className="row text-center">

  {/* <!-- Grid column --> */}
  <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
    {/* <!--Featured image--> */}
    <div className="view overlay rounded z-depth-1">
      <img src="/img/wishlist.png" className="img-fluid" alt="Wishlists"></img>
      
        <div className="mask rgba-white-slight"></div>
      
    </div>
    {/* <!--Excerpt--> */}
    <div className="card-body pb-0">
      <h4 className="font-weight-bold my-3">Wishlists</h4>
      <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet ut et voluptates repudiandae.
      </p>
      <a href="https://adoring-knuth-8e3ec6.netlify.com" target="_blank" rel="noopener noreferrer" className="btn btn-indigo btn-sm"><i className="fas fa-clone left"></i><button className="btn btn-indigo btn-sm">View project</button></a>
    </div>
  </div>
  {/* <!-- Grid column --> */}
  {/* <!-- Grid column --> */}
  <div className="col-lg-4 col-md-6">
    {/* <!--Featured image--> */}
    <div className="view overlay rounded z-depth-1">
      <img src="/img/cssMenu.gif" className="img-fluid" alt="css menu"></img>
      
        <div className="mask rgba-white-slight"></div>
      
    </div>
    {/* <!--Excerpt--> */}
    <div className="card-body pb-0">
      <h4 className="font-weight-bold my-3">CSS Menu</h4>
      <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet ut et voluptates repudiandae.
      </p>
      <Link to="/projects/cssmenu"><button className="btn btn-indigo btn-sm"><i className="fas fa-clone left"></i> View project</button></Link>
    </div>
  </div>
  {/* <!-- Grid column --> */}
  {/* <!-- Grid column --> */}
  <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
    {/* <!--Featured image--> */}
    <div className="view overlay rounded z-depth-1">
      <img src="/img/nameTagCSS.png" className="img-fluid" alt="Nametag"></img>
      
        <div className="mask rgba-white-slight"></div>
      
    </div>
    {/* <!--Excerpt--> */}
    <div className="card-body pb-0">
      <h4 className="font-weight-bold my-3">CSS Name Tag</h4>
      <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet ut et voluptates repudiandae.
      </p>
      <button className="btn btn-indigo btn-sm"><i className="fas fa-clone left"></i> View project</button>
    </div>
  </div>
  {/* <!-- Grid column --> */}
  {/* <!-- Grid column --> */}
  <div className="col-lg-4 col-md-6">
    {/* <!--Featured image--> */}
    <div className="view overlay rounded z-depth-1">
      <img src="/img/cssMenu.gif" className="img-fluid" alt="css menu"></img>
     
        <div className="mask rgba-white-slight"></div>
      
    </div>
    {/* <!--Excerpt--> */}
    <div className="card-body pb-0">
      <h4 className="font-weight-bold my-3">Potluck Planner</h4>
      <p className="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet ut et voluptates repudiandae.
      </p>
      <button className="btn btn-indigo btn-sm"><i className="fas fa-clone left"></i> View project</button>
    </div>
  </div>
  {/* <!-- Grid column --> */}

  </div>
  <br/>
  <br/>
  <br/>
              </Layout>              
          </div>
      )
    }
}
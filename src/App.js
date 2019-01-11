import React, { Component } from 'react';
import './App.css';
// import Navbar from './Components/Navbar'
import Layout from './Components/Layout';
// import Layout from './Components/Layout'
import Routing from './Routing'
class App extends Component {
  render() {
    return (
      <div className="">
      <Layout>



<div className='nameTag'>
<div name="maintag" className="helloMyNameIs">
   <section className="hello">Hello</section> 
   <section className="mynameis">my name is</section>
  </div>
  <div name="namespace" className="name">
    Mike
  </div>
  <div name="bottomBar" className="bottomBar">
  </div>
</div>
</Layout>
      </div>
    );
  }
}

export default App;

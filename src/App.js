import React, { Component } from 'react';
import './App.css';
// import Navbar from './Components/Navbar'
import Layout from './Components/Layout';
// import Layout from './Components/Layout'
import NameTag from './Components/NameTag'

class App extends Component {
  render() {
    return (
      <div className="mainDiv">
        <Layout>

          <NameTag/>


        </Layout>
      </div>
    );
  }
}

export default App;

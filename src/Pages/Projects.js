import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import Layout from '../Components/Layout'

export default class Projects extends Component {
    render() {
      return (
          <div>
              <Layout>
              <h1>Projects</h1>
              <Link to="/projects/nametag">NameTag</Link>
              </Layout>              
          </div>
      )
    }
}
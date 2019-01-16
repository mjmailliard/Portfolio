import React, { Component } from 'react';
import '../../App.css';
import Layout from '../../Components/Layout'
import CssMenu from '../../Components/CssMenu'

export default class ProjectCssMenu extends Component {
    render() {
      return (
          <div>
              <Layout>
                <CssMenu/>
              <h1>CSS Menu</h1>
             

              </Layout>
          </div>
      )
    }
}
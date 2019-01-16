import React, { Component } from 'react';
import '../../App.css';
import Layout from '../../Components/Layout'
import CssMenu from '../../Components/CssMenu'


export default class ProjectCssMenu extends CssMenu {
    constructor(props){
        super(props)
            this.state = {
                teamLogo: ''
            }   
    }
handleChangeLogo (logo)  {
    console.log(logo)
    this.setState({teamLogo: logo})
}
    render() {

      return (
          <div>
              <Layout>
                <CssMenu changeLogo={e=> this.handleChangeLogo(e)}/>
              <h1>CSS Menu</h1>
             <img src={this.state.teamLogo} alt=""></img>

              </Layout>
          </div>
      )
    }
}
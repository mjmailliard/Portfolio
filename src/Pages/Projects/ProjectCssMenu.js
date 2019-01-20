import React, { Component } from 'react';
import '../../App.css';
import Layout from '../../Components/Layout'
import CssMenu from '../../Components/CssMenu'


export default class ProjectCssMenu extends Component {
    constructor(props){
        super(props)
            this.state = {
                teamLogo: '/img/jazz.png'
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
              <p>
            I created this menu (on the left) for a sports website.<br/>
              The team links were taking up a large portion of the screen.<br/>
              With this menu, the links are easier to use and allow more content to<br/>
              be included on the page.
                <br/>
                Selecting an icon will display it's image on the screen <br/>
            </p> 
             <img src={this.state.teamLogo} className="teamImage" alt=""></img>

              </Layout>
          </div>
      )
    }
}
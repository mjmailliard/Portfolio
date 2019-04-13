import React, { Component } from "react";
import "../../App.css";
import Layout from "../../Components/Layout";
import CssMenu from "../../Components/CssMenu";

export default class ProjectCssMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamLogo: "/img/jazz.png"
    };
  }
  handleChangeLogo(logo) {
    console.log(logo);
    this.setState({ teamLogo: logo });
  }
  render() {
    return (
      <div>
        <Layout>
          <CssMenu changeLogo={e => this.handleChangeLogo(e)} />
            <div className='bottomPadding'>
            <h1>CSS Menu</h1>
            <p className="maxWidthForText">
              <h6>I created this menu (on the left) for <a href="http://www.1280thezone.com/" target="_blank" rel="noopener noreferrer"><h5><i>The Zone Sports Network.</i></h5></a></h6>
              
              The team links were taking up a large portion of the screen.
              With this menu, the links are easier to use and allow more content
              to be included on the page. 
              <br />
              (Selecting an icon will display it's image on the screen )
            </p>
            <img src={this.state.teamLogo} className="teamImage" alt="" />
            <h4>See the code live at <a href="http://www.1280thezone.com/" target="_blank" rel="noopener noreferrer">1280thezone.com</a></h4>
          </div>

        </Layout>
      </div>
    );
  }
}

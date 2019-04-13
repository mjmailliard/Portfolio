import React, { Component } from 'react';
import '../App.css';




export default class CssMenu extends Component {
    constructor(props){
        super(props) 
            this.state ={
                logo: ""
            }
    }

handleMenuClick = (e) => {
    this.props.changeLogo(e.target.src);
    // this.setState({logo: e.target.src})
    
    

} 
    render() {
      return (
          <div className="cssTeamsMenu" tabIndex='0' >
            <label className="cssMenuTitle">TEAMS</label>
              
              <table className="teamIconContainer">
                <tbody>
                  <tr>
                    <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/utes.png" className="teamIcon" alt="Utes logo"/></td>
                    <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/byu.png" className="teamIcon" alt="BYU logo"/></td>                            
                  </tr> 
                    <tr>
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/ustate.png" className="teamIcon" alt="Utah State logo"/></td> 
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/weber.png" className="teamIcon" alt="Weber logo"/></td>
                    </tr> 
                    <tr>
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/bees.png" className="teamIcon" alt="Bees logo"/></td> 
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/jazz.png" className="teamIcon" alt="Jazz logo"/></td>
                    </tr> 
                    <tr>
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/stars.png" className="teamIcon" alt="Stars logo"/></td> 
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/real.png" className="teamIcon" alt="Real logo"/></td>
                    </tr> 
                    <tr>
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/nfl.png" className="teamIcon" alt="NFL logo"/></td> 
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/pac12.png" className="teamIcon" alt="PAC12 logo"/></td>
                    </tr> 
                    <tr>
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/mlb.png" className="teamIcon" alt="MLB logo"/></td> 
                      <td><img tabIndex='0' onKeyPress={e => this.handleMenuClick(e)} onClick={e => this.handleMenuClick(e)} src="/img/nba.png" className="teamIcon" alt="NBA logo"/></td>                           
                    </tr> 
                </tbody>
              </table>
             
          </div>
      )
    }
}
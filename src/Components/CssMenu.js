import React, { Component } from 'react';
import '../App.css';


export default class CssMenu extends Component {
    render() {
      return (
          <div className="cssTeamsMenu">
           <img src="/img/teams.png" className="menuTitle" alt="Teams Menu"/> 
           <table className="teamIconContainer">
               <tbody>
                    <tr>
                        <td><a href="..."><img src="/img/jazz.png" className="teamIcon" alt="Jazz logo"/></a></td>
                        <td><a href="..."><img src="/img/byu.png" className="teamIcon" alt="BYU logo"/></a></td>                            
                    </tr> 
                    <tr>
                        <td><a href="..."><img src="/img/utes.png" className="teamIcon" alt="Utes logo"/></a></td> 
                        <td><a href="..."><img src="/img/ustate.png" className="teamIcon" alt="Utah State logo"/></a></td>
                    </tr> 
                    <tr>
                        <td><a href="..."><img src="/img/weber.png" className="teamIcon" alt="Weber logo"/></a></td> 
                        <td><a href="..."><img src="/img/real.png" className="teamIcon" alt="Real logo"/></a></td>
                        </tr> 
                    <tr>
                        <td><a href="..."><img src="/img/bees.png" className="teamIcon" alt="Bees logo"/></a></td> 
                        <td><a href="..."><img src="/img/stars.png" className="teamIcon" alt="Stars logo"/></a></td>
                    </tr> 
                    <tr>
                        <td><a href="..."><img src="/img/nfl.png" className="teamIcon" alt="NFL logo"/></a></td> 
                        <td><a href="..."><img src="/img/nba.png" className="teamIcon" alt="NBA logo"/></a></td>
                    </tr> 
                    <tr>
                        <td><a href="..."><img src="/img/mlb.png" className="teamIcon" alt="MLB logo"/></a></td> 
                        <td><a href="..."><img src="/img/pac12.png" className="teamIcon" alt="PAC12 logo"/></a></td>                           
                    </tr> 
               </tbody>
           </table>

          </div>
      )
    }
}
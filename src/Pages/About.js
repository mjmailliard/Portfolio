import React, { Component } from 'react';
import '../App.css';
import Layout from '../Components/Layout';


export default class About extends Component {
    constructor(){
        super()
            this.state = {
                dadJoke: '',
            }
    }

async componentDidMount() {
await fetch('https://icanhazdadjoke.com/',{
        method: "GET",
        mode: "cors",
        headers: {"Accept":"application/json" }
        })
    .then(results => {
        return results.json() 
         })
    .then((data) => {
        this.setState({
        dadJoke: data.joke,
        })
    })
}
        
    render() {
        
      return (
          <div>
              <Layout>
              <h1>About</h1>


             
 
               <br/>
             <p>
              I am a proud husband and father of three (four if you count the dog) who enjoys outdoor activities of all kinds, including hiking,kayaking and torturing my kids with Dad jokes.  
              A big believer in life-long learning, I enjoy seeking out new knowledge and skills continuously. 
              I am passionate about solving new challenges and sharing the solutions with those around me.
             </p>

             <div className="streak grey lighten-3 dailyQuote">
            <div className="flex-center">
              <ul className="mb-0 list-unstyled">
                <li>
                  <h2 className="h2-responsive"><i className="fas fa-quote-left" aria-hidden="false"></i> &nbsp;  {this.state.dadJoke} &nbsp;  <i className="fas fa-quote-right"
                      aria-hidden="true"></i></h2>
                </li>
                <li className="mb-0">
                  <h5 className="copyright font-italic mb-0">~ <a href="https://icanhazdadjoke.com/" target="_blank" rel="noopener noreferrer">icanhazdadjoke API</a></h5>
                </li>
              </ul>
            </div>
          </div>
              </Layout>
          </div>
      )
    }
}
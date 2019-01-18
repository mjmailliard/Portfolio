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
              {this.state.dadJoke}
 
               <br/>
             <p>
              I am a proud husband and father of three who enjoys outdoor activities of all kinds, including hiking,kayaking and torturing my kids with Dad jokes.  
              A big believer in life-long learning, I enjoy seeking out new knowledge and skills continuously. 
              I am passionate about solving new challenges and sharing the solutions with those around me.
             </p>
              </Layout>
          </div>
      )
    }
}
import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout';
import NameTag from './Components/NameTag'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      qod: '',
      credit:'',
    }
  }
  componentDidMount() {
    fetch(`https://quotes.rest/qod`, {
      method: "GET",
      mode: "cors",
      headers: {"Accept":"application/json" }})
      .then(results => {
       return results.json() 
      })
      .then((data) => {
        this.setState({
          qod: data.contents.quotes[0],
          credit: data.contents.copyright
        })
  
      })
  }
  render() {
    const quotes = this.state.qod

    return (
      <div className="mainDiv">
        <Layout>
          <NameTag/>
          <div className="quote">
          {/* {quotes.title}<br/> */}
          {quotes.quote}<br/>
          <div className="copyright"> 
            {quotes.author}<br/>
           ©<a href="https://theysaidso.com" target="_blank" rel="noopener noreferrer">{this.state.credit}</a>
           </div>
</div>
        
          


        </Layout>
      </div>
    );
  }
}

export default App;

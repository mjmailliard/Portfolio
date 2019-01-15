import React, { Component, Fragment } from 'react';
import '../App.css';
import Layout from '../Components/Layout'



export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
       
        };
    }
handleFormChange(event) {
        this.setState({});
      }
handleSendForm(e) {
    e.preventDefault(e)
    
}

    render() {
      return (
          <div>
            <Layout>
              <h1>Contact Me</h1>
              <div className="contactInfo">    
              <div className="contactInfoLine">Mike Mailliard</div>
              <div className="contactInfoLine">Email: <a href="mailto:mjmailliard@gmail.com">mjmailliard@gmail.com</a></div>
              <div className="contactInfoLine">Phone: (435) 225-3601 </div>
              <div className="contactInfoLine">LinkedIn: <a href="https://www.linkedin.com/in/mikemailliard/" target="_blank" rel="noopener noreferrer">mikemailliard</a></div>
              <div className="contactInfoLine">Github: <a href="https://github.com/mjmailliard" target="_blank" rel="noopener noreferrer">mjmailliard</a></div>
            </div>
            <Fragment className="emailForm">
             <form onSubmit={e => this.handleSendForm(e)}>
                <input type="text" onChange={e => this.setState({name: e.target.value})} id='name' placeholder="Name"/><br/>
                <input type="email" onChange={e => this.setState({email: e.target.value})} id='email' placeholder="Email Address"/><br/>
                <textarea rows='5' onChange={e => this.setState({message: e.target.value})} id='message' placeholder="Send me a message!" /><br/>
                <button type="submit">Submit</button>
             </form>
             </Fragment>
              </Layout> 
          </div>
      )
    }
}
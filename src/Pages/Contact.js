import React, { Component} from 'react';
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
    const data = ''
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: data,


    })

    alert('Your message is on the way!')
}

    render() {
      return (
          <div>
            <Layout>
              {/* <h1>Contact Me</h1>
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
             </Fragment> */}



             {/* <!-- Section: Contact v.3 --> */}
<section className="contact-section my-5">

  {/* <!-- Form with header --> */}
  <div className="card">

    {/* <!-- Grid row --> */}
    <div className="row">

      {/* <!-- Grid column --> */}
      <div className="col-lg-8">

        <div className="card-body form">

          {/* <!-- Header --> */}
          <h3 className="mt-4"><i className="fas fa-envelope pr-2"></i>Write to me:</h3>

          {/* <!-- Grid row --> */}
          <div className="row">

            {/* <!-- Grid column --> */}
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input type="text" id="form-contact-name" className="form-control"onChange={e => this.setState({name: e.target.value})}></input>
                <label htmlFor="form-contact-name" className="">Your name</label>
              </div>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input type="text" id="form-contact-email" className="form-control" onChange={e => this.setState({email: e.target.value})}></input>
                <label htmlFor="form-contact-email" className="">Your email</label>
              </div>
            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row --> */}

          {/* <!-- Grid row --> */}
          <div className="row">
         </div>
          {/* <!-- Grid row --> */}

          {/* <!-- Grid row --> */}
          <div className="row">

            {/* <!-- Grid column --> */}
            <div className="col-md-12">
              <div className="md-form mb-0">
                <textarea type="text" id="form-contact-message" className="form-control md-textarea" rows="3" onChange={e => this.setState({message: e.target.value})}></textarea>
                <label htmlFor="form-contact-message">Your message</label><br/>
                <button className="btn-floating btn-dark btn-lg" onClick={e => this.handleSendForm(e)}>
                  <i className="far fa-paper-plane left"></i> SEND</button>
                
              </div>
            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row --> */}

        </div>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-lg-4">

        <div className="card-body contact text-center h-100 white-text">

          <h3 className="my-4 pb-2">Contact Me</h3>
          <ul className="text-lg-left list-unstyled ml-4">
            <li>
              <p><i className="fab fa-rebel pr-3 fa-lg"></i>Mike Mailliard</p>
            </li>
            <li>
              <p><i className="fas fa-phone pr-3 fa-lg"></i>(435) 225-3601</p>
            </li>
            <li>
              <p><i className="fas fa-envelope pr-3 fa-lg"></i>mjmailliard@gmail.com</p>
            </li>
            <li>
                <p><i className="fab fa-github pr-3 fa-lg"></i>mjmailliard</p>
            </li>
            <li>
                <p> <i className="fab fa-linkedin pr-3 fa-lg"> </i>mikemailliard</p>
            </li>
          </ul>
          
        </div>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Form with header --> */}

</section>
{/* <!-- Section: Contact v.3 --> */}

              </Layout> 
          </div>
      )
    }
}
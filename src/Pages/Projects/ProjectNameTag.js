import React, { Component } from 'react';
import '../../App.css';
import Layout from '../../Components/Layout'
import domtoimage from 'dom-to-image';
export default class ProjectNameTag extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Mike'
        }
    }
handleClickDownload(e) {
    domtoimage.toJpeg(document.getElementById('nameImage'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'nametag.jpg';
        link.href = dataUrl;
        link.click();
    });
    // var node = document.getElementById('nameImage');
    // domtoimage.toPng(node).then(function (dataUrl) {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
        
    // }).catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    // });

}
    render() {
      return (
          <div className="mainDiv">
              <Layout>
              <h1>Name Tag</h1>
            <p>I was given an assignment to create a "pixel-perfect" copy of a name tag using nothing but HTML and CSS.<br/>
                As my gift to you, I've also added the ability to customize it and download your very own copy!<br/>
                The original project may be found on <a href="https://github.com/mjmailliard/Name-Tag" target="_blank" rel="noopener noreferrer">Github</a>. </p> 

            <div id="nameTagProject" className="nameTagProject">
            <div id="nameImage">
                <div name="maintag" className="helloMyNameIs">
                    <section className="hello">Hello</section> 
                    <section className="mynameis">my name is</section>
                </div>
                <div name="namespace" className="name">
                    {this.state.name}
                </div>
                <div name="bottomBar" className="bottomBar">
                </div>
                </div>    
            </div>
            <br/>
            <input type="text" defaultValue="Mike" minLength="0" maxLength="10" onChange={e => this.setState({name:e.target.value})}></input><br/><br/>
              <button onClick={e => this.handleClickDownload(e)}>Download</button>
              </Layout>              
          </div>
      )
    }
}
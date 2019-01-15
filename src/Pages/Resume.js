import React, { Component } from 'react';
import '../App.css';
import Layout from '../Components/Layout' 
import PDFViewer from '../Components/PDFViewer';
import PDFJSBackend from '../Backends/pdfjs';

// const pdfFile = process.env.PUBLIC_URL + 'Resume.pdf'
export default class Resume extends Component {


 
    render() {
      return (
          <div>
            <Layout>
               {/* <a href={pdfFile} target="_blank" rel="noopener noreferrer"><h1>Resume</h1></a> */}
                <div className="pdfViewer" >
                    <PDFViewer backend={PDFJSBackend} src='/files/MikeMailliardResume.pdf'/>
                </div>
            </Layout>             
          </div>
      )
    }
}
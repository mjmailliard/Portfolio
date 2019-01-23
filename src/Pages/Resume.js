import React, { Component } from "react";
import "../App.css";
import Layout from "../Components/Layout";
import PDFViewer from "../Components/PDFViewer";
import PDFJSBackend from "../Backends/pdfjs";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div className="pdfViewer">
            <PDFViewer
              backend={PDFJSBackend}
              src="/files/MikeMailliardResume.pdf"
            />
          </div>
        </Layout>
      </div>
    );
  }
}

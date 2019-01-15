import React, { Component, Fragment } from 'react';



export default class NameTag extends Component {
    render() {
      return (
          <Fragment>
            <div className='nameTagAnimation'>
                <div name="maintag" className="helloMyNameIs">
                    <section className="hello">Hello</section> 
                    <section className="mynameis">my name is</section>
                </div>
                <div name="namespace" className="name">
                    Mike
                </div>
                <div name="bottomBar" className="bottomBar">
                </div>
            </div>
         </Fragment>
      )
    }
}
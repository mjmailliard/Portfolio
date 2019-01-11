import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar'


class Layout extends Component {
    render() {
        return (

            <div className="divMain clouds">
 
                
                    <header>
                    <Navbar/>
                    Header
                   </header>
                
                        {this.props.children}
                <footer> Insert Foot</footer>
</div>
        );
    }
}

export default Layout;
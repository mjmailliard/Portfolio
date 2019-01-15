import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar'


class Layout extends Component {
    render() {
        return (

            <div className="divMain clouds">
 
                
                    <header>
                        <Navbar/>
                   </header>
                
                        {this.props.children}
                        
                <footer></footer>
</div>
        );
    }
}

export default Layout;
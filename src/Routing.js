import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import About from './Pages/About'
import ProjectNameTag from "./Pages/Projects/ProjectNameTag";


const Routing = () => (
    
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/resume" component={Resume}/>
            <Route path="/projects/nametag" component={ProjectNameTag}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>

            <Route path="/files" /> 
        </Switch>
    </Router>
    )

export default Routing;
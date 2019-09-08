import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';
import Navigation from './components/Navigation';
import Connect from './components/Connect';

class App extends Component  {
 /*  constructor(props){
    super(props)
    this.state = {
       done: undefined
    }
 }

 componentDidMount() {
    setTimeout(() => {
    this.setState({ done: true })
    }, 2000);
} */

  render() {
    
    return (
      <div>
            
                   <Router>
                      <div>
                        <Navigation/>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/about" component={About} />
                          <Route exact path="/projects" component={Project} />
                          <Route exact path="/connect" component={Connect}/>
                      </div>
                  </Router>
        
                 
     </div>
    )}
}


export default App;

import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router , Route} from 'react-router-dom';
import About from './components/About';
import Project from './components/Projects';
import Navigation from './components/Navigation';
import Connect from './components/Connect';
import Timeline from './components/Timeline'
import Loading from './components/Loading'

class App extends Component  {

  state ={
    isloading: true
  }


  componentDidMount() {

    
    setTimeout(
        function () {
            this.setState({ isloading: false });
        }
            .bind(this),
        2500
    );

    

}

  render() {
    
    return (

      this.state.isloading ? <Loading /> :
          <div>
              
                    <Router>
                        
                        <div style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%"
                                }}>
                          <Navigation/>
                            <Route exact path="/" component={About} />
                            <Route exact path="/timeline" component={Timeline}/>
                            <Route exact path="/projects" component={Project} />
                            <Route exact path="/connect" component={Connect}/>
                        </div>
                    </Router>
        </div>
    )}
}


export default App;

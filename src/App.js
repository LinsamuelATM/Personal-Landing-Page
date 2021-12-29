import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router , Route} from 'react-router-dom';
import About from './components/About';
import Project from './components/Projects';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline'
import Loading from './components/Loading'
import Webpage from './components/Webpage_container'

class App extends Component  {

  state ={
    isloading: true,
    currentpage: 'Myself'
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

handle_currentpage = (page) => {
  this.setState({
    currentpage: page
  })
}





  render() {

    console.log(this.state.currentpage)
    
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
                          <Navigation handlepage={this.handle_currentpage}/>
                            <Route exact path="/"  render={(props) => (<Webpage {...props} currentpage={this.state.currentpage} />)} />
                        </div>
                    </Router>
        </div>
    )}
}


export default App;

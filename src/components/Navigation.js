import React , {Component} from 'react';
import {Nav , Navbar, Container}    from 'react-bootstrap';
import Logo from '../assets/logo.png'
import './Nav.css'

class Navigation extends Component {
    render(){
        return(
        <React.Fragment>
          <Container>
            <Navbar>
              <Navbar.Brand href="/"><img src={Logo} alt="logo"/></Navbar.Brand>
              <Nav>
                <ul className="navlist"> 
                  <li onClick={() => this.props.handlepage('Myself')}>Myself</li>
                  <li onClick={() => this.props.handlepage('Experience')}>Experience</li>
                  <li onClick={() => this.props.handlepage('Projects')}>Projects</li>
                </ul>
              </Nav>
            </Navbar>
          </Container>
  <br />
        </React.Fragment>
        )
    }
}

export default Navigation
import React , {Component} from 'react';
import {Nav , Navbar, Container}    from 'react-bootstrap';
import Logo from '../assets/logo.png'

class Navigation extends Component {
    render(){
        return(
        <React.Fragment>
          <Container>
            <Navbar>
              <Navbar.Brand href="/"><img src={Logo} alt="logo"/></Navbar.Brand>
              <Nav className="">
                <Nav.Link href="/">Myself</Nav.Link>
                <Nav.Link href="/timeline">Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </Nav>
            </Navbar>
          </Container>
  <br />
        </React.Fragment>
        )
    }
}

export default Navigation
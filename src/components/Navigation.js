import React , {Component} from 'react';
import {Nav , Navbar}    from 'react-bootstrap';
import Logo from '../logo.png'

class Navigation extends Component {
    render(){
        return(
        <React.Fragment>
            <Navbar>
    <Navbar.Brand href="/"><img src={Logo} alt="logo"/></Navbar.Brand>
    <Nav className="">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/connect">Connect</Nav.Link>
    </Nav>
  </Navbar>
  <br />
        </React.Fragment>
        )
    }
}

export default Navigation
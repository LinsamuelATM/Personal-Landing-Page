import React , {Component} from 'react';
import './Connect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubAlt } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import Logo from '../assets/logo1.png';
import {Container , Form , Button} from 'react-bootstrap';
import FadeIn from "react-fade-in";
import emailjs from 'emailjs-com';



export default class Connect extends Component{

  state = {
        name: '',
        email: '',
        text: '',
        send : false,
    }

    handleInputChange =(event) => {
        event.preventDefault();
        
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });

        if(this.state.name.length > 0){
            this.setState({
                send: false
            })
        }
  }

        sendEmail = (e) => {

            e.preventDefault();

            emailjs.sendForm('gmail', 'personalwebsite', e.target, 'user_Vd2ynVStEuBZ4I2XhJeNH')
              .then((result) => {
                 
                      this.setState({
                        name: '',
                        email: '',
                        text: '',
                        send : true,
                         
                      })
               
              }, (error) => {
                  console.log(error.text);
              });

        }
    

    render(){
        return(
            <FadeIn>
            <div>
            <Container>
                    
                         <h2 className="text-center display-4 c">Connect.</h2>
                         <hr className="light"/>
          
            <div className="container-fluid padding ">
                <div className="row text-center padding ">
                    <div className="col-12 social padding connect">
                    <a href="https://www.facebook.com/samuel.lin.372"><FontAwesomeIcon className="i0" icon={faFacebookSquare} /></a>
                    <a href="https://www.linkedin.com/in/samuel-lin-40ba1a121/"><FontAwesomeIcon className="i2"icon={faLinkedin} /></a>
                    <a href="https://github.com/LinsamuelATM?tab=repositories"><FontAwesomeIcon className="i2"icon={faGithubAlt} /></a>
                    

                    
                     <img src={Logo} alt="Logo" className="centeri"/>
                    </div>
                </div>

            </div>

           


            <Form style={{marginTop: '5%'}} onSubmit={this.sendEmail}>


                <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name="name" value={this.state.name} placeholder="Enter name"  onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleInputChange} /> 
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" rows="3" name="text" onChange={this.handleInputChange}/>
                 </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

            {this.state.send? <span>send!</span>: <span>{' '}</span>

                }




           
                <div className="container-fluid padding text-center  info">
                    <hr className="light"/>
                    <ul className='info-list'>
                        <li>0987-081-495</li>
                        <li>samuel3218888@gmail.com</li>
                        <li className="third-li">Taipei, Taiwan</li>
                        
                    </ul>         
                </div>

           
            </Container>

        </div>
        </FadeIn>


        )
    }
}
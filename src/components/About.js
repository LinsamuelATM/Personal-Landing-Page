import React , {Component} from 'react'
import FadeIn from "react-fade-in";
import {Container, Row , Col, Button , Form} from 'react-bootstrap';
import Profile from '../assets/profile.jpg';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';
import Resume from '../assets/resume.pdf'
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubAlt } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import emailjs from 'emailjs-com';

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

export default class About extends Component {
    state ={
        number: randomNumber(),
        textIndex: 0,
        open_modal: false,
        name: '',
        email: '',
        text: '',
        send : false,

    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              number: randomNumber(),
              textIndex: this.state.textIndex + 1,
            });
          }, 4000);

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

    handle_modal = () => {
        this.setState({
            open_modal: !this.state.open_modal
        })
        if(this.state.send){
            this.setState({
                send:false
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
                <Container>
                    <Modal 
                        visible={this.state.open_modal}
                        width="700"
                        height="400"
                        effect="fadeInUp"
                        onClickAway={() => this.handle_modal()}
                    >

                    <Container>
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

                        <Button variant="outline-secondary" type="submit">Submit</Button>

                        </Form>

                        {this.state.send? <span>sent!</span>: <span>{' '}</span>

}
                    </Container> 

                    </Modal>
                    <h2 className="display-4 a text-center">    
                    
                        Hello, I'm Sam.
                        
                    </h2>
                    <hr class="light"/>
                <Row className="show-grid profile-row">
                        <Col xs={12} sm={6} className="pwerson-wrapper a1">
                        
                            <div className="pic1">
                            <img src={Profile} alt="profile2" className="profile1"/>
                            
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="pwerson-wrapper aa1">
                            <div className="backgroundt">
                            <p>I am a recent graduate from the University of British Columbia majoring in Mathematics and minoring in Commerce. 
                                I thrive towards becoming a person with the mind of a mathematician and the soft skills of a salesman. 
                                I believe the combination of both can push me to become a best version of myself . </p>

                            <p>I am looking for opportunities as a software developer , data analyst, or technical sales. Lets get in touch! </p>

                            <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" download="Sam_Lin_resume.pdf" href={Resume}> 
                                 Resume  
                            </Button>

                            <Button variant="outline-secondary" onClick={()=> {this.handle_modal()}}>Connect</Button>
                           </div>
                           
                        </Col>

                </Row>

              

                <div className="container-fluid padding text-center  info">
                    <hr className="light"/>
                    <ul className='info-list'>
                        <li>0987-081-495</li>
                        <li>samuel3218888@gmail.com</li>
                        <li className="third-li">Taipei, Taiwan</li>
                        <ul className="social-media-ul"> 
                            <li> <a href="https://www.facebook.com/samuel.lin.372"><FontAwesomeIcon  icon={faFacebookSquare} /></a> </li>
                            <li> <a href="https://www.linkedin.com/in/samuel-lin-40ba1a121/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li>  <a href="https://github.com/LinsamuelATM?tab=repositories"><FontAwesomeIcon icon={faGithubAlt} /></a></li>


                        </ul>
                    </ul>
                </div>

                    
                    
                


                </Container>


            </FadeIn>
        )
    }
}
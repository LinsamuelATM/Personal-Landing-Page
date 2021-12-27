import React , {Component} from 'react'
import FadeIn from "react-fade-in";
import {Container, Row , Col, Button} from 'react-bootstrap';
import Profile from '../assets/profile.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';
import Resume from '../assets/resume.pdf'
import ButtonUI from '@material-ui/core/Button';
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

const texts = ["Samuel Lin", "Math Student", "Programmer" , "Basketball Fanatic"];

export default class About extends Component {
    state ={
        number: randomNumber(),
        textIndex: 0,

    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              number: randomNumber(),
              textIndex: this.state.textIndex + 1,
            });
          }, 4000);

    }


    render(){
        return(
            <FadeIn>
                <Container>
                    <h2 class="display-4 a text-center">    
                    
                        Hello, I'm Sam
                        
                    </h2>
                    <hr class="light"/>
                <Row className="show-grid profile-row">
                        <Col xs={12} sm={6} className="pwerson-wrapper a1">
                            <div className="pic1b">
                            <div className="pic1">
                            <img src={Profile} alt="profile2" className="profile1"/>
                            </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="pwerson-wrapper aa1">
                            <div className="backgroundt">
                            <p>I am a fifth year student at the University of British Columbia majoring in Mathematics and minoring in Commerce. 
                                I thrive towards becoming a person with the mind of a mathematician and the technical skills of a software developer. 
                                I believe the combination of both can allow me to build applications that are useful and meaningful. </p>

                            <p>I am looking for opportunities as a software developer , data analyst, or UX/UI designer. Lets get in touch! </p>

                            <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" download="Sam_Lin_resume.pdf" href={Resume}> 
                                 Resume  
                            </Button>

                            <Button variant="outline-secondary" href="/connect">Connect</Button>
                           </div>
                           
                        </Col>

                </Row>

              

                <div className="container-fluid padding text-center  info">
                    <hr className="light"/>
                    <ul className='info-list'>
                        <li>0987-081-495</li>
                        <li>samuel3218888@gmail.com</li>
                        <li className="third-li">Taipei, Taiwan</li>
                        
                    </ul>         
                </div>
                    
                    
                


                </Container>


            </FadeIn>
        )
    }
}
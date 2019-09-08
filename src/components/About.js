import React , {Component} from 'react'
import FadeIn from "react-fade-in";
import {Container, Row , Col, Button} from 'react-bootstrap';
import './About.css';
import Profile2 from '../profile2.jpg';
import Profile from '../profile.jpg';

export default class About extends Component {
    render(){
        return(
            <FadeIn>
                <Container>
                    <h2 class="display-4 a text-center">About.</h2>
                    <hr class="light"/>
                </Container>
                <Row className="show-grid">
                        <Col xs={12} sm={6} className="pwerson-wrapper a1">
                            <div className="pic1b">
                            <div className="pic1">
                            <img src={Profile} alt="profile2" className="profile1"/>
                            </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="pwerson-wrapper aa1">
                            <div className="backgroundt">
                            <h3 class="name"> Hi! My name is</h3>
                            <h2 class="display-4 name2"> Samuel Lin.</h2>
                            <hr class="light"/>
                            <p>I am currently a fouth year student at the University of British Columbia majoring in Mathematics and minoring in Commerce. 
                                I thrive towards becoming a person with the mind of a mathematician , the technical skills of a software developer. 
                                I believe the combination of both can allow me to contribute and build applications that can be valued. </p>
                            <p>I am looking for opportunities as a developer. Lets get in touch! </p>
                            <Button variant="outline-secondary" href="/connect">Connect</Button>
                           </div>
                           
                        </Col>

                        <Col xs={12} sm={6} className="pwerson-wrapper aa1">
                        <div className="workt" >
                        <h2 class="name3">About me</h2>
                        <hr class="light"/>
                        <p> I really enjoy learning about new materials every single day. Ranging from politics, computers, economics, biology, sociology, and even video gaming. 
                             I believe theres always something to be learned despite the intial purpose of the subject. As a developer, it is important to know what is going on in world 
                             and the problems we face in order to come up smarter and newer ideas. </p>
                             
                        <p> A teacher once told me , "every single person in the world knows something that I don't know". 
                            Knowing that has kept me humble and open minded no matter what my position is. 
                             This mindset has not only helped me to become a better student/developer but also a better human being.  </p>

                        </div>
                        </Col>
                        <Col xs={12} sm={6} className="pwerson-wrapper a1">
                            <img src={Profile2} alt="profile2" className="profile2"/>
                        </Col>
                </Row>


            </FadeIn>
        )
    }
}
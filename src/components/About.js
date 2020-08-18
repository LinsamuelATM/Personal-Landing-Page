import React , {Component} from 'react'
import FadeIn from "react-fade-in";
import {Container, Row , Col, Button} from 'react-bootstrap';
import Profile from '../assets/profile.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';
import Resume from '../assets/resume.pdf'
import ButtonUI from '@material-ui/core/Button';

export default class About extends Component {
    render(){
        return(
            <FadeIn>
                <Container>
                    <h2 class="display-4 a text-center">About.</h2>
                    <hr class="light"/>
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
                            <p>I am a fifth year student at the University of British Columbia majoring in Mathematics and minoring in Commerce. 
                                I thrive towards becoming a person with the mind of a mathematician and the technical skills of a software developer. 
                                I believe the combination of both can allow me to build applications that can be useful and meaningful. </p>

                            <p>I am looking for opportunities as a software developer , data analyst, or UX/UI designer. Lets get in touch! </p>

                            <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" download="Sam_Lin_resume.pdf" href={Resume}> 
                                 Resume  
                            </Button>

                            <Button variant="outline-secondary" href="/connect">Connect</Button>
                           </div>
                           
                        </Col>

                </Row>

                <Row>

                        <Col>
                        
                        </Col>
                        <Col>

                            <h4 class="text-center" style={{marginTop: "20%"}} >Employment History.</h4>
                            <hr class="light"/>
                        
                        </Col>
                        <Col>
                        
                        </Col>

                </Row>

                <Row>

                       

                        <Col>
                            
                         <VerticalTimeline className="vertical-timeline-custom-line">


                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2019 - present"
                                    iconStyle={{ background: '#475c6c', color: '#fff'}}
                                   
                                >
                                    <h4 style={{fontSize: '1.1em' , color:'#475c6c'}} className="vertical-timeline-element-title">Mathematics Instructor</h4>
                                    <h6 style={{fontSize: '0.8em'}}className="vertical-timeline-element-subtitle">IVY GOLDEN UNION – Vancouver, B.C.</h6>
                                        <p style={{fontSize : '0.75em'}}>
                                        Creative Direction, Leadership , Communication 
                                        </p>
                                        <p>
                                            <ButtonUI variant="outlined" size="small" style={{color: '#475c6c'}} href="http://student.igu-edu.com/">Company Website</ButtonUI>
                                        </p>
                                </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2017 - 2019"
                                    iconStyle={{ background: '	#8a8583', color: '#fff'}}
                                   
                                >
                                    <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">Brand Ambassador/Manager</h4>
                                    <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">Preview Careers – Vancouver, B.C.</h6>
                                        <p style={{fontSize : '0.75em'}}>
                                        Marketing , Sales , Public Relations , Visual Desgin , Content Creation
                                        </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2017 - 2018"
                                    iconStyle={{ background: '#eed7a1', color: '#fff'}}
                                   
                                >
                                    <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">Library Assistant</h4>
                                    <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">University of British Columbia - Vancouver, B.C.</h6>
                                        <p style={{fontSize : '0.75em'}}>
                                            Customer service
                                        </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2016"
                                    iconStyle={{ background: '	#f7efd2', color: '#fff'}}
                                   
                                >
                                    <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">Digital Marketing Assistant</h4>
                                    <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">iProspectWIS – Taipei, Taiwan</h6>
                                        <p style={{fontSize : '0.75em'}}>
                                            SEO, Online Marketing , account management , translation
                                        </p>
                                        <p>
                                        <ButtonUI variant="outlined" size="small" style={{color: '#475c6c'}} href="https://www.youtube.com/watch?v=BBfd98yQ-ps">Video</ButtonUI>
                                        </p>
                            </VerticalTimelineElement>
  
                        </VerticalTimeline>
                        
                        </Col>
                </Row>

                <Row>

                    <Col>

                    </Col>
                    <Col>

                        <h4 class="text-center" style={{marginTop: "20%"}}>Education.</h4>
                        <hr class="light"/>

                    </Col>
                    <Col>
                    
                    </Col>

                </Row>

                <Row>

                    <Col>

                    <VerticalTimeline className="vertical-timeline-custom-line">

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                                    date="2018 - present"
                                    iconStyle={{ background: '	#cd8b62', color: '#fff'}}
                                   
                                >
                                    <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">British Columbia Institute of Technology</h4>
                                    <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">Applied Software Development Certificate</h6>
                                    <p style={{fontSize : '0.75em'}}>

                                        <strong> Courses: </strong> Java application development , C++ application development
                                    
                                    </p>
                                </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2016 - present"
                                    iconStyle={{ background: '#475c6c', color: '#fff'}}
                                   
                                >
                                    <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">University of British Columbia</h4>
                                    <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">Major in Mathematics, Minor in Commerce </h6>
                                    <p style={{fontSize : '0.75em'}}>

                                        <strong> Courses: </strong>Software Construction , Regression , Probability , Discrete Optimization ,Stochastic Processes ,Graphs and Networks ,  Accounting , Finance 
                                    
                                    </p>
                            </VerticalTimelineElement>



                    </VerticalTimeline>
                    
                    
                    </Col>



                </Row>
                </Container>


            </FadeIn>
        )
    }
}
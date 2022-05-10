import React, { Component } from 'react'
import {Container, Row , Col} from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';
import './Timeline.css'
import ButtonUI from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubAlt } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 

export default class Timeline extends Component {
    render() {
        return (
            <Container>
            <div>

                <h2 className="text-center display-4 c">Experience.</h2>
                    <hr className="light"/>

                        <Row>
                         
                                <h4 className="text-center sub-title" >Employment History</h4>
                                <hr className="light"/>
                         
                         </Row>

                        <Row>

                            <Col>
    
                            <VerticalTimeline className="vertical-timeline-custom-line" layout='1-column-left'>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2022 Feb - Present"
                                    iconStyle={{ background: '#475c6c', color: '#fff'}}
                                        
                                >
                                <h4 style={{fontSize: '1.1em' , color:'#475c6c'}} className="vertical-timeline-element-title">SAP Consultant Intern</h4>
                                <h6 style={{fontSize: '0.8em'}}className="vertical-timeline-element-subtitle"> Deloitte- Taipei, Taiwan</h6>
                                <p style={{fontSize : '0.75em'}}> SAP ERP, SAP IBP </p>
                               
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2021 Jan - 2021 Sept"
                                    iconStyle={{ background: '#475c6c', color: '#fff'}}
                                        
                                >
                                <h4 style={{fontSize: '1.1em' , color:'#475c6c'}} className="vertical-timeline-element-title">Web Developer</h4>
                                <h6 style={{fontSize: '0.8em'}}className="vertical-timeline-element-subtitle">The Ubyssey Publication Society - Vancouver, B.C.</h6>
                                <p style={{fontSize : '0.75em'}}> Full-stack Development, Web Maintenance  </p>
                                <p><ButtonUI variant="outlined" size="small" style={{color: '#475c6c'}} href="https://www.ubyssey.ca/">Company Website</ButtonUI></p>
                                
                            </VerticalTimelineElement>

                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2020 Oct - 2021 May"
                                    iconStyle={{ background: '#475c6c', color: '#fff'}}
                                        
                                >
                                <h4 style={{fontSize: '1.1em' , color:'#475c6c'}} className="vertical-timeline-element-title">Web Communications Assistant</h4>
                                <h6 style={{fontSize: '0.8em'}}className="vertical-timeline-element-subtitle">University of British Columbia - Vancouver, B.C.</h6>
                                <p style={{fontSize : '0.75em'}}>Communication , Web Maintenance , Creative Direction </p>
                                
                            </VerticalTimelineElement>


                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2019 Sept - 2021 Sept"
                                iconStyle={{ background: '#475c6c', color: '#fff'}}>
                            
                                <h4 style={{fontSize: '1.1em' , color:'#475c6c'}} className="vertical-timeline-element-title">Mathematics Instructor</h4>
                                <h6 style={{fontSize: '0.8em'}}className="vertical-timeline-element-subtitle">IVY GOLDEN UNION – Vancouver, B.C.</h6>
                                <p style={{fontSize : '0.75em'}}>Creative Direction, Leadership , Communication </p>
                                <p><ButtonUI variant="outlined" size="small" style={{color: '#475c6c'}} href="http://student.igu-edu.com/">Company Website</ButtonUI></p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2017 Oct - 2019 May"
                                    iconStyle={{ background: '	#8a8583', color: '#fff'}}>

                                <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">Brand Ambassador/Manager</h4>
                                <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">Preview Careers – Vancouver, B.C.</h6>
                                <p style={{fontSize : '0.75em'}}>Marketing , Sales , Public Relations , Visual Desgin , Content Creation</p>
                                <p><ButtonUI variant="outlined" size="small" style={{color: '#475c6c'}} href="https://www.facebook.com/PreviewCareers">Facebook Page</ButtonUI></p>

                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2016 July - 2016 Sept"
                                    iconStyle={{ background: '	#f7efd2', color: '#fff'}}>

                               <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">Digital Marketing Assistant</h4>
                               <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">iProspectWIS – Taipei, Taiwan</h6>
                                <p style={{fontSize : '0.75em'}}> SEO, Online Marketing , account management , translation </p>
                                <p><ButtonUI variant="outlined" size="small" style={{color: '#475c6c'}} href="https://www.youtube.com/watch?v=BBfd98yQ-ps">Video</ButtonUI></p>
                            </VerticalTimelineElement>

                            </VerticalTimeline>

            </Col>
            </Row>

                <Row>

                   
                        <h4 class="text-center sub-title" >Education</h4>
                        <hr class="light"/>
                    

                </Row>


                    <VerticalTimeline className="vertical-timeline-custom-line" layout='1-column-left'>


                        <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2016 Sept - 2021 May"
                                iconStyle={{ background: '#475c6c', color: '#fff'}}
                            
                            >
                                <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">University of British Columbia</h4>
                                <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">Major in Mathematics, Minor in Commerce </h6>
                                <p style={{fontSize : '0.75em'}}>

                                    <strong> Courses: </strong>Software Construction , Regression , Probability , Discrete Optimization ,Stochastic Processes ,Graphs and Networks ,  Accounting , Finance 
                                
                                </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                            date="2018 Sept - 2021 April"
                            iconStyle={{ background: '	#cd8b62', color: '#fff'}} >
                        
                                <h4 style={{fontSize: '1.1em' , color: '#475c6c'}} className="vertical-timeline-element-title">British Columbia Institute of Technology</h4>
                                <h6 style={{fontSize: '0.8em'}} className="vertical-timeline-element-subtitle">Applied Software Development Certificate</h6>
                                <p style={{fontSize : '0.75em'}}>

                                    <strong> Courses: </strong> Java application development , C++ application development
                                
                                </p>
                            </VerticalTimelineElement>

                    </VerticalTimeline>
                                    
            </div>

            <div className="container-fluid padding text-center  info">
                    <hr className="light"/>
                    <ul className='info-list'>
                        <li>0987-081-495</li>
                        <li>samuel3218888@gmail.com</li>
                        <li className="third-li">Last Updated: May 10th, 2022 </li>
                        <ul className="social-media-ul"> 
                            <li> <a href="https://www.facebook.com/samuel.lin.372"><FontAwesomeIcon  icon={faFacebookSquare} /></a> </li>
                            <li> <a href="https://www.linkedin.com/in/samuel-lin-40ba1a121/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li>  <a href="https://github.com/LinsamuelATM?tab=repositories"><FontAwesomeIcon icon={faGithubAlt} /></a></li>


                        </ul>
                    </ul>
                </div>
                    
            </Container>
        )
    }
}

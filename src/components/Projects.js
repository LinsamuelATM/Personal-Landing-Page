import React , {Component} from 'react'
import FadeIn from "react-fade-in";
import { Container, Button, Row , Col , Card , Collapse} from 'react-bootstrap';
import './Project.css'
import movierater from '../assets/movierater.png'
import bitcoin from '../assets/bitcoin.png'
import organizer from '../assets/Organizer.png'
import s2 from '../assets/Sorting.png'
import mag2021 from '../assets/mag2021.png'
import bitcoinEssay from '../assets/Essay.pdf'
import bitcoinPresentation from '../assets/Solution.pdf'
import trip from '../assets/TripPlanner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubAlt } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 



export default class Project extends Component {
    state ={
        modal_1 : false,
        modal_2 : false,
        modal_3 : false,
        modal_4 : false,
        modal_5 : false,
        modal_6 : false,
        modal_7 : false,
    }


    setModal_1 = () => {
        this.setState({
            modal_1 : !this.state.modal_1
        })
    }

    setModal_2 = () => {
        this.setState({
            modal_2 : !this.state.modal_2
        })
    }

    setModal_3 = () => {
        this.setState({
            modal_3 : !this.state.modal_3
        })
    }

    setModal_4 = () => {
        this.setState({
            modal_4 : !this.state.modal_4
        })
    }

    setModal_5 = () => {
        this.setState({
            modal_5 : !this.state.modal_5
        })
    }

    setModal_6 = () => {
        this.setState({
            modal_6 : !this.state.modal_6
        })
    }

    setModal_7 = () => {
        this.setState({
            modal_7 : !this.state.modal_7
        })
    }
    
    render(){
        return(
            
            
            <div> 
                <FadeIn>
                <Container>
                    
                    <h2 class="text-center display-4 c">Projects.</h2>
                    <hr class="light"/>
                
                <Row>

                <Col sm="4">
                        <Card style={{ width: '18.5rem' }} className="border-light todo_card" onClick={()=> this.setModal_6()}>
                            <Card.Img variant="top" src={mag2021} />
                            <Card.Body>
                                    <Card.Title>
                                        
                                      
                                            <span style={{fontSize : '0.7em' , color:'#475c6c'}}>Ubyssey Magazine 2021</span> 
                                    </Card.Title>

                                    <Card.Text>

                                        <span style={{fontSize : '0.7em'}} > Django, Python, Javascript , React,js , CSS </span> 

                                    </Card.Text>

                                    <Collapse in={this.state.modal_6}>

                                        <div>

                                
                                            <Card.Text>
                                                 
                                                This is a stand-alone website that I've developed during my time with the Ubyssey Publciations
                                                 

                                            </Card.Text>

                                            <Button variant="outline-secondary" style={{marginRight: '1.5%'}} className="resume_button" href={'https://www.ubyssey.ca/magazine/2021/'} > 
                                                Website
                                            </Button>

                                        </div>
                                  

                                    </Collapse>
                                    </Card.Body>

                        </Card>
                    </Col>
                    
                <Col sm="2" md="4">
                        <Card style={{ width: '18.5rem' }} className="border-light todo_card" onClick={()=> this.setModal_1()}>
                            <Card.Img variant="top" src={trip} />
                            <Card.Body>
                                    <Card.Title>

                                   
                                            <span style={{fontSize : '0.7em' , color:'#475c6c'}}>Trip Planner</span>
                                            
                                    </Card.Title>
                                    <Card.Text>

                                   <span style={{fontSize : '0.7em'}} >React , Dijango , HTML/CSS , PostGreSQL </span> 

                                    </Card.Text>

                                    <Collapse in={this.state.modal_1}>

                                        
                                                <Card.Text>
                                                    This project aims to help users to have an easier time organizing trips with their friends. The web application eases the process of making a itinerary.
                                                    The back-end is made with Djagno. THe front-end is made with React.js. We utilizes PostGreSQL for our database. We are hopeing to launch the web application at the 
                                                    end of September 2020.
                                                
                                                </Card.Text>

                                       

                                        </Collapse>

                                    </Card.Body>

                        </Card>
                </Col>

                <Col sm="4">
                        <Card style={{ width: '18.5rem' }} className="border-light todo_card" onClick={()=> this.setModal_2()}>
                            <Card.Img variant="top" src={organizer} />
                            <Card.Body>
                                    <Card.Title>

                                   
                                            <span style={{fontSize : '0.7em' , color:'#475c6c'}}>Chrome homepage organizer</span>
                                            
                                    </Card.Title>
                                    <Card.Text>

                                   <span style={{fontSize : '0.7em'}} >HTML/CSS , Javascript</span> 

                                    </Card.Text>

                                    <Collapse in={this.state.modal_2}>

                                   

                                        <div>
                                            <Card.Text>

                                                During the time of Covid I had to find a way to keep myself organized. It was hard to stay focus when I spent most of my time at home. To keep myself busy I decided 
                                                to develop a chrome extension homepage that allows me to set up a todo list and time count down.The project was made with Javascript and html.

                                        
                                            
                                            </Card.Text>

                                            <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" href={'https://github.com/LinsamuelATM/BubbleTea_Achiever'} > 
                                                   Git
                                            </Button>

                                        </div>

                                
                                    </Collapse>
                                    </Card.Body>

                        </Card>
                    </Col>
                <Col sm="4">
                        <Card style={{ width: '18.5rem' }} className="border-light todo_card" onClick={()=> this.setModal_3()}>
                            <Card.Img variant="top" src={bitcoin} />
                            <Card.Body>
                                    <Card.Title>

                                       
                                            <span style={{fontSize : '0.7em' , color:'#475c6c'}}>Assembling Bitcoin </span>
                                            
                                    </Card.Title>
                                    <Card.Text>

                                   <span style={{fontSize : '0.7em'}} >Java</span> 

                                    </Card.Text>

                                    <Collapse in={this.state.modal_3}>
                                        <div>

                                   
                                                <Card.Text>
                                                This was a term project from Math441. Our goal was to explore the world of NP , NP-hard and NP-complete problems. 
                                                We chose bitcoin because it is very similar to the independent set NP-complete problem. Our goal was to transform the bitcoin block creation process into 
                                                an NP-complete problem and come up with a solution for it.
                                                </Card.Text>
                                                
                                                <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" download="Assembling_bitcoin.pdf" href={bitcoinEssay} > 
                                                   Paper
                                                </Button>
                                                <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" download="Assembling_bitcoinSlides.pdf" href={bitcoinPresentation} > 
                                                   Slides
                                                </Button>
                                                <Button variant="outline-secondary" style={{marginRight: '3%'}} className="resume_button" href={'https://github.com/LinsamuelATM/Math441-Assembling-Bitcoin-Solution'} > 
                                                   Git
                                                </Button>

                                        </div>

                                        

                                        </Collapse>
                                    </Card.Body>

                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card style={{ width: '18.5rem' }} className="border-light todo_card" onClick={()=> this.setModal_4()}>
                            <Card.Img variant="top" src={movierater} />
                            <Card.Body>
                                    <Card.Title>

                                       
                                            <span style={{fontSize : '0.7em' , color:'#475c6c'}}>Movie Rater</span>
                                            
                                    </Card.Title>
                                    <Card.Text>

                                   <span style={{fontSize : '0.7em'}} >React , Dijango , Postman , HTML/CSS  </span> 

                                    </Card.Text>

                                    <Collapse in={this.state.modal_4}>

                                        <div>

                                 
                                            <Card.Text>

                                            This project uses Dijango for the back-end development that involves setting up models, security, and the built-in SQLite database.
                                            The front end uses React which fetches the API and displays the information to the user. It also allows the web-application to be interactive with the users. For example, 
                                            the user is able to rate or create more movies.  

                                        
                                            
                                            </Card.Text>

                                            <Button variant="outline-secondary" style={{marginRight: '1.5%'}} className="resume_button" href={'https://github.com/LinsamuelATM/Movie-Rater-Front-End'} > 
                                                Git Front-End
                                            </Button>

                                            <Button variant="outline-secondary" style={{marginRight: '1%'}} className="resume_button" href={'https://github.com/LinsamuelATM/Movie-Rater-backend'} > 
                                                Git Back-End
                                            </Button>

                                        </div>

                                    

                                    </Collapse>
                                    </Card.Body>

                        </Card>
                    </Col>

                    <Col sm="4">
                        <Card style={{ width: '18.5rem' }} className="border-light todo_card" onClick={()=> this.setModal_5()}>
                            <Card.Img variant="top" src={s2} />
                            <Card.Body>
                                    <Card.Title>
                                        
                                      
                                            <span style={{fontSize : '0.7em' , color:'#475c6c'}}>Sort Alogrithms Visualizer </span> 
                                    </Card.Title>

                                    <Card.Text>

                                        <span style={{fontSize : '0.7em'}} > Javascript , React,js , CSS </span> 

                                    </Card.Text>

                                    <Collapse in={this.state.modal_5}>

                                        <div>

                                
                                            <Card.Text>
                                                 
                                                This is a application that visualizes the 4 popular sorting algorithms: Merge Sort , Quick Sort , Heap Sort , Bubble Sort.
                                                 

                                            </Card.Text>

                                            <Button variant="outline-secondary" style={{marginRight: '1.5%'}} className="resume_button" href={'https://github.com/LinsamuelATM/Sorting-Algorithm-Visualizer'} > 
                                                Git 
                                            </Button>

                                        </div>
                                  

                                    </Collapse>
                                    </Card.Body>

                        </Card>
                    </Col>

                </Row>

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
                   
                </FadeIn>
            </div>
            
        )
    }
}
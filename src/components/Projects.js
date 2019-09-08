import React , {Component} from 'react'
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Button} from 'react-bootstrap';
import { faSearch , faStar , faDollarSign} from '@fortawesome/free-solid-svg-icons' ;
import { faFilm} from '@fortawesome/free-solid-svg-icons' ;
import './Project.css'
import movierater from '../movierater.png'
import movierater2 from '../movieRater2.png'
import s1 from '../s1.png'
import s2 from '../s2.png'
import s3 from '../s3.png'
import s4 from '../s4.png'


export default class Project extends Component {


    
    render(){
        return(
            
            
            <div> 
                <FadeIn>
                <Container>
                    
                    <h2 class="text-center display-4 c">Projects.</h2>
                    <hr class="light"/>
                </Container>

                <div class="wrapper">
                    <div class="item1">
                        <img src={movierater} alt="movive rater1" class="m1"/>
                        <img src={movierater2} alt="movive rater2" Class="m2"/>



                    </div>
                    <div class="item2">
                            <h2 class="Pro1">  <FontAwesomeIcon icon={faFilm} /> Movie Rater</h2>
                            <p>This simple project uses Dijango for the back-end development that involves setting up models, security and the built-in SQLite database.
                                The front end uses React which fetches the API and displays the information to the user. It also allows the web-application to be interactive. For example, 
                                the user can rate or create more movies.  </p>
                          
                            <p> Built with: React , Dijango , Postman , HTML/CSS </p>
                            <Button variant="outline-warning" href="/connect">Get in touch to learn more!</Button>
                           
                    </div>


                    <div class="item3">
                    <h2 class=" Pro2">  <FontAwesomeIcon icon={ faStar} />  Star Social Web application </h2>
                                <p>This is a social Web application where the user can create groups/forum and discuss different topics about space.
                                    This project utilizes the built-in SQLite datebase in Dijango and the models library. 
                                    The front-end of the project is built using templates library.
                                    </p>

                                <p> Built with:  Dijango</p>
                                <Button variant="outline-primary" href="/connect">Get in touch to learn more!</Button>
                         
                       
                    </div>
                    <div class="item4">
                        <img src={s2} alt="s1" class="s1"/>
                        <img src={s1} alt="s2" class="s2"/>
                        <img src={s3} alt="s3" class="s3"/>
                        <img src={s4} alt="s4" class="s4"/>
                       
                    </div>
                    <div class="item5 ">
                    <h2 class="Pro3">  <FontAwesomeIcon icon={faDollarSign} />   Mock ATM Java program </h2>
                            <p>A banking software programmed using Java and eclipse that utilizes the concepts of inheritance encapsulation, and polymorphism.
                                The program allows the user to  set up different types of accounts, withdrawal and deposit with real time summary.
                                This project allowed me to program with good habits such as structing my codes with high cohesion and loose coupling. </p>

                                <p> Built with: Java</p>
                                <Button variant="outline-success" href="/connect">Get in touch to learn more!</Button>
                          
                    </div>

                    <div class="item6">
                        <h2 class="Pro4">  <FontAwesomeIcon icon={faSearch} /> Video Search Engine</h2>
                            <p>A video search engine made from React that uses basic knowledge of state, props, axios, and event handlers.
                            The search engine fetches Google’s Youtube API and presents the users with a list of videos. </p>
                            <p> Built with: React , HTML/CSS , Semantic UI </p>
                            <Button variant="outline-danger" href="/connect">Get in touch to learn more!</Button>
                           
                        
                    </div>
                </div>
                   
                </FadeIn>
            </div>
            
        )
    }
}
import React , {Component} from 'react';
import './Connect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo1.png';
import {Container} from 'react-bootstrap';
import FadeIn from "react-fade-in";


export default class Connect extends Component{

    render(){
        return(
            <FadeIn>
            <div>
            <Container>
                    
                         <h2 class="text-center display-4 c">Connect.</h2>
                         <hr class="light"/>
            </Container>
            
            <div class="container-fluid padding ">
                <div class="row text-center padding ">
                    <div class="col-12 social padding connect">
                    <a href="https://www.facebook.com/samuel.lin.372"><FontAwesomeIcon className="i0" icon={faFacebookSquare} /></a>
                    <a href="https://www.linkedin.com/in/samuel-lin-40ba1a121/"><FontAwesomeIcon className="i2"icon={faLinkedin} /></a>
                    <img src={Logo} alt="Logo" class="centeri"/>
                    </div>
                </div>

            </div>
           
            <div class="container-fluid padding text-center  info">
                <hr class="light"/>
                <p className="info">778-968-1495</p>
                <p className="info">Samuel3218888@gmail.com</p>
                <p className="info">2728 West 33rd Avenue</p>       
                <p className="info">Vancouver , B.C. </p>         
            </div>

        </div>
        </FadeIn>


        )
    }
}
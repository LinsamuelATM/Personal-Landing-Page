import React , {Component} from 'react'
//import {Link } from 'react-router-dom';
//import {Jumbotron , Container , Row , Col , Image , Button} from 'react-bootstrap';
import './Home.css';
import FadeIn from "react-fade-in";
import {Carousel} from 'react-bootstrap';
import img00 from '../assets/00.jpg';
import img11 from '../assets/22.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';


export default class Home extends Component {
    
    render(){
        return(
            <div>
                <FadeIn>
                    <Carousel className="carousel" >
                        <Carousel.Item className="i1">
                        <img 
                            className="d-block w-100 img0"
                            src={img00}
                            alt="First slide"
                        />
                    <Carousel.Caption className="i11">
                        <h1 class="display-1"><strong>Creative.</strong></h1>
                        <blockquote class="blockquote text-right">
                        <p class="mb-0 p0">“Man who invented the hamburger was smart; man who invented the chesseburger was a genius”</p>
                        <footer class="blockquote-footer">Matthew McConaughey </footer>
                    </blockquote>
                    </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100 img1"
                            src={img11}
                            alt="Second slide"
                        />

                    <Carousel.Caption className="i12">
                    <h1 class="display-1"><strong>Math student.</strong></h1>
                    <blockquote class="blockquote text-right">
                        <p class="mb-0 p1">“Education is not the learning of facts, but training the mind to think”</p>
                        <footer class="blockquote-footer">Albert Einstein</footer>
                    </blockquote>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100 img2"
                    src={img2}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="i13">
                    <h1 class="display-2"><strong>Aspiring Software Developer.</strong></h1>
                    <blockquote class="blockquote text-right">
                        <p class="mb-0 p2">“Stay hungry. Stay foolish”</p>
                        <footer class="blockquote-footer">Steve Jobs </footer>
                    </blockquote>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 img3"
                    src={img3}
                    alt=" slide"
                    />

                    <Carousel.Caption className="i14">
                    <h1 class="display-1"><strong>Basketball fanatic.</strong></h1>
                    <blockquote class="blockquote text-right">
                        <p class="mb-0 p3">“I think team first. It allows me to succeed, it allows my team to succeed.”</p>
                        <footer class="blockquote-footer f3">Lebron James </footer>
                    </blockquote>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                </FadeIn>


            
            </div>
        )           
    }
}

import React, { Component } from 'react'
import About from './About'
import Experience from './Timeline'
import Projects from './Projects'
import './Connect.css'

export default class Webpage_container extends Component {


    render() {

        console.log(this.props.currentpage)
        if(this.props.currentpage === 'Myself'){
            return(<About/>)
        }else if(this.props.currentpage === 'Experience'){
            return( <Experience/>)
        }else if(this.props.currentpage ==='Projects'){
           return( <Projects/>)
        }else

        return(
            <div></div>
        )
    }
}

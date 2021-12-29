import React, {Component} from 'react';
import './Loading.css'
import animation from '../assets/animation.gif'



class Loading extends Component {
    render(){

      return(
        <div class="image-container"> 
	       
          <img src={animation} alt="animation" />
       
        </div> 
      )
 
    }
}

export default Loading
import React, {Component} from 'react';
import './Loading.scss';


class Loading extends Component {
    render(){
        return (
          <div id="container">
          <div className="divider"></div>
          <div className="loading-text">
            <span className="letter">L</span>
            <span className="letter">o</span>
            <span className="letter">a</span>
            <span className="letter">d</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
          </div>
        </div>
        )
    }
}

export default Loading
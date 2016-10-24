import React, { Component, PropTypes } from 'react';
import { Link, browserHistory  } from 'react-router';
import styles from './HowDoes.css';
import StillLearning from './StillLearning';
import IdleTimer from 'react-idle-timer';

 class Timeout extends Component {


  constructor(props) {
    super(props);
    this.state = { timeout: 30 * 1000, idle: false, overlayShown : false };
  } 

  onActive(){

  }   
  onIdle = () => {
     //debugger; {this.state.idle ? <div>{this.props.component}</div> : <div>TIMEOUT!!!</div>}
    this.setState({ idle: true });
    console.log(this.state);
    if(this.state.overlayShown === false){
        this.setState({ overlayShown: true });
        this.refs.idleTimer.reset();
    }
    else{
        console.log(this);
        this.context.router.push('/');
    }
    
  }
  hideOverlay = () => {
      this.setState({ idle: false });
      this.setState({ overlayShown: false });
  }
  render() {
    return (
        <IdleTimer
            ref="idleTimer"
            element={document}
            activeAction={this.onActive}
            idleAction={this.onIdle}
            timeout={this.state.timeout}
            format="MM-DD-YYYY HH:MM:ss.SSS">
            {!this.state.idle && !this.state.overlayShown ? <div>{this.props.children}</div> : <StillLearning stayOnPage={this.hideOverlay} />}
            
            
            

        </IdleTimer>

    );
  }
}

Timeout.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Timeout;

import './App.css';
import React, { Component } from 'react';
import ComponentA from './ComponentA';
import ErrorBoundry from './ErrorBoundry';
// import TimerOne from './Timer/TimerOne';



class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //    timerOn:false
  //   }
  // }
  // handleTimerOn=()=>{

  //   this.setState((prevState) => ({ timerOn:!prevState.timerOn }))
  // } 
  render(){ 
    return (
      <>

        <ErrorBoundry>
            <ComponentA/>
        </ErrorBoundry>     
  
        {/* <button onClick={this.handleMount}>{this.state.mount?"UN-MOUNT":"MOUNT"}</button>
        {this.state.mount?<TimerOne/>:null} */}
       
        {/* <TimerOne timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn}>{this.state.timerOn ? "STOP" : "START"}</button> */}
       


      </>
    );
  }
 
}

export default App;




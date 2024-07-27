import React, { Component } from 'react'

 class TimerOne extends Component {
    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer=null;
        console.log("TimerOne cunstructor")
        
       
    }

    static getDerivedStateFromProps(props,state){
        console.log("TimerOne getDerivedStateByprops");
        return null;

    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log(nextProps)
        // console.log(nextState)
        // return true;

        //SO HERE WE WILL APPLY THE FUNCTIONALITY SO WHENEVER THE TIME IS MULTIPLE OF 5
        // THEN APP SHOULD RE RENDER OTHERWISE IT SHOULD NOT RERENDER
          console.log(this.state.time)
        return nextProps.timerOn!== this.props.timerOn || nextState.time % 5===0;

    }
    // handleIncreas=()=>{
    //     this.setState((prevState)=>{
    //         return {count:prevState.count+1}
    //     })
    // }
    render(){
        console.log("TimerOne render");
        return(
            <>
            <h1>Times Spent: {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
           
            {/* <h2>{this.state.count}</h2>
            <button onClick={this.handleIncreas}>Increase</button> */}
            </>
        )
    }
     
    // componentDidMount(){
    //     console.log("TimerOne componentDidMount");
    //     console.log("________________________________________")

    //     // WE ARE NOT GOING TO SET THE TIME INTERVAL OR SET THE TIMER INSIDE COMPONENT DID MOUNT
    //     //  BECAUSE WE DONT WANT IT INSTANTLY WORKING WE WANT  TO PUT THIS FUNCTIONALITY INSIDE COMPONENTDIDUPDATE
    //     // this.timer=setInterval(() => {
    //     //     this.setState((prevState)=>({time:prevState.time+1}))
    //     // }, 5000);
    // }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("TimerOne getSnapshotBeforeUpdate");
        return 5;
    }
    //so whatever object we will return from getSnapshotBeforeUpdate it will pass in componentDidUpdate (snapShot)
    //SO WE WILL PUT THAT FUNCTIONALITY HERE BECAUSE THIS IS THE ONLY METHOD AFTR CMDIDMOUNT WHERE WE CAN PERFORM 
   // ANY SIDE EFFECTS 
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("TimerOne componentDidUpdate");
        console.log("___________________________________")
        console.log(" previousProps:",prevProps);
        console.log("previousState:",prevState);
        console.log("snapShot: from getSnapshotBeforeUpdate:",snapShot);

        // if(this.state.time===10){
        //      clearInterval(this.timer);
        // }
        //WE CANT DIRECTLLY APPLY IT we will apply condition here
        if(prevProps.timerOn!==this.props.timerOn){
            if(this.props.timerOn){
                this.timer=setInterval(() => {
                    this.setState((prevState)=>({time:prevState.time+1}))
                 }, 1000);
            }
            //clear interval
            else{
                clearInterval(this.timer);
            }
        }
        
        
    }
    componentWillUnmount(){
       console.log("TimerOne componentWillUnmount");
       clearInterval(this.timer);
    }
}

export default TimerOne;

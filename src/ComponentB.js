import React from "react";


class ComponentB extends React.Component{
    constructor(){
        super();
        this.state={ 
            name:"ComponentB",

        }
        console.log("ComponentB cunstructor")
        
       
    }

    static getDerivedStateFromProps(props,state){
        console.log("ComponentB getDerivedStateByprops");
        return null;

    }
    
    componentDidMount(){
        console.log("ComponentB componentDidMount");
    }

    render(){
        console.log("ComponentB render");
        return(
            <>
            <h2>{this.state.name}</h2>
            </>
        )
    }
}
export default ComponentB;
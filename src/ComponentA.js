import React from "react";
// import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={ 
            name:"ComponentA",
            data:[]

        }
        console.log("componentA cunstructor")
        
       
    }

    static getDerivedStateFromProps(props,state){
        console.log("componentA getDerivedStateByprops");
        return null;

    }
    
    componentDidMount(){
        console.log("componentA componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/user')
           .then(response => response.json())
           .then(data => this.setState({data:data}))//SETTING OUR STATE WITH DATA

        }
    render(){
        console.log("componentA render");
        console.log(this.state.data); 
        // this.setState({
        //     name:"CA "
        // })
        return( <>
        <h1>{this.state.name}</h1>
         {/* <ComponentB/> */}
        <ul>
            {this.state.data.map((d) => {
                return(
                            <li>{d.username} </li>
                       
                    )

                 })}
            </ul>
            </> )
    }
}
export default ComponentA;
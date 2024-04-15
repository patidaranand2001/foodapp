import UserClass from "./User"
import React from "react"
import Usercontext from "../utils/UserContext";

class About extends React.Component {


  constructor(){
    super();
    // console.log("perent constructor called");
    this.state={
      userinfo:{
        name:"dummy",
        location:"default",
      }
    }
  
  } 
   

 async componentDidMount(){
    const data = await fetch("https://api.github.com/users/patidaranand2001");
    const json=await data.json();

    // console.log(json);
    this.setState({userinfo:json})
  }

  render(){
    // console.log("perent render called");

    const {name,id}=this.state.userinfo;

  return (
    

    <div>
    <div>
      
      
  <Usercontext.Consumer>
    {({loggedinUser})=>(<h2 className="font-bold">User : { loggedinUser}</h2>)}
    </Usercontext.Consumer>
    </div>
      <h1 className="font-bold">About</h1>
      <h2>this is swiggy lite by Berlin</h2>
      <UserClass name={name} id={id} />
    </div>
  )
 
  }
}

export default About

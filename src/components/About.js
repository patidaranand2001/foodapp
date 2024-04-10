import UserClass from "./User"
import React from "react"

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

    console.log(json);
    this.setState({userinfo:json})
  }

  render(){
    // console.log("perent render called");

    const {name,id}=this.state.userinfo;

  return (
    

    <div>
      <h1>About</h1>
      <h2>this is swiggy lite by Berlin</h2>
      <UserClass name={name} id={id} />
    </div>
  )
 
  }
}

export default About

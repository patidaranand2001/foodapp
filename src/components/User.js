import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        // console.log("child constructor called");
       
      
     }
    

render(){

const {name,id}=this.props;
// const {count}=this.state;

    return(
        <div className="user-card">
            <h2>name:{name}</h2>
             <h2>User_id:{id}</h2>
            <h3>contact:@berlin  </h3>
            <h4>www.imberlin.com</h4>
        </div>
    );
    
}

}

export default UserClass;
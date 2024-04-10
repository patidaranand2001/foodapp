import { useState } from "react";
import { LOGO_SRC } from "../utils/constants";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";





 export const Header = () => {

  const [btnname,setbtnname]=useState('log-in');
  const isonline=useOnlineStatus();
    return (
      

      <div className="flex bg-pink-100 justify-between shadow-md sticky top-0">
        <div className="">
          <img 
          className="w-[100px]"
            src={LOGO_SRC}
            alt="App Logo"
            
          />
        </div>
        <div className=" flex items-center">
          <ul className="flex  ">
             <li className="p-4" >onlineStatus:{isonline ? "🟢" :"🔴"}</li>
            <li className="m-4 hover:bg-red-400 rounded-lg p-1" > <Link to='/'>Home</Link> </li>
            <li className="m-4 hover:bg-red-400 rounded-lg p-1"><Link to='/about'>About Us</Link></li>
            <li className="m-4 hover:bg-red-400 rounded-lg p-1"> <Link to={'/grousary'}>Grousary</Link></li>
            <li className="m-4 hover:bg-red-400 rounded-lg p-1"><Link to='/contact'>Contact Us</Link></li>
            <li className="m-4 hover:bg-red-400 rounded-lg p-1">Cart</li>
            <li className="m-4 hover:bg-red-400 rounded-lg p-1"><button  onClick={()=>{
              if(btnname=='log-in') setbtnname('log-out');
              if(btnname=='log-out') setbtnname('log-in');
              
            }}>{btnname}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
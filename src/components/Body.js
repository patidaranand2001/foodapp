// import resList from "../utils/resList";

import { useState, useEffect, useContext } from "react";
import Shemaroo from "./Shemaroo";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import RestaurantCard from "./RestaurantCard";
import { isOpen } from "./RestaurantCard";

import Usercontext from "../utils/UserContext";


const Body = () => {


  //  local satate variable
  const {loginUser,setloginUser} =useContext(Usercontext);
  const [restList, setrestoList] = useState(null);
  const [filterlist, setfilterdlist] = useState([]);
  const [query, setquery] = useState("");

  const Openrestorent=isOpen(RestaurantCard);

 


  useEffect(() => {

    fetchlist();
  }, []);

  const fetchlist = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setrestoList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterdlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  const onlineStatus=useOnlineStatus();
  // console.log(onlineStatus);
  if( onlineStatus==false) return <h2>You R off line check your connection </h2>;
  
  if (restList == null) {
    return <Shemaroo />;
  }

  


  return (

    <div className="body m-2 p-2">
      <div className=" flex justify-center">
        <input className=" border-2 border-black " type="text" placeholder="Search Food or Restaurant" value={query}
          onChange={(e) => setquery(e.target.value)} />
        <button
        className=" mx-4 px-3 py-1 bg-green-400  rounded-md"
          onClick={() => {
            const x = restList.filter((restro) => restro.info.name.toLowerCase().includes(query.toLowerCase()));
            setfilterdlist(x);
          }}
        >
          Search
        </button>

        
      </div>
      <div>
        <label>User:</label>
        <input  className=" border-2 border-black " type="text" 
        value={loginUser}
        onChange={(e)=>setloginUser(e.target.value)}
         />
      </div>
      <div className="my-4 flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filterlist?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            {/* <RestaurantCard resData={restaurant} /> */}
            {restaurant.info.isOpen ? (<Openrestorent resData={restaurant}  />):
            (<RestaurantCard resData={restaurant} />) }
          
          </Link>
        ))}

        {/* // * or */}

        {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
      </div>
    </div>
  );
};

export default Body;

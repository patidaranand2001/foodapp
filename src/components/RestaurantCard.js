import { useContext } from "react";
import { IMG_SRC } from "../utils/constants";
import Usercontext from "../utils/UserContext";
const RestaurantCard = (props) => {
    const { resData } = props;

   const {loggedinUser}=useContext(Usercontext); 
  
    const {
      
      name,
      cloudinaryImageId,
      costForTwo,
      cuisines,
      avgRating,
      deliveryTime,
    } = resData?.info;
    console.log(resData)
  
    return (
      <div
        className="m-3 p-1  w-[180px] bg-gray-100 hover:bg-gray-300 rounded-lg"
        
      >
        <img
          className="m-2 w-[160px] rounded-lg"
          // src={
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
          //   resData.data.cloudinaryImageId
          // }
  
          src={
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            cloudinaryImageId
          }
          alt="Biryani"
        />
        {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(', ')}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}
        <h3 className="text-lg font-bold py-2">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>User:{loggedinUser}</h4>
        
      </div>
    );
  };


  export  const isOpen =(RestaurantCard)=>{
      return (props)=>{
         

        return ( <>
          <label className=" m-4 absolute bg-green-500 rounded-lg zin">open</label>
          <RestaurantCard {...props}/>
          </>
        )
      }
  }
  
  export default RestaurantCard;

import { useState } from "react";
import ItemList from "./ItemList"


export default function RestaurantCategories({ data ,showIndex ,setItemIndex }) {
//    const [tempState,SettempState]=useState(showIndex)
const [showItem,setshowItem]=useState(true);
   const handelClick=()=>{
    setItemIndex();
    setshowItem(!showItem);
    
   }
    return (
           <div className="border w-6/12 p-2 mx-auto my-2  bg-gray-200 shadow-lg">
            <div className=" flex justify-between hover:cursor-pointer " onClick={handelClick} >
                <span  className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
           {showItem&& showIndex && <ItemList items={data.itemCards}/>}
            </div>
       
    )
}

import Shemaroo from "./Shemaroo";

import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenue = () => {
   
    const { Id } = useParams();
    const restromenue = useRestaurentMenu(Id);
    const [itemIndex ,setItemIndex]=useState(0);
  

    if (restromenue == null) return <Shemaroo />;
    const { name, cuisines, costForTwo, avgRating } =
        restromenue?.cards[2]?.card?.card?.info;
    const categories = restromenue?.cards[4]?.groupedCard?.cardGroupMap?.[
        "REGULAR"
    ]?.cards.filter(
        (e) =>
            e.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center  ">
            <div className="font-bold text-lg">
                <h1 className="text-xxl m-4">{name}</h1>
                <h3 >{cuisines.join(",")}. {costForTwo / 100} for two</h3>

            </div>

            {categories.map((category, index) => (
                <RestaurantCategories
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showIndex={index==itemIndex ? true :false}
                    setItemIndex={()=>setItemIndex(index)}
                />
            ))}
        </div>
    );
};
export default RestaurantMenue;

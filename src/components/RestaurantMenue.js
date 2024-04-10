
import Shemaroo from "./Shemaroo";

import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenue=()=>{
    // const [restromenue,setrestromenue]=useState(null);

    
    const {Id}=useParams();
    //    console.log(param)
    
   
    const restromenue=useRestaurentMenu(Id);
   
    
    if(restromenue==null)return <Shemaroo/>
    const{name,cuisines,costForTwo,avgRating}=restromenue?.cards[2]?.card?.card?.info;
    const restroinfo=restromenue?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <>
        <h1>{name}</h1>
        <h3>{cuisines.join(',')}.</h3>
        <h3>{costForTwo/100} for two</h3>
        <h3>{avgRating}*</h3>
        <h2>Menue</h2>
        <ul>
        {
            restroinfo.map(restro=>(<li key={restro.card.info.Id}>{restro.card.info.name}</li>))
        }
        </ul>

        {/* restromenue.map((restro) => ( <h3>{{restro}.card.info.name}</h3>)) */}
       
        </>
    )
}
export default RestaurantMenue;
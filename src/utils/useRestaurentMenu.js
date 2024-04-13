import { useEffect,useState } from "react"

const useRestaurentMenu=(id)=>{

    const [restroinfo,setrestroinfo]=useState(null);

useEffect(()=>{
fetchRestroinfo();
},[])

const fetchRestroinfo=async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    

const json=await data.json();

setrestroinfo(json?.data);

}
return restroinfo;


}
export default useRestaurentMenu;
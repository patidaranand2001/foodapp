import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    
    const dispatch=useDispatch()
    const handleClear=()=>{
        dispatch(clearCart());
    }
     
    const item=useSelector((store)=>store.cart.items)

    return (
        <div  className="text-center m-5 p-5">
        <div className=" font-bold text-2xl  ">
             Cart
            
        </div>
        <button className="bg-black text-white   rounded-lg px-2"  onClick={handleClear}> clear-cart</button>
        <div className="w-6/12 m-auto"> <ItemList items={item}/></div>
        {item.length==0 && (<h3>your cart is empty add some </h3>)}

        
        
        </div>
       
    )
}
export default Cart;
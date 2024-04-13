// import { IMG_SRC } from "../utils/constants";
import { URL_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
    //    console.log(items)

    return (

        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className=" m-2 p-2 border-b-2 border-gray-300  text-left flex justify-between">
                    <div className="w-8/12 ">
                        <div className="py-2 ">
                            <span >{item.card.info.name}</span>
                            <span > - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                    <div className="absolute">
                    <button className="p-1 bg-black text-white rounded-lg hover:cursor-pointer">Add+</button>
                    </div>
                        <img src={URL_IMG + item?.card?.info?.imageId} className="w-full rounded-lg " />
                    </div>
                </div>

            ))}
        </div>

    )
}
export default ItemList;
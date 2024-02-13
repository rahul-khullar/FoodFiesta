import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../../../Utils/constants";

const RestaurantMenu = () =>  {
    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems,setMenuItems] = useState([]);

    useEffect (()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        try{
            const response = await fetch (swiggy_menu_api_URL + resId);
            const json = await response.json();
            console.log("Api call for restaurant menu", json)

        }
        catch(error){
            setMenuItems([]);
            setRestaurant(null);
            console.log(error);
        }
    }
    return(
        <div>

        </div>
    );
}
export default RestaurantMenu;
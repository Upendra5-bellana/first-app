import {useEffect,useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';




export const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);
    const params =useParams();
    //console.log(params);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu= async ()=>{
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=142670&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
        const json= await data.json();
       // console.log(json.data.cards[3]);
        setResInfo(json.data);
        //console.log(json.data);
    };
    if (resInfo==null) return <Shimmer />;
  const {name,costForTwoMessage,cuisines} =
    resInfo?.cards[2].card.card.info;
  const {carousel} =(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    
   
    return (
     <div> 
     <h1> {name} </h1>
     <h3> {costForTwoMessage} </h3>
     <p> {cuisines.join(",")}</p>
     <h3> Menu </h3>
     
     
     {  <ul >
        {carousel.map((item)=>(
            <li key={item.dish.info.id}> 
                {item.dish.info.name} - Rs{" "}
                {item.dish.info.price/100}
            </li>

        ))}
     </ul>   }
     </div>
    )
};


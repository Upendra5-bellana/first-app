import { useState,useEffect } from 'react';
import RestaurentCart from '../components/RestaurentCart';
import Shimmer from './Shimmer';


const Body=()=>{
    const[ListOfRestaurants,setListOfRestaurants]=useState([]);
    const[FilterRestaurant,setFilterRestaurant]=useState([]);

    const[SearchText,setSearchText]=useState("")
    
    // console.log(ListOfRestaurants)

    useEffect(()=> {
        fetchData();
    },[] );

    const fetchData = async () => {
    //   try {
    //   const ata =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    //   const json = await data.json();
    //   //  const tst = json.data.cards.map( cardItem => cardItem.card.info);
    //   const validCards=json.data.cards.filter(cardItems=> cardItems?.card?.card?.info?.id && cardItems.card?.card?.info?.id );
    //   setListOfRestaurants(validCards);
    //   setFilterRestaurant(validCards);
    //   // console.log(validCards);
      
    // }
    //  catch(error){
    //   console.error("Error fetching data:",error);
    //  } 
   
  // fetch data from GET API 
  const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
     const json = await data.json();
  //   //  const tst = json.data.cards.map( cardItem => cardItem.card.info);
     const validCards=json.data.cards.filter(cardItems=> cardItems?.card?.card?.info?.id && cardItems.card?.card?.info?.id );
   // const validCards=json?.data?.cards;
    setListOfRestaurants(validCards);
      setFilterRestaurant(validCards);
  //   // console.log(validCards);

  //Fetch data from POST API 
  // const postData=await fetch("https://www.swiggy.com/dapi/restaurants/list/update",{
  //   method: 'POST',
  //   headers: {
  //     'content-type':'application/json; charset=utf-8',
  //   },
  //   body: JSON.stringify({
  //     //Add any parameters your POST request needs here 
  //     lat:17.406498 ,
  //     lng: 78.47724389999999,
  //     collection: "83634", 
  //     tags: "layout_CCS_SouthIndian",
  //   }),
  // });
  // const postJson =await postData.json();
  // console.log(postJson);


    };
    
    // conditional Rendering  
    // if (ListOfRestaurants.length === 0){
    //  return  (
    //   <Shimmer />
    //  )
    // };
    
    return (ListOfRestaurants.length === 0) ?  (
    <Shimmer /> 
  )  : (
      <div className="body">
         <div className="filter-btn">
          <div className="search"> 
            <input type="text" className="search-box" 
            value={SearchText}  onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button onClick={()=> {
              // fliter the restaurent  cards and updated the UI 
              // SearchText
              // console.log(SearchText);
              const filterRes= ListOfRestaurants.filter((res)=> res?.card?.card?.info?.name.toLowerCase().includes(SearchText.toLowerCase()));
              console.log(filterRes);
              setFilterRestaurant(filterRes);
            }
            } > Search </button>
          </div>
          <button className="filter" onClick={()=>{
            const filterRes=ListOfRestaurants.filter((res)=> res.card.card.info.avgRating>4.5);
            setListOfRestaurants(filterRes);
          }}> Top Rated Restaurents</button>
         </div>
         <div className="res-container">
            {
            FilterRestaurant.map((restaurant)=> (<RestaurentCart key={restaurant?.card?.card?.info?.id} restData={restaurant} />))
            }
         </div>
      </div>
    )
  }

  export default Body;
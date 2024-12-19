import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {MENU_API} from '../utils/constants';




export const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resid} = useParams();
    // console.log(params);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resid);
        const json = await data.json();
        // console.log(json.data.cards[3]);
        setResInfo(json.data);
        //console.log(json.data);
    };
    if (resInfo == null) return <Shimmer />;
    const { name, costForTwoMessage, cuisines } =
        resInfo?.cards[2].card.card.info;
    const { carousel } = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)


    return (
        <div>
            <h1> {name} </h1>
            <h3> {costForTwoMessage} </h3>
            <p> {cuisines.join(",")}</p>
            <h3> Menu </h3>


            {<ul >
                {carousel.map((item) => (
                    <li key={item.dish.info.id}>
                        {item.dish.info.name} - Rs{" "}
                        {item.dish.info.price / 100}
                    </li>

                ))}
            </ul>}
        </div>
    )
};

 
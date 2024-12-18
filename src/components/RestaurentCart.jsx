import {FOOD_LOGO} from '../utils/constants';

const RestaurentCart=(props)=>{
    const {restData} = props;
    const {card:{card:{info:{name,cloudinaryImageId,costForTwo,cuisines,avgRating,sla:{deliveryTime}}}}} = restData;
    return (
        <div className="res-card">
            <img className="image" alt="food-logo" src={FOOD_LOGO+cloudinaryImageId} />
             <h3> {name} </h3>
             <h3> {cuisines.join(",")}</h3>
             <h3> {costForTwo}</h3>
             <h3> {avgRating} Rating </h3>
             <h3> {deliveryTime} Minutes </h3>
        </div>
    )
};

export default RestaurentCart;
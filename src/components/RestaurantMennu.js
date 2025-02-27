import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMennu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)
  
  if (resInfo === null) return <Shimmer />;


  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
console.log("Res Names", resInfo?.cards[2]?.card?.card?.info);

    // console.log("itemcards", resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    
    
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  if(!itemCards){
    return <h1 className="text-4xl m-4 font-semibold">Item card is Not found</h1>
  }
  
  
    // cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
  
};
export default RestaurantMennu;
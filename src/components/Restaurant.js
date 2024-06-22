import { useEffect, useState } from "react"; //Named exports are specific functions, objects, or variables that are exported from a module.
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MANU_API } from "../utils/constant";

const Reastaurant = () => {
  const [resinfo, setResInfo] = useState(null);

  const { resId } = useParams();

  console.log("a");
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(
      MANU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  const cardInfo = resinfo?.cards[2].card.card.info;
  const itemcards =
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .itemCards  || resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .carousel;  //itemCards       carousel

  if (!cardInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, city, avgRating, areaName } =
    cardInfo;

  console.log(itemcards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>City : {city}</h2>
      <ul>
        <li>{costForTwoMessage}</li>
        <li>{avgRating}</li>
        <li>{areaName}</li>
      </ul>
      <ul>
        <li>Manu</li>
        {/* <li>{itemcards.carousel[0].dish.info.name}</li>
         <li>{itemcards.carousel[1].dish.info.name}</li> */}
        {itemcards?.map((item, index) => (
          <li key={item?.card?.info?.id || item?.dish?.info?.id}>
            {" "}
            {item?.card?.info?.name  || item?.dish?.info?.name || "No manu items here"} - {"Rs. "}{" "}
            {item?.card?.info?.price / 100 || item?.dish?.info?.price /100}
            {/* item?.card?.info?     item?.dish?.info? */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reastaurant;

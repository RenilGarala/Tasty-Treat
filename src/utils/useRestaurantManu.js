import { useEffect ,useState} from "react";
import { MANU_API } from "./constant";

const useRestaurantManu = (resId) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchmenu();
  });

  const fetchmenu = async () => {
    const data = await fetch(
      MANU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resinfo;
};

export default useRestaurantManu;
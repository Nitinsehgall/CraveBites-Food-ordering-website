import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SideWindow from "./SideWindow";
import Loading from "./Loading";
import AddressPage from "./AddressPage";

function Main({ commonData, setCommonData }) {
  const [foodItems, setFoodItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 1000);
  }, []);


  return (
    <>
      {loader == true ? (
        <Loading />
      ) : (
        <div className="Main mb-10">
         
          <SearchBar foodItems={foodItems} setFoodItems={setFoodItems} />
          <Card
            foodItems={foodItems}
            setFoodItems={setFoodItems}
            setCommonData={setCommonData}
          />
        </div>
      )}
    </>
  );
}

export default Main;

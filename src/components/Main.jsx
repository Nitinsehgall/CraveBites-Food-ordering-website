import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "./Loading";

function Main({  setCommonData }) {
  const [foodItems, setFoodItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 500);
  }, []);


  return (
    <>
      {loader == true ? (
        <Loading />
      ) : (
        <div className="Main mb-10">
         
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

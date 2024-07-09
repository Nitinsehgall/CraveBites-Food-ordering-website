import { createContext, useContext, useEffect, useState } from "react";
import SideWindow from "./SideWindow";
import Items from "../content/Items";

const data=createContext()

function Card({ foodItems, setFoodItems }, props) {
  // const [foodItems, setFoodItems] = useState(Items);
  const [cartData, setCartData] = useState([]);
  const [showSider, setShowSider] = useState(false);
  

  
  useEffect(() => {
    setFoodItems(
      Items.map((item) => {
        // console.log(item,Object.values(item.options[0]));
        return { ...item, selectedOption: Object.values(item.options[0])[0] };
      })
    );
  }, []);

  const choose = (val, index, element) => {
    const amount = parseInt(val.target.value);

    const updatedItems = foodItems.map((element, i) => {
      if (i === index) {
        return { ...element, selectedOption: amount };
      }
      return element;
    });
    setFoodItems(updatedItems);
  };
let newcartData;
  const addToCart = (element, index) => {
    setShowSider(true);
    // console.log(element);

    setCartData([...cartData, element]);
    newcartData=cartData
  };


  // const [total,setTotal]=useState(0)
  function handleIncrease(element, index, price) {
    const updateQuant = foodItems.map((e, i, arr) => {
      if (i == index) {
        let newq = element.quantity + 1;

        let total = newq * parseInt(element.selectedOption);
        console.log("totalprice is", total);
        return { ...element, quantity: newq, TotalAmt: total };
      }
      return e;
    });
    setFoodItems(updateQuant);

  }
// console.log(newcartData,'ncd');
  return (
    <>
    <data.Provider value={newcartData} >

   

        <div
          className="card-parent"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {foodItems?.map((element, index) => (
            <div className="card" key={index}>
              <div className="vegCheck flex justify-between">
                {element.isVeg == true ? (
                  <>
                    <div className="green">
                      <div className="innerGreen"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="red">
                      <div className="innerRed"></div>
                    </div>
                  </>
                )}
                <p className="text-red-600 totalAmtt">{element.TotalAmt}</p>
                {showSider && <SideWindow show={"Cart"} cartData={cartData} />}
              </div>
              <img src={element.src} height={"150px"} alt="imglogo" />
              <h3 className="text-2xl">
                {element.name}:{element.selectedOption}
              </h3>

              <div className="innerCard">
                {element.quantDivide && (
                  <select
                  name="quantity"
                  id="choose"
                  value={element.selectedOption}
                    className="rounded h-10 select"
                    onChange={(e) => choose(e, index, element)}
                  >
                    <option value={Object.values(element.options[0])[0]}>
                      {Object.keys(element.options[0])[0]}
                    </option>
                    <option value={Object.values(element.options[0])[1]}>
                      {Object.keys(element.options[0])[1]}
                    </option>
                  </select>
                )}
                <div className="btnCard">
                  <div className="innerBtn">
                    <button>-</button>
                    <p>{element.quantity}</p>
                    <button
                      onClick={() =>
                        handleIncrease(element, index, element.selectedOption)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
             
              </div>
              <div className="Card-btn-parent">
                <div></div>
                {element.quantity == 0 ? (
                  <>
                    <div className="Card-btn">
                      <button onClick={() => alert("Please Add some Quantity")}>
                        Add To Cart
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="Card-btn">
                      <button onClick={() => addToCart(element, index)}>
                        Add to Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        </data.Provider>  
    </>
  );
}

export {data}
export default Card;

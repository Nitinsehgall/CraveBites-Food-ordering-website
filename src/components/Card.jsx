import { useEffect, useState } from "react";
import SideWindow from "./SideWindow";
import Items from "../content/Items";
import { useLocation } from "react-router-dom";

function Card({ foodItems, setFoodItems, setCommonData }, props) {
  const [cartData, setCartData] = useState([]);
  const [showSider, setShowSider] = useState(false);
  useEffect(() => {
    setFoodItems(
      Items.map((item) => {
        
        return { ...item, selectedOption: Object.values(item.options[0])[0] };
      })
    );
  }, []);
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  

  const choose = (val, index, element) => {
    
    
    const amount = parseInt(val.target.value);

    const updatedItems = foodItems.map((element, i) => {
    
      if (i === index) {

        return { ...element, selectedOption: amount, quantity: 0 };
      }
      return element;
    });
    setFoodItems(updatedItems);
  };
  const [badgeIncrease, setBadgeIncrease] = useState(1);

  const addToCart = (element, index) => {
    setShowSider(true);
    setBadgeIncrease(badgeIncrease + 1);

    setCartData([...cartData, element]);
    setCommonData([...cartData, element]);
  };
  // const [total,setTotal]=useState(0)
  function handleIncrease(element, index, price) {
    const updateQuant = foodItems.map((e, i, arr) => {
      if (e.id == element.id) {
        let newq = element.quantity + 1;

        let total = newq * parseInt(element.selectedOption);
        return { ...element, quantity: newq, TotalAmt: total };
      }
      return e;
    });
    setFoodItems(updateQuant);
  }

  const handleDecrease=(element, index, price)=>{
    
    const updateQuant = foodItems.map((e, i, arr) => {
      if (element.id == e.id &&element.quantity>0) {
        let newq = element.quantity - 1;

        let total = newq * parseInt(element.selectedOption);
        return { ...element, quantity: newq, TotalAmt: total };
      }
      return e;
    });
    setFoodItems(updateQuant);
  }

  return (
    <>
      <div
        className="card-parent "
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {foodItems?.map((element, index) => (
          <div className="card w-3/4 sm:w-3/4 md:w-1/4 lg:w-1/5" key={index}>
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
              {/* {showSider && <SideWindow cartData={cartData} />} */}
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
                  <button
                    onClick={() =>
                      handleDecrease(element, index, element.selectedOption)
                    }
                  >
                    -
                  </button>
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
                  <div className="Card-btn bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    <button onClick={() => alert("Please Add some Quantity")}>
                      Add To Cart
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className=" Card-btn bg-gradient-to-r from-red-600 to-blue-500 text-white">
                    <button
                      onClick={() =>
                        addToCart(element, index, element.quantity)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;

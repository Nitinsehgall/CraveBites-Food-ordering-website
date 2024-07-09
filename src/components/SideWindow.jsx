import React, { createContext, useContext, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";



const SideWindow = (props) => {
  
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [localData, setLocalData] = useState([]);
  console.log(localData, "LOCAL");

  const ElementsOfCart = props.cartData;

  useEffect(() => {
    console.log(props.cartData);
    if (props?.cartData) {
      setLocalData(props?.cartData);
    } else {
      setLocalData([]);
    }
    // setIsOpen(true)
  }, []);

  const total = ElementsOfCart?.reduce(
    (accumulator, currentvalue) => {
      // console.log(accumulator.TotalAmt + currentvalue.TotalAmt, "previous");
      console.log(accumulator + currentvalue.TotalAmt);
      return accumulator + currentvalue.TotalAmt;
    },
    0
  );

  useEffect(() => {
    if (props?.cartData) {
      setLocalData(props.cartData);
    } else {
      setLocalData([]);
      setIsOpen(!isOpen);
    }
  }, [props?.cartData]);

  // useEffect(() => {
  //   if (props?.cartData.length) {
  //     setLocalData([...localData, props?.cartData]);
  //   }
  // }, [props?.cartData]);
  const str = "hello world";

  return (
    <>
 

      {/* cart data ara h card componet se */}

      <button onClick={toggleDrawer}>{props.show}</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{ overflow: "auto" }}
        lockBackgroundScroll={true}
        size={320}
      >
        <h2 className="bg-black m-1 text-white text-center p-3 drawerH2">
          <span>CraveBites</span>
          <i class="fa-solid fa-utensils"></i>
        </h2>
        <div className="draw">
          {localData.length > 0 ? (
            props.cartData?.map((collectedData, index) => {
              return (
                <>
                  <div className="slider">
                    <div className="innerDiv">
                      <div className="innerDiv1">
                        <img src={collectedData.src} alt="logo" />

                        <p>
                          {collectedData.name} :{collectedData.quantity}x
                          {collectedData.selectedOption}
                        </p>
                        <h4>
                          {" "}
                          <span>Rs.</span>
                          {collectedData.TotalAmt}
                        </h4>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div>NITIN</div>
          )}

          <div>Total:{total}</div>
          <div className="innerdiv2">
            <button className="orderPlace">Place order</button>
          </div>
        </div>
      </Drawer>
       
    </>
  );
};

export default SideWindow;

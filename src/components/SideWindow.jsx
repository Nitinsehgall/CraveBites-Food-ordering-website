import React, { createContext, useContext, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { cartDataContext ,contextApi} from "../utils/contextApi";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import DeleteIcon from '@mui/icons-material/Delete';


const SideWindow = (props) => {

  const cartContext = useContext(cartDataContext);
  


  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  const [localData, setLocalData] = useState([]);

  const ElementsOfCart = localData;

  const navigate = useNavigate();

  useEffect(() => {
    if (props?.cartData) {
      setLocalData(props?.cartData);
    } else {
      setLocalData([]);
    }
    
  }, []);


  const total = ElementsOfCart?.reduce((accumulator, currentvalue) => {
    
    return accumulator + currentvalue.TotalAmt;
  }, 0);

  useEffect(() => {
    if (props?.cartData) {
      setLocalData(props.cartData);
    } else {
      setLocalData([]);
    }
  }, [props?.cartData]);


  useEffect(() => {
    if (cartContext?.length > 0) {
      setLocalData(cartContext);
    }
  }, [cartContext]);

  

  const setCommonData = props?.setCommonData

  const handlePlaceOrder = () => {
    
    navigate("/my-orders", {
      state:{localData: localData,
      totalAmount: total}
    });

    setIsOpen(!isOpen);
    setLocalData([])
  props?.setCommonData([])
  };

  

  // useEffect(() => {
  //   if (props?.cartData.length) {
//     setLocalData([...localData, props?.cartData]);
  //   }
  // }, [props?.cartData]);

  const deleteSlideData=()=>{
    navigate('/home')
   setLocalData([])
   setCommonData([])
   setIsOpen(!isOpen);
 

    // props?.setCommonData([])
  }
  const navigateToMenu=()=>{
    navigate('/menu')
    setIsOpen(!isOpen);
cartContext([])
  }
  
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

        <h2 className="bg-black  text-white text-center p-3 drawerH2 flex justify-evenly">
        <button onClick={deleteSlideData}>
           <i className="fa-solid fa-trash text-red-600"></i>
          
          </button>
          <span>CraveBites <i className="text-yellow-300 fa-solid fa-utensils"></i></span>
          
        </h2>
        <div className="innerdiv2">
            {localData.length == 0 ? (
              <>
                <div className="flex flex-col justify-center items-center ">
                  <p className="text-xl">Empty Cart</p>
                  <button
                    className=" w-full orderPlace bg-green-600"
                    onClick={navigateToMenu}
                    
                  >
                    Choose Item From menu
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-around w-screen">
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 w-32 orderPlace" onClick={handlePlaceOrder}>
                    Place order
                  </button>
                  <p className="text-black border-2 mt-2 p-4">Total:{total}</p>
                </div>
              </>
            )}
          </div>
        <div className="draw text-black">
          {localData.length > 0 ? (
            localData?.map((collectedData, index) => {
              return (
                <>
                  <div key={index} className="slider border-b">
                    <div className="innerDiv">
                      <div className="innerDiv1">
                        <img
                          className="object-contain"
                          src={collectedData.src}
                          alt="logo"
                        />

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
            <div></div>
          )}

         
        </div>
      </Drawer>
    </>
  );
};

export default SideWindow;

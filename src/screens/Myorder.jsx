import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Crousal } from "../components/Crousal";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { cartDataContext } from "../utils/contextApi";
import Loading from "../components/Loading";

function Myorder() {
  const date = new Date();
  const [curDate, setCurDate] = useState(date);
  const [total,setTotal]=useState()
  const [myOrderData, setMyOrderData] = useState();
  
  const cartContext = useContext(cartDataContext);
  
  console.log(cartContext, "MY ORDER");

  useEffect(() => {
    if (cartContext) {
      setMyOrderData(cartContext);
    }
  }, []);
  
  const location = useLocation();
  console.log(location?.state?.totalAmount, "STATE");

  useEffect(() => {
    if (location?.state?.localData) {
      setMyOrderData(location?.state?.localData);
      
    }
  }, [location?.state]);

  // const fullDate =
  //   date.getDate() +
  //   "-" +
  //   (date.getMonth() + 1) +
  //   "-" +
  //   date.getFullYear() +
  //   ", " +
  //   date.getHours() +
  //   ":" +
  //   date.getMinutes()
  const fullDate = date.toLocaleDateString();
  const day = date.getDay();
  const random = crypto.randomUUID();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 1000);
  }, []);
 

  // console.log(myOrderData, "myOrderData");
console.log(total,'total');
  return (
    <>
    {loader==true?<Loading/>:

    <div className="relative m-11">

      {cartContext == undefined || myOrderData?.length === 0 ? (
        <div className="h-96 flex flex-col justify-center items-center ">
          <h1 className="text-xl text-center mb-4">
            You have not placed any order yet.
            <SentimentVeryDissatisfiedIcon color="warning" fontSize="large" />
          </h1>
          <h1 className="text-xl text-center">
            Go to the Menu tab to place an order
          </h1>
        </div>
      ) : (
        <div className="container mx-auto min-h-screen p-6">
          <h1 className="text-2xl text-center mb-6 ">
            Order Placed Successfully
            <CheckCircleIcon color="primary" fontSize="medium" />
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-lg text-gray-700">OrderId: {random}</p>
            <p className="text-lg">{fullDate}</p>
          </div>
          <div>Total Amount is: {location?.state?.totalAmount} </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myOrderData?.map((e, i) => (
              <div
                key={i}
                className="myOrder-card p-4 shadow-md rounded-lg flex flex-col items-center"
              >
                <img
                  className="w-24 h-24 object-cover mb-4"
                  src={e.src}
                  alt=""
                />
                <div className="text-center">
                  <div className="mb-2">
                    {e.name}: {e.quantity} x {e.selectedOption}
                  </div>
                  <div className="font-semibold">Amount: {e.TotalAmt}</div>
                </div>
              </div>
            ))}
          </div>
            
        </div>
      )}
          </div>}
    </>
  );
}

export default Myorder;

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
  const [total, setTotal] = useState();
  const [myOrderData, setMyOrderData] = useState();
  
  const cartContext = useContext(cartDataContext);

  useEffect(() => {
    if (cartContext) {
      setMyOrderData(cartContext);
    }
  }, []);
  
  const location = useLocation();
  
  useEffect(() => {
    if (location?.state?.localData) {
      setMyOrderData(location?.state?.localData);
    }
  }, [location?.state]);

  const fullDate = date.toLocaleDateString();
  const day = date.getDay();
  const random = crypto.randomUUID();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 1000);
  }, []);
 
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div className="relative top-10 p-10 bg-gradient-to-r from-green-400 to-blue-500 mb-10">
          {cartContext === undefined || myOrderData?.length === 0 ? (
            <div className="h-96 flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h1 className="text-2xl text-center mb-4 font-bold text-gray-800">
                You have not placed any order yet.
                <SentimentVeryDissatisfiedIcon color="warning" fontSize="large" className="ml-2" />
              </h1>
              <h1 className="text-xl text-center text-gray-700">
                Go to the Menu tab to place an order
              </h1>
            </div>
          ) : (
            <div className="container mx-auto min-h-screen p-6 bg-white rounded-lg shadow-md">
              <div className="hero-section bg-blue-500 text-white p-8 rounded-lg mb-6">
                <h1 className="text-3xl text-center font-bold mb-4">
                  Thank you for your order!
                </h1>
                <p className="text-center text-lg">
                  Your order has been placed successfully.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <p className="text-lg text-gray-700">OrderId: {random}</p>
                <p className="text-lg">{fullDate}</p>
              </div>
              <div className="total-amount text-xl font-semibold mb-4">
                Total Amount is: {location?.state?.totalAmount}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myOrderData?.map((e, i) => (
                  <div
                    key={i}
                    className="myOrder-card p-4 shadow-md rounded-lg flex flex-col items-center bg-gray-50 hover:shadow-lg transition-shadow duration-200"
                  >
                    <img
                      className="w-24 h-24 object-cover mb-4 rounded-full"
                      src={e.src}
                      alt=""
                    />
                    <div className="text-center">
                      <div className="mb-2 text-lg font-medium text-gray-800">
                        {e.name}: {e.quantity} x {e.selectedOption}
                      </div>
                      <div className="font-semibold text-gray-900">Amount: {e.TotalAmt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Myorder;

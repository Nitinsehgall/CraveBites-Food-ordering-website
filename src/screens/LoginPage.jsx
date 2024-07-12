import React, { useEffect, useState } from "react";
import img from "../assets/Images/loginImg.png";
import LandingPage from "../components/LandingPage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Location from "../components/Location";

function LoginPage({ setIsUserLogin }) {
  const name = "admin";
  const password = "123";
  const [inputVal, setInputVal] = useState("");
  const [inputPass, setPass] = useState("");
  const [successfull, setSuccessfull] = useState("");
  const [intial, setIntial] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storageItem = localStorage.getItem("isUserLoggedIn");

    console.log(storageItem, "STOR");
  }, []);

  const inputName = (e) => {
    setInputVal(e.target.value);
    console.log(e);
  };
  const inputPassword = (e) => {
    setPass(e.target.value);
    console.log(inputPass);
  };
  console.log(intial);
  const callLanding = () => {
    if (inputVal == name && inputPass == password) {
      navigate("/home");
      setSuccessfull("logged in successfull");
      setIntial(true);
      setIsUserLogin(true);
      localStorage.setItem("isUserLoggedIn", true);
    } else {
      alert("Wrong Username and password");
    }
  };
  return (
    <>
    <div className="h-screen">

      <h1>{successfull}</h1>
      <h2 className=" text-lg bg-black border-r-1 text-white text-center">
                Name is : <span className="spn">admin </span> Password is:{" "}
                <span className="spn">123</span>
              </h2>
      
             
      <div className="LoginParent bg-gradient-to-r from-green-400 to-blue-500 text-white">
        
        <div className="LoginChild ">
          <div className="imgDiv">
            <h1 className="bg-gradient-to-r from-green-400 to-blue-500  text-white">
            Welcome to CraveBites <i className="text-yellow-300 fa-solid fa-utensils"></i>
              
            </h1>
            <img
              className="rounded-md"
              src="https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png"
              alt=""
            />
          </div>
          <div>
            <div className="inner1">
              <label className="text-white" htmlFor="">
                Name
              </label>

              <input
                className="text-black"
                onChange={inputName}
                type="text"
                placeholder="Enter Your Name"
                />
            </div>

            <div className="inner2">
              <label className="text-white" htmlFor="pass">
                Password
              </label>

              <input
                onChange={inputPassword}
                type="password"
                name="pass"
                className="text-black"
                placeholder="Enter Your Password"
                />
            </div>

            <button onClick={callLanding}>Submit{intial}</button>
          </div>
        </div>
      </div>
                </div>
    </>
  );
}

export default LoginPage;

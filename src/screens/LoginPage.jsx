import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading'
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

  const callLanding = () => {
    if (inputVal === name && inputPass === password) {
      navigate("/home");
      setSuccessfull("Logged in successfully");
      setIntial(true);
      setIsUserLogin(true);
      localStorage.setItem("isUserLoggedIn", true);
    } else {
      alert("Wrong Username and password");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1>{successfull}</h1>
      <h2 className="text-lg">
        Name is: <span className=" font-bold">admin</span> Password is: <span className="font-bold">123</span>
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-black">Welcome to CraveBites <i className="text-yellow-300 fa-solid fa-utensils"></i></h1>
          <img
            className="rounded-md w-32 h-32 md:w-48 md:h-48"
            src="https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png"
            alt=""
          />
          <div className="w-full mt-4">
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border text-black border-gray-300 rounded-md"
                onChange={inputName}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full text-black p-2 border border-gray-300 rounded-md"
                onChange={inputPassword}
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              onClick={callLanding}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import "./App.css";
import {  useEffect, useState } from "react";
import { cartDataContext } from "./utils/contextApi";
import LoginPage from "./screens/LoginPage";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Myorder from "./screens/Myorder";
import About from "./screens/About";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorPage from "./screens/ErrorPage";
import ContactUs from "./components/ContactUs";

import Faq from "./screens/Faq";

function App() {

  const params = useParams();
  const [commonData, setCommonData] = useState();
  const [isUserLogin, setIsUserLogin] = useState(false);

 

  useEffect(() => {
  
    if (params?.keys?.length == undefined) {
      setIsUserLogin(false);
    } else {
      setIsUserLogin(true);
    }
  }, []);
  
  const Context = cartDataContext;

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={commonData}>
          {isUserLogin && <Navbar setCommonData={setCommonData} setIsUserLogin={setIsUserLogin} />}
          <Routes>
            <Route path="/" element={<LoginPage setIsUserLogin={setIsUserLogin} />} />
            <Route path="/home" element={<> <LandingPage /></> }/>
            <Route path="/my-orders" element={<Myorder />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/menu" element={<Main commonData={commonData} setCommonData={setCommonData} />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/FAQ" element={<Faq />} />
          </Routes>
          {isUserLogin && <Footer  setIsUserLogin={setIsUserLogin} />}
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

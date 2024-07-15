import "./App.css";
import { createContext, useEffect, useState } from "react";
import { cartDataContext } from "./utils/contextApi";
import LoginPage from "./screens/LoginPage";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Myorder from "./screens/Myorder";
import About from "./screens/About";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Layout from "./Layout/Layout";
import ErrorPage from "./screens/ErrorPage";
import ContactUs from "./components/ContactUs";
import Modal from "./components/Modal";
import { Crousal } from "./components/Crousal";
import Faq from "./screens/Faq";

function App() {
  const [showNav, setShowNav] = useState(false);
const params = useParams()
  const [ commonData, setCommonData ] = useState()
  const [ isUserLogin, setIsUserLogin ] = useState(false)

  console.log(commonData, "COMMON")

  useEffect(() => {
    
    if(params?.keys?.length == undefined){
      setIsUserLogin(false)  
    }else {

      setIsUserLogin(true)
    }
  },[])

  useEffect(() => {
    const checkLoggedUser = localStorage.getItem("isUserLoggedIn");

    if (checkLoggedUser) {
      setShowNav(true);
    }
  }, [showNav]);


  const Context = cartDataContext

  return (
    <>
      <BrowserRouter>
      <Context.Provider value={commonData}>

      
      {isUserLogin && <Navbar setCommonData={setCommonData} setIsUserLogin={setIsUserLogin}/>}
        <Routes>
          <Route path="/" element={<LoginPage setIsUserLogin={setIsUserLogin}/>} />
          <Route
            path="/home"
            element={
              <>
                <Crousal />
                <LandingPage />
              </>
            }
          />{" "}
          {/* Redirect /home to LandingPage */}
          <Route
            path="/my-orders"
            element={
                <Myorder />
            }
          />
          <Route
            path="/aboutus"
            element={
                <About />
            }
          />
          <Route
            path="/menu"
            element={
                <Main commonData={commonData} setCommonData={setCommonData} />
            }
          />
          <Route
            path="*"
            element={
             
                  <ErrorPage />
               
            }
          />
          <Route
            path="/contactUs"
            element={
             
                  <ContactUs />
                
            }
          />
          <Route
            path="/FAQ"
            element={
             
                  <Faq/>
                
            }
          />
        </Routes>
       {isUserLogin && <Footer setIsUserLogin={setIsUserLogin}/>}
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

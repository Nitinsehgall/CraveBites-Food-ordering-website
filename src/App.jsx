import "./App.css";
import { createContext, useEffect, useState } from "react";
import { cartDataContext } from "./utils/contextApi";
import LoginPage from "./screens/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const checkLoggedUser = localStorage.getItem("isUserLoggedIn");

    if (checkLoggedUser) {
      setShowNav(true);
    }
  }, [showNav]);

  console.log(showNav, "STATE");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Crousal />
                <LandingPage />
              </Layout>
            }
          />{" "}
          {/* Redirect /home to LandingPage */}
          <Route
            path="/my-orders"
            element={
              <Layout>
                <Myorder />
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/menu"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <>
                  <ErrorPage />
                </>
              </Layout>
            }
          />
          <Route
            path="/contactUs"
            element={
              <Layout>
                <>
                  <ContactUs />
                </>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

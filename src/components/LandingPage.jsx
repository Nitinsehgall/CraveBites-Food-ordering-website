import React, { useEffect } from "react";
import logo from "../assets/Images/logo.png";
import img1 from "../assets/Images/LandingImage1.png";
import Navbar from "./Navbar";
import LandingPage2 from "./LandingPage2";
import Footer2 from "./Footer2";
import { Crousal } from "./Crousal";
import { Ratings } from "./Rating";

function LandingPage() {
  let divItem = [
    {
      Heading: "Easy To Order",
      subHeading: "You can order from app or website",
      img: "https://static.vecteezy.com/system/resources/previews/005/611/296/original/mobile-smartphone-with-food-delivery-app-order-food-online-modern-creative-data-graphic-design-on-the-application-flat-style-cartoon-illustration-free-vector.jpg",
    },
    {
      Heading: "Fastest Delivery",
      subHeading: "You can order from app or website",
      img: "https://t4.ftcdn.net/jpg/03/32/79/91/360_F_332799148_55PKYZ6OkLWfuQTTZ0jeD8gzNnweZ0mU.jpg",
    },
    {
      Heading: "Best Quality",
      subHeading: "You can order from app or website",
      img: "https://static.vecteezy.com/system/resources/previews/004/984/836/original/fast-food-delivery-app-flat-concept-illustration-vector.jpg",
    },
  ];

  return (
    <>
      <div className="firstContainer  bg-yellow-50 ">
        <div className="LandingHeading">
          <div className="cirleDesigns">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
          <div>
            <h1 className="text-2xl mb-8 mt-2  ">
              Experience Flavor Around You with
              <span className="foodHeading"> CraveBites </span>
            </h1>
            <h1></h1>

            <Ratings />
            <p>
              Welcome to CraveBites! At CraveBites, we believe that food is not
              just about sustenance but an experience to be savored and enjoyed.
              Our mission is to bring the world’s flavors right to your doorstep
              with just a few clicks. Whether you're craving comfort food,
              international cuisine, or something sweet, we've got you covered.
            </p>
          </div>
        </div>
        <div className="LandingImg">
          <img src={img1} alt="" />
          
          <div className="cirleDesigns">
            <div className="circle3"></div>
            <div className="circle2"></div>
            <div className="circle1"></div>
          </div>
        </div>
      </div>

      <LandingPage2 />
      <div
        className="secondContainer flex h-96 bg-yellow-50
      "
      >
        <h1 className="text-xl font-bold">How it works</h1>
        <h1 className="text-yellow-300 text-2xl font-bold">What We Serve</h1>
        <p>
          Product Quality is Out Priority,And Always Guarantees Freshness and
          safety Until it is in your hands.
        </p>
      </div>

      <div className="landingCard">
        {divItem.map((element, index) => {
          return (
            <>
              <div className="innerLandingCard ">
                <img src={element.img} alt="img" />
                <h3 className="text-xl">{element.Heading}</h3>
                <p>{element.subHeading}</p>
              </div>
            </>
          );
        })}
      </div>
      <Footer2 />
    </>
  );
}

export default LandingPage;

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import aboutUsContent from "../content/aboutUsContent";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";


function About() {

  
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative top-10 p-10 bg-yellow-50" >
      
        <div className="bg-white dark:bg-gray-900 p-5 ">
  
          {aboutUsContent.map((element, index) => (
            <div key={index} className="my-4"   >
              <element.type id={element.idName} className={element.class}>
              
                {element.text}

              </element.type>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;

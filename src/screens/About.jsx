import React from "react";
import Navbar from "../components/Navbar";
import aboutUsContent from "../content/aboutUsContent";
import Footer from "../components/Footer";


function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="about p-6 bg-gray-100 relative top-10 " >
      
        <div className="max-w-4xl mx-auto">
  
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

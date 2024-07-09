import React from "react";
import Navbar from "../components/Navbar";
import aboutUsContent from "../content/aboutUsContent";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      
      <div className="about">
        {aboutUsContent.map((element, index, arr) => {
          return (
            <>
              <element.type className={element.class}>{element.text}</element.type>
            </>
          );
        })}
      </div>
    
    </>
  );
}

export default About;

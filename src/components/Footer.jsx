import React from "react";

function Footer() {
  const footerContent = [
    { name: "Company", link: null, class: "policy  text-white " },
    { name: "About us", link: '/aboutUs' ,class: "text-white "},
    { name: "Career", link: 'null' ,class: "text-white "},
    { name: "How it works", link: 'null' ,class: "text-white "},
  ];
  const FooterContent2 = [
    { name: "Policy", link: null, class: "policy text-white" },
    { name: "FAQ", link: null ,class: "text-white"},
    { name: "Privacy", link: null ,class: "text-white"},
    { name: "Shipping", link: null ,class: "text-white"},
  ];

  return (
    <>
      <div className="footerAll flex-wrap bg-black">
        <div className="FooterAddress text-white">
          <h4>CraveBites</h4>
          
          <p>Haryana India</p>
          <p>
          <i className="fa-brands m-2 fa-facebook"></i>
          <i className="fa-brands m-2 fa-instagram"></i>
          <i className="fa-brands m-2 fa-x-twitter"></i>
          </p>
        </div>

        <div className="FooterCompany">
          {footerContent.map((element, index) => {
            return (
              <>
                <ul>
                  <li>
                    <a className={element.class} href={element.link}>
                      {element.name}
                    </a>
                  </li>
                </ul>
              </>
            );
          })}
        </div>
        <div className="FooterPolicy">
          {FooterContent2.map((element) => {
            return (
              <>
                <ul>
                  <li>
                    <a className={element.class} href="">
                      {element.name}
                    </a>
                  </li>
                </ul>
              </>
            );
          })}
        </div>
        <div className="FooterGetInTouch text-white">
          <h4>Get In Touch</h4>
          <p>01732 22126</p>
          <p>craveBites@gmail.com</p>
        </div>
      </div>
      <div className="footerEnd bg-slate-900 text-slate-50">
        <p>&copy; 2024 created and design by Nitin Sehgal</p>
      </div>
    </>
  );
}

export default Footer;

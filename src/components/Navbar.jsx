import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Navbar as FlowbiteNavbar } from "flowbite-react";
import SideWindow from "./SideWindow";
import Modal from "./Modal";

import Badges from "./Badges";
import { cartDataContext } from "../utils/contextApi";
import Location from "./Location";

function Navbar(props) {
  
  const [openSider, setOpenSider] = useState(false);
  const [modal, setModal] = useState(false);

  const anchorNames = [
    { name: "Home", link: "/home", class: "navLink text-white" },
    { name: "Menu", link: "/menu", class: "menuNav navLink text-yellow-300 " },
    { name: "My orders", link: "/my-orders", class: "navLink text-white " },
    { name: "About", link: "/aboutus", class: "navLink text-white" },
  ];

  const handleOpenSider = () => {
    setOpenSider(true);
  };

  console.log(openSider, "OPEN SIDER");
  const logout = () => {
    // setModal((modal) => !!modal);
    
    setModal(!modal);
   

  };

  const cartContext = useContext(cartDataContext);
console.log(cartContext,'iam card context');
 
// const badgeObjects = cartContext.filter(item => item.badgeNumber !== undefined);
cartContext?.filter((e)=>{
console.log(e?.badgeNumber,'iam');
})



return (
  <>
      <div className="NAVBAR w-full justify-center z-10   flex">
        <FlowbiteNavbar
          fluid
          rounded
          className="bg-slate-950 text-white rounded-none rounded-xl w-11/12 rounded-t-none fixed z-10 "
        >
          <FlowbiteNavbar.Brand as={Link} to="/home">
            <span className="mr-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
              CraveBites
            </span>
            <i className="text-white text-xl fa-solid fa-utensils text-yellow-300"></i>
          </FlowbiteNavbar.Brand>
         
          <SideWindow
                show={
                  <Badges
                    badgeContent={
                      cartContext !== undefined ? cartContext.length : 0
                    }
                    cartData={cartContext}
                  />
                }
              />
               <FlowbiteNavbar.Toggle className="text-white bg-black hover:text-black" />
          <FlowbiteNavbar.Collapse>
            <Location  cityName={<i className="text-blue-500 fa-solid fa-location-dot"></i>}/>
            
            {anchorNames.map((element, index) => (
              <Link
                key={index}
                as={Link}
                to={element.link}
                className={element.class}
              >
                {element.name}
              </Link>
            ))}
            <div className=" flex justify-around w-40">
              {/* <button onClick={handleOpenSider} className="mr-3">
            <Badges badgeContent={1} onClick={handleOpenSider}/>
              

              </button> */}
            



              <button onClick={logout}>
                <i className="text-white fa-solid fa-right-from-bracket"></i>
              </button>

              {modal && <Modal setIsUserLogin={props?.setIsUserLogin} />}
            </div>
          </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
      </div>
    </>
  );
}

export default Navbar;

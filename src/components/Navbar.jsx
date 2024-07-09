import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Navbar as FlowbiteNavbar } from "flowbite-react";
import SideWindow from "./SideWindow";
import Modal from "./Modal";

import Badges from "./Badges";
import { data } from "./Card";

function Navbar(props) {
  const cartData = useContext(data);
  console.log(cartData, "data from navabr");

  const [openSider, setOpenSider] = useState(false);
  const [modal, setModal] = useState(false);

  const anchorNames = [
    { name: "Home", link: "/home", class: "navLink" },
    { name: "My orders", link: "/my-orders", class: "navLink" },
    { name: "About", link: "/aboutus", class: "navLink" },
    { name: "Menu", link: "/menu", class: "menuNav navLink" },
  ];

  const handleOpenSider = () => {
    setOpenSider(true);
  };

  console.log(openSider, "OPEN SIDER");
  const logout = () => {
    setModal(true);
  };

  return (
    <>
      <FlowbiteNavbar
        fluid
        rounded
        className="bg-slate-950 text-white rounded-none "
      >
        <FlowbiteNavbar.Brand as={Link} to="/home">
          <span className="mr-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CraveBites
          </span>
          <i className="text-white text-xl fa-solid fa-utensils"></i>
        </FlowbiteNavbar.Brand>
        <FlowbiteNavbar.Toggle className="text-white bg-black hover:text-black" />
        <FlowbiteNavbar.Collapse>
          {anchorNames.map((element, index) => (
            <FlowbiteNavbar.Link
              key={index}
              as={Link}
              to={element.link}
              className="text-white hover:text-white"
            >
              {element.name}
            </FlowbiteNavbar.Link>
          ))}
          <div className=" flex items-center">
            <button onClick={handleOpenSider} className="mr-3"></button>

           {<SideWindow show="cart" cartData={cartData} />}
            <button onClick={logout}>
              <i className="text-white fa-solid fa-right-from-bracket"></i>
            </button>
            {modal && <Modal />}
          </div>
        </FlowbiteNavbar.Collapse>
      </FlowbiteNavbar>
    </>
  );
}

export default Navbar;

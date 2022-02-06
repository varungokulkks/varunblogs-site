import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import "./NavBar.scss";
function NavBar() {
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark" className="navbars">
        <div className="mailnav">
          <div className="title"> Varun's Blog</div>
          <div className="profile">
            <IconContext.Provider value={{ size: "3em" }}>
              <CgProfile title="profilenname" className="icon" />
              <RiLogoutBoxRLine className="icon" />
            </IconContext.Provider>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;

import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../logo.jpeg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/"><img src={logo} width="170" height="180"/></NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Your Feed
          </NavLink>
          <NavLink to="/resources" activeStyle>
            Learn More and Get Help
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Sign In
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;

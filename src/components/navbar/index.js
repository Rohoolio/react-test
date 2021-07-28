import React from "react";
import {
    Nav,
    NavLogo,
    Bars,
    NavMenu
} from "./NavbarElements";
import { A } from 'hookrouter';

export const Navbar = () => {
  return (
      <>
         <Nav>
          <NavLogo to="/">
              Logo
          </NavLogo>
          <Bars />

          <NavMenu>
              <A href="/about">About</A>
              <A href="/contact">Contact</A>
              <A href="/users">users</A>
          </NavMenu>
         </Nav>
      </>
  );
};

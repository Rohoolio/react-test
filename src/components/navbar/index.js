import React from "react";
import {
    Nav,
    NavLogo,
    Bars,
    NavMenu
} from "./NavbarElements";
import { useRoutes, A } from 'hookrouter';
import routes from '../../router';

export const Navbar = () => {

const routeResult = useRoutes(routes)

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
              <A href="/user">Users</A>
          </NavMenu>
         </Nav>
         {routeResult}
      </>
  );
};

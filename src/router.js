import React from "react";
import { Contact }from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Users } from './components/pages/Users';

const routes = {
  "/user": () => <Users />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};

export default routes;

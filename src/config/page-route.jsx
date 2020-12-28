import React from "react";
import { Redirect } from "react-router";

import Home from "./../pages/home.jsx";
import About from "./../pages/about.jsx";
import Contact from "./../pages/contact.jsx";
import Login from "./../pages/login.jsx";
import SignUp from "../pages/signup.jsx";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: () => <Home />,
  },
  {
    path: "/about",
    component: () => <About />,
  },
  {
    path: "/contact",
    component: () => <Contact />,
  },
  {
    path: "/login",
    component: () => <Login />,
  },
  {
    path: "/signup",
    component: () => <SignUp />,
  },
];

export default routes;

import React, { useState } from "react";
import { Link, HashRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/components/Home.scss";
import Hero from "./Hero";
import Header from "./Header";

import Register from "./Register";
import Launcher from "./Launcher";
import barrainclinada from "../assets/static/barra.png";
import ciudad from "../assets/static/Recurso2.png";
import nube from "../assets/static/Recurso8.png";
import arbol1 from "../assets/static/Recurso4.png";
import carrito from "../assets/static/carrito3.png";

const Home = () => {
  return (
    <Launcher />
  );
};
export default Home;
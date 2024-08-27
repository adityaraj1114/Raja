import React from "react";
import "./Homepage.css";
import { Container1 } from "../Components/Container1";
import { About } from "./About";
import { Contact } from "./Contact";
import { Social } from "./Social";
import { Time } from "../Components/Time";
import { Share } from "../Components/Share";
import { Products } from "./Products";
import { Scanner } from "../Scanner/Scanner";
import { Navbar } from "../Components/Navbar";
// import { ScannerPage } from "../Scanner/ScannerPage";

export const Homepage = () => {
  return (
    <div className="homePage">
      
      <div className="backgroundImage"></div>

      <Container1 />

      <About />

      <Contact />

      <Products />

      <Share />

      <Time />

      <Social />

      {/* <Time /> */}

      <Scanner />

      {/* <ScannerPage /> */}
    </div>
  );
};

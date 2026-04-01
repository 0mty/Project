import { useState } from "react";
import "./App.css";
import Web1 from "./components/Web1";
import NavBar from "./components1/NavBar"
import Banner from "./components1/Banner"
import Courselist from "./components1/Courselist"
import WhyChooseUS from "./components1/WhyChooseUS"
import Footer from "./components1/Footer"

function App() {
  return (
    <>
    {/* <Web1/> */}
      <NavBar/>
      <Banner/>
      <Courselist/>
      <WhyChooseUS/>
      <Footer/>
    </>
  );
}

export default App;

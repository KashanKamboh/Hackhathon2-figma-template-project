
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brand from "./Brand";
import Ceremics from "./components/Ceremics";
import Benefit from "./components/Benefit";
import Touch from "./components/Touch";
import FullHeader from "./components/FullHeader";
import Footer from "./components/Footer";
import Popular from "./components/Popular";


export default function Home(){
  return(
    <div>
      <FullHeader/>
      <Header/>
    
      <Hero/>
      <Brand/>
      <Ceremics/>
      <Popular/>
      <Benefit/>
      <Touch/>
      <Footer/>
    </div>
  )
}
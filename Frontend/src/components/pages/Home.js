import React from "react";
import Slider from "../inc/Slider";
import Cards from "./Cards";
import Aboutus from "./About";
// import { Link } from "react-router-dom";
import CalculatorPage from "./CalculatorPage";
// import Homeloan from "./Homeloan";
// import Form from "./Form";

function Home() {
  return (
    <div>
      {/* ..............Sliders.................. */}
      <Slider />

      {/* ..............Cards.................. */}
      <Cards />

      <hr className="featurette-divider" />

      {/* ..............Calculator Page.................. */}
      <CalculatorPage />

      <hr className="featurette-divider" />
      {/* ..............About Us.................. */}
      <Aboutus />

      {/* <Form /> */}
    </div>
  );
}

export default Home;

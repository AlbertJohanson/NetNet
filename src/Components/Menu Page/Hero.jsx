/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";



/* Style */
import "../../assets/style/Components/Hero.scss";
import Description from "./Description/Description";
import Header from "./Header/Header";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__top--gradient"></div>
        <Header />
        <Description />
        <div className="hero__bottom--gradient"></div>
      </div>
    </>
  );
}

export default Hero;

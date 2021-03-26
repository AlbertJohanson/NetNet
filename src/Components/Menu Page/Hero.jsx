/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";



/* Style */
import "../../assets/style/Components/Hero.scss";
import Description from "./Description/Description";
import Header from "./Header/Header";
function Hero() {
  return (
    <>
      <div className="hero" style={{
            background: `url(https://firebasestorage.googleapis.com/v0/b/netnet-f3235.appspot.com/o/bg-image.svg?alt=media&token=ec03deb1-305a-470e-b090-ab6de1832471) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="hero__top--gradient"></div>
        <Header />
        <Description />
        <div className="hero__bottom--gradient"></div>
      </div>
    </>
  );
}

export default Hero;

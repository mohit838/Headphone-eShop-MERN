import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>The best headphone are available here!</p>
      </div>
      <div className="products-container">Products</div>
      <FooterBanner />
    </>
  );
};

export default Home;

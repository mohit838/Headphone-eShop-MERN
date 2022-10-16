import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Test</p>
        <h3>Head Test</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Button</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

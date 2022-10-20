import React from "react";
import { client, urlFor } from "./../../lib/client";

const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  // For Product
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // For Banner
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default ProductDetails;

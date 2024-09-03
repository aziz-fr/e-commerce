import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Men's Classic Oxford Shirt - The classic Oxford shirt is a timeless
          piece that every man needs in his wardrobe. Our version is made with
          premium cotton that is both soft and breathable, making it perfect for
          any occasion. It comes in a variety of colors, so you can choose the
          one that suits your style.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

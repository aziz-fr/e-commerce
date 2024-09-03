import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Product = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  // console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategories(
      isChecked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    );
  };

  // console.log(selectedSubCategories);

  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="input-item" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort by</h2>
          <div className="input-item">
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              id="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="cat-img"
          src="https://images.pexels.com/photos/6764692/pexels-photo-6764692.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCategories={selectedSubCategories}
        />
      </div>
    </div>
  );
};

export default Product;

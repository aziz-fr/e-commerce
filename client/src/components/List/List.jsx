import React from "react";
import "./List.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch";

// const productsData = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     img2: "https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     title: "Long SLeeve Shirt",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/7691068/pexels-photo-7691068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     img2: "https://images.pexels.com/photos/6995884/pexels-photo-6995884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     title: "Coat",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/7206287/pexels-photo-7206287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     img2: "https://images.pexels.com/photos/5325561/pexels-photo-5325561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     title: "Jacket",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 4,
//     img: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     img2: "https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     title: "Pants",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
// ];

const List = ({ subCategories, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;

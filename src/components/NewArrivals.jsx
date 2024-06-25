import React from "react";
import { Link } from "react-router-dom";
import "./NewArrivals.css";

const items = [
  {
    id: 1,
    title: "Linen-Cotton Shirt",
    description: "FAMILY MATCHING",
    price: "$49.95",
    salePrice: "$39.00",
    image: "/src/images/imag1.jpg",
    colors: [
      "khaki",
      "black floral",
      "optic white",
      "smoked paprika",
      "coral floral",
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    title: "Linen-Cotton '90s Loose Trousers",
    description: "SELLING FAST",
    price: "$69.95",
    salePrice: "$55.00",
    image: "src/images/imag2.jpg",
    colors: ["black", "oatmeal"],
    sizes: ["S", "M", "L"],
  },
];

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h1>NEW ARRIVALS</h1>
      <div className="item-list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
            <div className="colors">
              {item.colors.map((color) => (
                <span key={color} className="color-swatch">
                  {color}
                </span>
              ))}
            </div>
            <p className="price">
              <span className="original-price">{item.price}</span>{" "}
              <span className="sale-price">{item.salePrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

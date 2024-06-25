import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./ProductDetails.css";
import toastr from "toastr";

const products = [
  {
    id: 1,
    title: "Linen-Cotton Shirt",
    description: "FAMILY MATCHING",
    price: 49.95,
    salePrice: 39.0,
    image: "/src/images/imag1.jpg",
    colors: ["black floral", "optic white"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    title: "Linen-Cotton '90s Loose Trousers",
    description: "SELLING FAST",
    price: 69.95,
    salePrice: 55.0,
    image: "/src/images/imag2.jpg",
    colors: ["black", "oatmeal"],
    sizes: ["S", "M", "L"],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toastr.warning("Please select a size and color before adding to cart.");
      return;
    }

    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addToCart(productToAdd);
    toastr.success(`${product.title} added to cart!`);
  };

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p className="price">
        <span className="original-price">${product.price.toFixed(2)}</span>{" "}
        <span className="sale-price">${product.salePrice.toFixed(2)}</span>
      </p>
      <div className="sizes">
        <h3>Sizes</h3>
        {product.sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="colors">
        <h3>Colors</h3>
        {product.colors.map((color) => (
          <button
            key={color}
            className={`color-button ${
              selectedColor === color ? "selected" : ""
            }`}
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>
      <button className="add-to-bag" onClick={handleAddToCart}>
        Add to Bag
      </button>
      <Link to="/cart" className="view-cart-link">
        View Cart
      </Link>
    </div>
  );
};

export default ProductDetails;

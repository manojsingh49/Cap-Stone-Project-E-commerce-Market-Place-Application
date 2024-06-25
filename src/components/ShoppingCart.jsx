import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const price =
      typeof item.salePrice === "string"
        ? parseFloat(item.salePrice.replace("$", ""))
        : item.salePrice;
    return sum + price;
  }, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div>
                <h3>{item.title}</h3>
                <p>
                  Price: $
                  {typeof item.salePrice === "number"
                    ? item.salePrice.toFixed(2)
                    : item.salePrice}
                </p>
                <button
                  onClick={() => removeItemFromCart(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <div className="cart-buttons">
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

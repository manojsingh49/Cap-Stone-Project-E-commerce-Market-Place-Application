import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const total = cartItems.reduce((sum, item) => sum + item.salePrice, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      totalAmount: total,
      orderStatus: "Pending",
      userId: 1,
      createdAt: new Date().toISOString(),
      shippingInfo: {
        fullName: shippingInfo.fullName,
        address: shippingInfo.address,
        city: shippingInfo.city,
        zipCode: shippingInfo.zipCode,
        country: shippingInfo.country,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/orders/create",
        orderData
      );
      console.log("Order created:", response.data);
      toastr.success("Order placed successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating order:", error);
      toastr.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <span>{item.title}</span>
              <span>${item.salePrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
        <div className="total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h3>Shipping Information</h3>
        <input
          type="text"
          name="fullName"
          value={shippingInfo.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="address"
          value={shippingInfo.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={shippingInfo.city}
          onChange={handleInputChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="zipCode"
          value={shippingInfo.zipCode}
          onChange={handleInputChange}
          placeholder="Zip Code"
          required
        />
        <input
          type="text"
          name="country"
          value={shippingInfo.country}
          onChange={handleInputChange}
          placeholder="Country"
          required
        />
        <h3>Payment Information</h3>
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentChange}
          placeholder="Card Number"
          required
        />
        <input
          type="text"
          name="expiryDate"
          value={paymentInfo.expiryDate}
          onChange={handlePaymentChange}
          placeholder="Expiry Date (MM/YY)"
          required
        />
        <input
          type="text"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handlePaymentChange}
          placeholder="CVV"
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import "../style.css";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/create",
        formData
      );
      if (response.status === 200) {
        setMessage("Registration successful!");
      }
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Register</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Registration;

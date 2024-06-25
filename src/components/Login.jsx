import React, { useState } from "react";
import axios from "axios";
import "../style.css";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!formData.userName || !formData.password) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );
      console.log("Response status:", response.status);
      if (response.status === 200) {
        setLoggedIn(true);
        setError("");
        setFormData({ userName: "", password: "" });
      } else if (response.status === 401) {
        setError("Wrong username or password. Please try again.");
      } else {
        setError("Login failed. Please try again later.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        {loggedIn ? (
          <div className="success-message">Login successful!</div>
        ) : (
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
            <div className="button-container">
              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

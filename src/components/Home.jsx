import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../images/image1.jpg";
import secondImage from "../images/image2.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="image-container">
        <img src={bannerImage} alt="Banner" className="home-image" />
        <img src={secondImage} alt="Second Image" className="home-image" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Footerstyle.css";

const Footer = () => {
  return (
    <div>
      <div className="foot">
        <h2>해당 카페 이름</h2>
        <a href="/cafe">해당 카페 주소</a>
      </div>
      <div className="home-link">
          <a href="">JICAFE</a>
      </div>
    </div>
  );
};

export default Footer;

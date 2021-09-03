import React from "react";
import "./Footerstyle.css";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="inner-footer">
        <div className="foot">
          <h2>해당 카페 이름</h2>
          <div>해당 카페 주소</div>
        </div>
        <div className="home-link">
          <div >© JICAFE</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

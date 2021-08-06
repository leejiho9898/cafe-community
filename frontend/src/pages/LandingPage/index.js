import React, { useEffect, useState } from "react";
import "./LandingPageStyle.css";
import LandingHeader from "layout/LandingHeader";
import Footer from "layout/Footer";
import { Link } from "react-router-dom";
import client from "api/client";

const LandingPage = () => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await client.get("/cafe/readAllCafeList");
      setCafes(response.data.cafes);
    };
    getData();
  }, []);
  return (
    <>
      <LandingHeader />
      <div id="land">
        <div id="contents"></div>
        <div>
          <div className="cafe-tit">
            <ul>
              <li className="active">
                내카페
                <span className="num">{cafes.length}</span>
              </li>
              <li>
                <Link to="/createcafe">카페 만들기</Link>
              </li>
            </ul>
          </div>
          <div id="cafe-container">
            {cafes.map((cafe, index) => (
              <div className="cafe-list">
                <div className="cafe-object">
                  <div className="cafe-thumb">
                    {cafe.thumbnail && (
                      <img
                        src={`http://localhost:4000/${cafe.thumbnail}`}
                        alt=""
                      />
                    )}
                  </div>

                  <a href={`/cafeMain/${cafe.route}`}>{cafe.name}</a>
                </div>
                <div className="cafe-recent">
                  <ul>
                    <li>최근에 올라온글</li>
                    <li>최근에 올라온글</li>
                    <li>최근에 올라온글</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

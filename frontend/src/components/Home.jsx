import React, { useEffect } from "react";
import HomeProducts from "./HomeProducts";

import Footer from "./Footer";

import Navbar from "./navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img
            src="https://img.freepik.com/free-photo/surprised-curly-woman-beret-looks-left-charming-lady-pink-sweater-sunglasses-green-skirt-holds-grey-handbag_197531-29645.jpg?w=740&t=st=1685271771~exp=1685272371~hmac=9d8112e84c4e8465b739afcb5514d271b0a6088d13997256dbf9304fee672a64"
            className="card-img"
            alt="BackGround"
            height="550px"
          ></img>
          <div className="card-img-overlay d-flex flex-column  justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        <HomeProducts />
      </div>
      <Footer />
    </>
  );
}

export default Home;

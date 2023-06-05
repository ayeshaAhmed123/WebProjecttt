import React, { useState } from "react";
import "../App.css";
function SellerSidebar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{ width: "280px", height: "100vh", backgroundColor: "#9c86b9" }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i
          className="fa fa-bars me-1"
          aria-hidden="true"
          style={{ fontSize: "25px" }}
        ></i>
        <span className="fs-3">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${
              activeItem === "home" ? "active" : "nav-link text-white"
            }`}
            onClick={() => handleItemClick("home")}
            style={{
              backgroundColor: activeItem === "home" ? "purple" : "",
              color: activeItem === "home" ? "white" : "",
            }}
          >
            <i
              className="fa fa-home me-3"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
            <span className="fs-5">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeItem === "products" ? "active" : "nav-link text-white"
            }`}
            onClick={() => handleItemClick("products")}
            style={{
              backgroundColor: activeItem === "products" ? "purple" : "",
              color: activeItem === "products" ? "white" : "",
            }}
          >
            <i
              className="fa fa-th-large me-3"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
            <span className="fs-5">Products</span>
          </a>
          <ul className="sub-menu list">
            <li className="li">
              <a href="#" className="sub-menu-item fs-6">
                Sub Item 1
              </a>
            </li>
            <hr />
            <li className="li">
              <a href="#" className="sub-menu-item fs-6">
                Sub Item 2
              </a>
            </li>
            <hr />
            <li className="li">
              <a href="#" className="sub-menu-item fs-6">
                Sub Item 3
              </a>
            </li>
            <hr />
          </ul>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeItem === "orders" ? "active" : "nav-link text-white"
            }`}
            onClick={() => handleItemClick("orders")}
            style={{
              backgroundColor: activeItem === "orders" ? "purple" : "",
              color: activeItem === "orders" ? "white" : "",
            }}
          >
            <i
              className="fa fa-table me-3"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
            <span className="fs-5">Orders</span>
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown"></div>
    </div>
  );
}

export default SellerSidebar;

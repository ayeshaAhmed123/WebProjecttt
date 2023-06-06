import React, { useState, useEffect } from "react";
import "../App.css";
import SellerProduct from "./SellerProduct";
import AddProduct from "./addProduct";
import DeleteProduct from "./DelettProduct";
import UpdateProduct from "./UpdateProduct";
function SellerSidebar() {
  const [activeItem, setActiveItem] = useState("home");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [seller, setSeller] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
  }, []);
  const handleItemClick = (item) => {
    if (item === "products") {
      setShowSubMenu(!showSubMenu);
    } else {
      setActiveItem(item);
    }
  };

  return (
    <div className="d-flex justify-content-center">
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
            {showSubMenu && (
              <ul className="sub-menu list">
                <li
                  className="li"
                  style={{
                    backgroundColor: activeItem === "viewP" ? "purple" : "",
                    color: activeItem === "viewP" ? "white" : "",
                  }}
                >
                  <a
                    href="#"
                    className={`sub-menu-item fs-6 ${
                      activeItem === "viewP" ? "active" : "nav-link text-white"
                    }`}
                    onClick={() => handleItemClick("viewP")}
                  >
                    View Product
                  </a>
                </li>
                <hr />
                <li
                  className="li"
                  style={{
                    backgroundColor: activeItem === "addP" ? "purple" : "",
                    color: activeItem === "addP" ? "white" : "",
                  }}
                >
                  <a
                    href="#"
                    className={`sub-menu-item fs-6 ${
                      activeItem === "addP" ? "active" : "nav-link text-white"
                    }`}
                    onClick={() => handleItemClick("addP")}
                  >
                    Add Product
                  </a>
                </li>
                <hr />
                <li
                  className="li"
                  style={{
                    backgroundColor: activeItem === "updP" ? "purple" : "",
                    color: activeItem === "updP" ? "white" : "",
                  }}
                >
                  <a
                    href="#"
                    className={`sub-menu-item fs-6 ${
                      activeItem === "updP" ? "active" : "nav-link text-white"
                    }`}
                    onClick={() => handleItemClick("updP")}
                  >
                    Update Product
                  </a>
                </li>
                <hr />
                <li
                  className="li"
                  style={{
                    backgroundColor: activeItem === "delP" ? "purple" : "",
                    color: activeItem === "delP" ? "white" : "",
                  }}
                >
                  <a
                    href="#"
                    className={`sub-menu-item fs-6 ${
                      activeItem === "delP" ? "active" : "nav-link text-white"
                    }`}
                    onClick={() => handleItemClick("delP")}
                  >
                    Delete Product
                  </a>
                </li>
                <hr />
              </ul>
            )}
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
      {activeItem === "home" && (
        <div className="container fs-3 py-5">
          <h1 className="text-center">Welcome {seller.name}</h1>
          <div class="row">
            <div className="col-md-8 offset-md-2">
              <p className="lead text-center">
                We are thrilled to have you join our platform as a valued
                seller. Your presence is vital to delivering quality products
                and exceptional service to our customers. Our platform is
                designed to support your business growth and success.
              </p>
              <p className="fs-5">
                You'll find a range of powerful tools and resources to simplify
                your selling experience. Manage your inventory, track orders,
                and connect with customers effortlessly. Our dedicated support
                team is available to assist you promptly.
              </p>
              <p className="fs-5">
                Explore our seller dashboard, product management tools, and
                order tracking system. These features provide real-time insights
                and streamline your operations. Your feedback is valuable in
                enhancing your selling experience.
              </p>
              <p className="fs-5">
                Thank you for choosing our platform as your marketplace. Let's
                build a successful partnership and create exceptional
                experiences for our customers.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeItem === "viewP" && (
        <div className="container">
          <SellerProduct />
        </div>
      )}
      {activeItem === "updP" && (
        <div className="container">
          <UpdateProduct />
        </div>
      )}
      {activeItem === "delP" && (
        <div className="container">
          <DeleteProduct />
        </div>
      )}
      {activeItem === "addP" && (
        <div className="container">
          <AddProduct />
        </div>
      )}
    </div>
  );
}

export default SellerSidebar;

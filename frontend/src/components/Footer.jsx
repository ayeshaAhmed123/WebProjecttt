import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light text-center py-4"
      style={{ backgroundColor: "#9c86b9" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Home &amp; Kitchen</li>
              <li>Books</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-2">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

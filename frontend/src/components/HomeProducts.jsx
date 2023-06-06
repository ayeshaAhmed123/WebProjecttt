import React from "react";
import ShowProducts from "./showProduct";

function HomeProducts() {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-2">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
      </div>
      <ShowProducts />
    </div>
  );
}

export default HomeProducts;

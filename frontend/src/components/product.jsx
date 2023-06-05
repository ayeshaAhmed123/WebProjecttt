import React from "react";

function Product({ product }) {
  return (
    <div className="col-md-3 mb-4" key={product._id}>
      <div className="card h-100 text-center p-4">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          height="280px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">
            {product.name.substring(0, 12)}...
          </h5>
          <p className="card-text lead fw-bold">{product.price} Rs.</p>
          <p className="card-text">{product.description} </p>
          <a href="#" className="btn btn-outline-dark">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;

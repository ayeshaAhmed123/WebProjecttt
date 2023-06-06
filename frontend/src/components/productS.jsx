import React from "react";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchSellerProducts } from "../reduxStores/actions/productAction";
import {
  deleteProduct,
  updateProduct,
} from "../reduxStores/actions/productAction";
function ProductS({ products, product, eve, deleteProduct, updateProduct }) {
  const [token, setToken] = useState("");
  const [seller, setSeller] = useState({});
  const [showForm, setShowForm] = useState(false);
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef(0);
  const stockQuantityRef = useRef(0);
  const imageRef = useRef("");
  const categoryRef = useRef("");

  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
  }, [token, deleteProduct]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const stockQuantity = stockQuantityRef.current.value;
    const image = imageRef.current.value;
    const category = categoryRef.current.value;

    const newProduct = {
      name: name,
      description: description,
      price: price,
      stock_quantity: stockQuantity,
      image: image,
      category: category,
    };
    await updateProduct(token, product._id, newProduct);
    setShowForm(false);
  };

  const handleDelete = () => {
    deleteProduct(token, product._id);
  };
  return (
    <>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="container mb-5  border rounded border-secondary p-5"
        >
          <div className="form-group m-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              ref={nameRef}
              defaultValue={product.name}
              required
            />
          </div>
          <div className="form-group m-1">
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              className="form-control "
              id="description"
              ref={descriptionRef}
              defaultValue={product.description}
              required
            />
          </div>
          <div className="form-group me-1">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              ref={priceRef}
              defaultValue={product.price}
              required
            />
          </div>
          <div className="form-group m-1">
            <label htmlFor="stock_quantity">Stock Quantity:</label>
            <input
              type="number"
              className="form-control "
              id="stock_quantity"
              ref={stockQuantityRef}
              defaultValue={product.stock_quantity}
              required
            />
          </div>
          <div className="form-group m-1">
            <label htmlFor="image">Image:</label>
            <input
              type="url"
              className="form-control"
              id="image"
              ref={imageRef}
              defaultValue={product.image}
              required
            />
          </div>
          <div className="form-group m-1">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className="form-control "
              id="category"
              ref={categoryRef}
              defaultValue={product.category}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary m-1">
            Submit
          </button>
        </form>
      )}
      <div className="col-md-4 mb-4" key={product._id}>
        <div className="card h-100 p-4">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            height="280px"
          />
          <div className="card-body">
            <h5 className="card-title mb-3">
              {product.name.substring(0, 12)}...
            </h5>
            <p className="card-text">
              <b>Price:</b> {product.price} Rs.
            </p>
            <p className="card-text ">
              <b>Quantity:</b> {product.stock_quantity}
            </p>
            <p className="card-text">
              <b> Category: </b> {product.category}
            </p>
            <p className="card-text">
              <b>Description:</b>
              {product.description}
            </p>
            {eve === "Edit" && (
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-success me-2"
                  style={{ width: "80px" }}
                  onClick={handleShowForm}
                >
                  Edit
                </a>
              </div>
            )}
            {eve === "delete" && (
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-danger me-2"
                  style={{ width: "80px" }}
                  onClick={handleDelete}
                >
                  Delete
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  products: state.productStore.products,
});

const mapDispatchToProps = {
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductS);

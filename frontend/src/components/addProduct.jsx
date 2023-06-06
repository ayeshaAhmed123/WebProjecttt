import React, { useState, useEffect } from "react";
import Img1 from "../assets/LOGOOO.jpg";
import { addProduct } from "../reduxStores/actions/productAction";
import { connect } from "react-redux";
import { useRef } from "react";
function AddProduct({ products, addProduct }) {
  const name1 = useRef();
  const description1 = useRef();
  const price1 = useRef();
  const stock_quantity1 = useRef();
  const image1 = useRef();
  const category1 = useRef();
  const [token, setToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    setToken(ttoken);
    console.log(token);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = name1.current.value;
    let description = description1.current.value;
    let price = price1.current.value;
    let stock_quantity = stock_quantity1.current.value;
    let image = image1.current.value;
    let category = category1.current.value;
    price = parseInt(price);
    stock_quantity = parseInt(stock_quantity);
    try {
      await addProduct(token, {
        name,
        description,
        price,
        stock_quantity,
        image,
        category,
      });
      setAlertMessage("Product added successfully");
      resetFields();
    } catch (error) {
      setAlertMessage("Failed to add product");
    }
  };

  const resetFields = () => {
    name1.current.value = "";
    description1.current.value = "";
    price1.current.value = "";
    stock_quantity1.current.value = "";
    image1.current.value = "";
    category1.current.value = "";
  };
  return (
    <div
      className="col-md-5 col-lg-8 d-flex align-items-center justify-content-center rounded border border-secondary"
      style={{
        marginLeft: "10rem",
        borderColor: "purple",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <div className="card-body p-3 p-lg-5 text-black mb-2">
        <img
          src={Img1}
          alt="here"
          height="185px "
          style={{ marginLeft: "10rem" }}
        />
        <form onSubmit={handleSubmit}>
          {alertMessage && (
            <div className="alert alert-success" role="alert">
              {alertMessage}
            </div>
          )}
          <h5 className="fw-normal mb-1 pb-3" style={{ letterSpacing: "1px" }}>
            Give product detail
          </h5>
          <div className="form-outline mb-4">
            <input
              ref={name1}
              type="text"
              id="name"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="name">
              Name
            </label>
          </div>

          <div className="form-outline mb-1">
            <input
              ref={price1}
              type="number"
              id="price"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="price">
              Price
            </label>
          </div>
          <div className="form-outline mb-1">
            <input
              ref={stock_quantity1}
              type="number"
              id="qty"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="qty">
              Stock Quantity
            </label>
          </div>
          <div className="form-outline mb-1">
            <input
              ref={image1}
              type="url"
              id="image"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="image">
              Image URL
            </label>
          </div>
          <div className="form-outline mb-1">
            <input
              ref={category1}
              type="text"
              id="cat"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="cat">
              Category
            </label>
          </div>
          <div className="form-outline mb-1">
            <textarea
              ref={description1}
              type="text"
              id="description"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="description">
              Description
            </label>
          </div>
          <div className="pt-1 mb-1">
            <button className="btn btn-dark btn-lg btn-block" type="submit">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.productStore.products,
});

const mapDispatchToProps = {
  addProduct: addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

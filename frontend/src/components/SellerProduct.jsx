import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import {
  fetchSellerProducts,
  fetchSellerProductByName,
  fetchSellerProductByCategory,
} from "../reduxStores/actions/productAction";
import ProductS from "./productS";

function SellerProduct({
  products,
  fetchSellerProducts,
  fetchSellerProductByName,
  fetchSellerProductByCategory,
}) {
  const [seller, setSeller] = useState({});
  const [token, setToken] = useState("");
  const [selected, setSelected] = useState("default");
  const searchVal = useRef("");

  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
    fetchSellerProducts(token, seller._id);
  }, [token]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const searchValue = searchVal.current.value;
      if (selected === "default") {
        fetchSellerProducts(token, seller._id);
      } else if (selected === "category") {
        fetchSellerProductByCategory(token, searchValue);
      } else if (selected === "name") {
        fetchSellerProductByName(token, searchValue);
      }
    }
  };

  return (
    <div className="container p-5">
      <p className="text-center fs-5"> YOUR PRODUCTS</p>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-8">
            <div className="input-group">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    backgroundColor: "rgba(231, 153, 231, 0.5)",
                    borderTopLeftRadius: "1.5rem",
                    borderBottomLeftRadius: "1.5rem",
                  }}
                >
                  <i
                    className="fa fa-search"
                    aria-hidden="true"
                    style={{
                      fontSize: "25px",
                      color: "purple",
                    }}
                  ></i>
                </span>
              </div>
              <input
                type="search"
                ref={searchVal}
                className="form-control"
                placeholder="Search Products"
                aria-label="Search"
                aria-describedby="basic-addon1"
                style={{
                  borderTopRightRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
                onKeyDown={handleSearch}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              name="Search"
              id="search"
              style={{ borderRadius: "1.5rem" }}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="default"> All </option>
              <option value="name"> Name </option>
              <option value="category"> Category </option>
            </select>
          </div>
        </div>
      </div>

      <div className="row p-3">
        {products.map((product) => (
          <ProductS product={product} eve="" key={product._id} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.productStore.products,
});

const mapDispatchToProps = {
  fetchSellerProducts: fetchSellerProducts,
  fetchSellerProductByCategory: fetchSellerProductByCategory,
  fetchSellerProductByName: fetchSellerProductByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerProduct);

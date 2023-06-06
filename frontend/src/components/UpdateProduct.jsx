import React from "react";
import { fetchSellerProducts } from "../reduxStores/actions/productAction";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductS from "./productS";

function UpdateProduct({ products, fetchSellerProducts }) {
  const [seller, setSeller] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
    fetchSellerProducts(token, seller._id);
  }, [products]);

  return (
    <div className="container">
      <h1 className="text-center fs-3 m-5">
        {" "}
        Select the product You want to Edit
      </h1>
      <div className="row p-3">
        {products.map((product) => (
          <ProductS product={product} eve="Edit" key={product._id} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);

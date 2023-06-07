import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { fetchSellerProducts } from "../reduxStores/actions/productAction";
import ProductO from "./ProductO";

function ShowProductOrder({ products, fetchSellerProducts }) {
  const [seller, setSeller] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
    fetchSellerProducts(token, seller._id);
  }, [token]);

  return (
    <div className="container p-5">
      <p className="text-center fs-5"> YOUR PRODUCTS</p>
      <div className="row p-3">
        {products.map((product) => (
          <ProductO product={product} eve="" key={product._id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowProductOrder);

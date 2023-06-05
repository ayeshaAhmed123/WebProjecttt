import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../reduxStores/actions/productAction";
import { findProductWithCategoryHome } from "../reduxStores/actions/productAction";
import Product from "./product";

function ShowProducts({
  products,
  fetchProducts,
  findProductWithCategoryHome,
}) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchProducts();

    let newArray = products.map((product) => product.category);
    console.log("newArray", newArray);
    const unique = [...new Set(newArray)];
    console.log("unique", unique);
    setCategories(unique);
    console.log("categories", categories);
  }, [fetchProducts]);

  useEffect(() => {
    if (selectedCategory === "All") {
      let newArray = products.map((product) => product.category);
      const unique = [...new Set(newArray)];
      setCategories(unique);
    }
  }, [products]);

  const searchByCategory = (category) => {
    if (category === "All") {
      fetchProducts();
      setSelectedCategory("");
    } else {
      findProductWithCategoryHome(category);
      setSelectedCategory(category);
    }
    console.log(products);
    console.log("Button clicked!");
  };

  return (
    <div>
      <div className="buttons d-flex justify-content-center mb-5 pb-4">
        <button
          className={`btn btn-outline-dark me-2 ${
            selectedCategory === "" ? "active" : ""
          }`}
          onClick={() => searchByCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            className={`btn btn-outline-dark me-2 ${
              selectedCategory === category ? "active" : ""
            }`}
            key={category}
            onClick={() => searchByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="row p-4">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productStore.products,
});

const mapDispatchToProps = {
  fetchProducts,
  findProductWithCategoryHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowProducts);

import React from "react";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchSellerProducts } from "../reduxStores/actions/productAction";
import axios from "axios";
function ProductO({ products, product }) {
  const [token, setToken] = useState("");
  const [seller, setSeller] = useState({});
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
  }, [token]);

  const handleOrder = async () => {
    console.log("Inside Product order handle");

    fetchSellerProducts(token, seller._id);

    const fetchData = async () => {
      try {
        const config = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:5005/order/getProduct/${product._id}`,
          config
        );
        setOrders(response.data.finalOrders);
        setOrderItems(response.data.orderItemsfinal);
        // Fetch customers for each order
        const customerPromises = response.data.finalOrders.map((order) =>
          axios.get(
            `http://localhost:5005/order/getCustomer/${order._id}`,
            config
          )
        );
        const customerResponses = await Promise.all(customerPromises);
        const customerData = customerResponses.map((response) => response.data);
        setCustomers(customerData);
        setShowOrders(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  let count = 0;
  let itemcount = 0;
  return (
    <>
      {showOrders && (
        <div className="container m-5">
          {orders.map((order) => (
            <div className="col-md-11 mb-4" key={order._id}>
              <div className="card h-100  p-2 ">
                <h4 className="card-title m-2"> Order {++count}</h4>
                <div className="d-flex justify-content-between  p-2">
                  <div className="container">
                    <p className="card-text">
                      <b>Customer Details:</b>
                    </p>
                    <p className="card-text">
                      Name:{" "}
                      {
                        customers.find((cust) => cust._id === order.customer_id)
                          ?.name
                      }
                    </p>
                    <p className="card-text">
                      Address:{" "}
                      {
                        customers.find((cust) => cust._id === order.customer_id)
                          ?.address
                      }
                    </p>
                    <p className="card-text">
                      Phone Number:{" "}
                      {
                        customers.find((cust) => cust._id === order.customer_id)
                          ?.phone
                      }
                    </p>
                  </div>
                  <div className="container">
                    <p className="card-text">
                      <b>Order Date And time:</b>
                    </p>
                    <p className="card-text">
                      Order Date: {order.order_date.split("T")[0]}
                    </p>
                    <p className="card-text">
                      Order Time:{" "}
                      {order.order_date.split("T")[1].substring(0, 8)}
                    </p>
                  </div>
                </div>
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItems.map((item) => {
                        if (item.order_id === order._id) {
                          return (
                            <tr key={item._id}>
                              <th scope="row">{++itemcount}</th>
                              <td>
                                {
                                  products.find(
                                    (product) => product._id === item.product_id
                                  )?.name
                                }
                              </td>
                              <td>{item.quantity}</td>

                              <td>{item.price}</td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="container ">
                  <p>
                    <b>Total: </b>
                    {order.total_price} Rs.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

            <div className="d-flex justify-content-center">
              <a
                href="#"
                className="btn btn-success me-2"
                style={{ width: "80px" }}
                onClick={handleOrder}
              >
                View Orders
              </a>
            </div>
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
  fetchSellerProducts: fetchSellerProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductO);

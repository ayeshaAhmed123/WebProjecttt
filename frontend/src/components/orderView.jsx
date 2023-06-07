// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { fetchSellerProducts } from "../reduxStores/actions/productAction";
// import { connect } from "react-redux";

// function OrderView({ products, fetchSellerProducts }) {
//   const [seller, setSeller] = useState({});
//   const [token, setToken] = useState("");
//   const [orders, setOrders] = useState([]);
//   const [orderItems, setOrderItems] = useState([]);
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const ttoken = localStorage.getItem("token");
//     const storedSellerString = localStorage.getItem("seller");
//     const storedSeller = JSON.parse(storedSellerString);
//     setSeller(storedSeller);
//     setToken(ttoken);
//     fetchSellerProducts(ttoken, storedSeller._id);

//     const fetchData = async () => {
//       try {
//         const config = {
//           headers: {
//             authorization: `Bearer ${ttoken}`,
//           },
//         };

//         const response = await axios.get(
//           `http://localhost:5005/order/get/${storedSeller._id}`,
//           config
//         );

//         setOrders(response.data.finalOrders);
//         setOrderItems(response.data.orderItems);
//         console.log(orders, orderItems);

//         // Fetch customers for each order individually
//         orders.forEach((order) => {
//           fetchCustomer(order._id);
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchCustomer = async (id) => {
//       try {
//         const config = {
//           headers: {
//             authorization: `Bearer ${ttoken}`,
//           },
//         };
//         console.log();
//         const response = await axios.get(
//           `http://localhost:5005/order/getCustomer/${id}`,
//           config
//         );

//         let cust = response.data.customer;
//         setCustomers((prevCustomers) => [...prevCustomers, cust]);
//         console.log("Updated Customers:", customers);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   let count = 0;
//   let itemcount = 0;
//   return (
//     <div className="container m-5">
//       {orders.map((order) => (
//         <div className="col-md-11 mb-4" key={order._id}>
//           <div className="card h-100  p-2 ">
//             <h4 className="card-title m-2"> Order {++count}</h4>
//             <div className="d-flex justify-content-between  p-2">
//               <div className="container">
//                 <p className="card-text">
//                   <b>Customer Details:</b>
//                 </p>
//                 <p className="card-text">
//                   Name:{" "}
//                   {
//                     customers.find((cust) => cust._id === order.customer_id)
//                       ?.name
//                   }
//                 </p>
//                 <p className="card-text">
//                   Address:{" "}
//                   {
//                     customers.find((cust) => cust._id === order.customer_id)
//                       ?.address
//                   }
//                 </p>
//                 <p className="card-text">
//                   Phone Number:{" "}
//                   {
//                     customers.find((cust) => cust._id === order.customer_id)
//                       ?.phone
//                   }
//                 </p>
//               </div>
//               <div className="container">
//                 <p className="card-text">
//                   <b>Order Date And time:</b>
//                 </p>
//                 <p className="card-text">
//                   Order Date: {order.order_date.split("T")[0]}
//                 </p>
//                 <p className="card-text">
//                   Order Time: {order.order_date.split("T")[1].substring(0, 8)}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Product Name</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orderItems.map((item) => {
//                     if (item.order_id === order._id) {
//                       return (
//                         <tr key={item._id}>
//                           <th scope="row">{++itemcount}</th>
//                           <td>
//                             {
//                               products.find(
//                                 (product) => product._id === item.product_id
//                               )?.name
//                             }
//                           </td>
//                           <td>{item.quantity}</td>

//                           <td>{item.price}</td>
//                         </tr>
//                       );
//                     }
//                     return null;
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             <div className="container ">
//               <p>
//                 <b>Total: </b>
//                 {order.total_price} Rs.
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   products: state.productStore.products,
// });

// const mapDispatchToProps = {
//   fetchSellerProducts: fetchSellerProducts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(OrderView);

import { fetchSellerProducts } from "../reduxStores/actions/productAction";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderView({ products }) {
  const [seller, setSeller] = useState({});
  const [token, setToken] = useState("");
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    const ttoken = localStorage.getItem("token");
    const storedSellerString = localStorage.getItem("seller");
    const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
    fetchSellerProducts(ttoken, storedSeller._id);

    const fetchData = async () => {
      try {
        const config = {
          headers: {
            authorization: `Bearer ${ttoken}`,
          },
        };

        const response = await axios.get(
          `http://localhost:5005/order/get/${storedSeller._id}`,
          config
        );

        setOrders(response.data.finalOrders);

        setOrderItems(response.data.orderItems);
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
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  let itemcount = 0;
  return (
    <div className="container m-5">
      {orders.map((order, index) => (
        <div className="col-md-11 mb-4" key={order._id}>
          <div className="card h-100  p-2 ">
            <h4 className="card-title m-2"> Order {index + 1}</h4>
            <div className="d-flex justify-content-between  p-2">
              <div className="container">
                <p className="card-text">
                  <b>Customer Details:</b>
                </p>
                <p className="card-text">
                  Name: {customers[index]?.customer?.name}
                </p>
                <p className="card-text">
                  Address: {customers[index]?.customer?.address}
                </p>
                <p className="card-text">
                  Phone Number: {customers[index]?.customer?.phone}
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
                  Order Time: {order.order_date.split("T")[1].substring(0, 8)}
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
  );
}

// export default OrderView;
const mapStateToProps = (state) => ({
  products: state.productStore.products,
});

const mapDispatchToProps = {
  fetchSellerProducts: fetchSellerProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);

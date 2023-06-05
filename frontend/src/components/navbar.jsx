// import React from "react";
// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { getCurrentState } from "../reduxStores/actions/Login";
// import logo from "../assets/LOGOOO.jpg";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Navbar({ isLogin, getCurrentState }) {
//   const history = useNavigate();
//   useEffect(() => {
//     getCurrentState();
//   }, []);
//   // const HandleLogin = () => {
//   //   history("/login");
//   // };
//   // const HandleSignup = () => {
//   //   history("/signup");
//   // };
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
//         <div className="container-fluid">
//           <img src={logo} alt="LOGO" style={{ height: "70px" }} />
//           <a className="navbar-brand fw-bold fs-4" href="#">
//             APNA STORE
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   to="/"
//                   className="nav-link active"
//                   aria-current="page"
//                   href="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Products
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             {!isLogin && (
//               <div className="button">
//                 <Link
//                   className="btn btn-outline-dark"
//                   // onClick={HandleLogin}
//                   to="/login"
//                 >
//                   <i className="fa fa-sign-in me-1"></i> Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="btn btn-outline-dark ms-2"
//                   // onClick={HandleSignup}
//                 >
//                   <i className="fa fa-user-plus me-1"></i> Register
//                 </Link>
//               </div>
//             )}
//             {isLogin && (
//               <div className="button">
//                 <a
//                   href=""
//                   className="btn btn-outline-dark ms-2"
//                   style={{ border: "None", backgroundColor: "#9c86b9" }}
//                 >
//                   <i className="fa fa-lock me-1"></i> Logged In
//                 </a>
//               </div>
//             )}
//             <div className="button">
//               <a href="" className="btn btn-outline-dark ms-2">
//                 <i className="fa fa-shopping-cart me-1"></i> Cart (0)
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   isLogin: state.loginStore.isLogin,
// });

// const mapDispatchToProps = {
//   getCurrentState,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentState } from "../reduxStores/actions/Login";
import logo from "../assets/LOGOOO.jpg";
import { useNavigate, Link } from "react-router-dom";

function Navbar({ isLogin, getCurrentState }) {
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentState();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container-fluid">
          <img src={logo} alt="LOGO" style={{ height: "70px" }} />
          <a className="navbar-brand fw-bold fs-4" href="#">
            APNA STORE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            {!isLogin && (
              <div className="button">
                <Link className="btn btn-outline-dark" to="/login">
                  <i className="fa fa-sign-in me-1"></i> Login
                </Link>
                <Link className="btn btn-outline-dark ms-2" to="/signup">
                  <i className="fa fa-user-plus me-1"></i> Register
                </Link>
              </div>
            )}
            {isLogin && (
              <div className="button">
                <a
                  href=""
                  className="btn btn-outline-dark ms-2"
                  style={{ border: "None", backgroundColor: "#9c86b9" }}
                >
                  <i className="fa fa-lock me-1"></i> Logged In
                </a>
              </div>
            )}
            <div className="button">
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.loginStore.isLogin,
});

const mapDispatchToProps = {
  getCurrentState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
